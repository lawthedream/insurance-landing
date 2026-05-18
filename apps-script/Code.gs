/**
 * 더드림법률사무소 — 상담 신청 → Google 스프레드시트 기록기
 *
 * 사용 전 ❶❷ 두 줄만 본인 시트에 맞게 수정하세요.
 *
 * 배포 방법
 *   1) 시트 메뉴 → 확장 프로그램 → Apps Script
 *   2) 이 파일 내용을 그대로 붙여넣기
 *   3) ❶ SPREADSHEET_ID 와 ❷ SHEET_NAME 수정
 *   4) 프로젝트 설정(왼쪽 톱니바퀴) → 시간대 = Asia/Seoul 로 변경
 *   5) 우측 상단 [배포] → 새 배포 → 유형: 웹 앱
 *      - 설명: 아무거나
 *      - 실행 계정: 나 (본인 계정)
 *      - 액세스 권한: 모든 사용자 (Anyone)
 *      → 배포 → 발급되는 /exec 로 끝나는 URL 을 복사
 *   6) 그 URL 을 Next.js 프로젝트의 .env.local 파일
 *      APPS_SCRIPT_URL=  뒤에 붙여넣기
 *   7) Vercel(또는 배포 호스팅) 대시보드에도 같은 키로 등록 → 재배포
 *
 * 코드 수정 후에는 반드시 "새 배포"로 다시 배포해야 반영됩니다.
 * (기존 배포 편집은 URL 이 안 바뀌어 적용이 안 될 수 있어요.)
 */

// ────────────────────────────────────────────────────────
// ❶ 스프레드시트 ID  (시트 URL 의 /d/ 와 /edit 사이 긴 문자열)
//    예: https://docs.google.com/spreadsheets/d/1ABCxyz.../edit
//         → SPREADSHEET_ID 에는 1ABCxyz... 만 넣으면 됩니다.
// ────────────────────────────────────────────────────────
const SPREADSHEET_ID = '여기에_스프레드시트_ID_붙여넣기';

// ────────────────────────────────────────────────────────
// ❷ 워크시트(탭) 이름.  시트 하단 탭 이름과 정확히 일치해야 합니다.
// ────────────────────────────────────────────────────────
const SHEET_NAME = '상담신청';


// =====  여기서부터 아래는 수정하지 않아도 됩니다  =====

/**
 * 시트 1행 헤더 (시트가 비어 있을 때 자동으로 채워집니다)
 * 컬럼을 늘리거나 줄이고 싶으면 이 배열과 아래 appendRow 의 순서만 맞춰주세요.
 */
const HEADERS = [
  '신청일시(KST)',
  '이름',
  '연락처',
  '사고유형',
  '장해진단',
  '문의내용',
  '신청경로',
  '유입경로',
  'IP',
  '페이지유입참조',
  '랜딩URL',
  'UserAgent'
];

// ────────────────────────────────────────────────────────
// 엔트리 포인트 (Next.js 의 appendToSheet 가 POST 로 호출)
// ────────────────────────────────────────────────────────
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    return handleConsultation(data);
  } catch (err) {
    return jsonResponse({ result: 'error', message: String(err) });
  }
}

// 배포가 살아있는지 브라우저로 확인할 때 사용
function doGet() {
  return jsonResponse({
    result: 'ok',
    message: 'insurance-landing sheet writer is alive.'
  });
}

// ────────────────────────────────────────────────────────
// 상담 신청 1건을 시트 맨 아래 줄에 추가
// ────────────────────────────────────────────────────────
function handleConsultation(data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  // 헤더가 없으면 자동 작성
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  const kstTime      = formatKST(data.timestamp);
  const trafficClass = getSourceType(data.pageReferrer, data.landingUrl);

  sheet.appendRow([
    kstTime,
    safe(data.name),
    safe(data.phone),
    safe(data.accidentType),
    safe(data.disabilityStatus),
    safe(data.message),
    safe(data.sourcePage),
    trafficClass,
    safe(data.ip),
    safe(data.pageReferrer),
    safe(data.landingUrl),
    safe(data.userAgent)
  ]);

  return jsonResponse({ result: 'success' });
}

// ────────────────────────────────────────────────────────
// 유입경로 자동 분류
//   1순위: 랜딩 URL 의 utm_source / utm_medium 파라미터
//   2순위: 어느 사이트에서 넘어왔는지(pageReferrer)
//   둘 다 없으면 "직접유입" (URL 직접 입력 / 카톡·앱 등)
// ────────────────────────────────────────────────────────
function getSourceType(pageReferrer, landingUrl) {
  const utm = parseUtmFromUrl(landingUrl);
  if (utm.source && utm.medium) {
    const s = utm.source.toLowerCase();
    const m = utm.medium.toLowerCase();
    if (s.indexOf('naver')  !== -1 && m === 'cpc') return '네이버CPC';
    if (s.indexOf('google') !== -1 && m === 'cpc') return '구글CPC';
    if (s.indexOf('kakao')  !== -1 && m === 'cpc') return '카카오CPC';
    if (s.indexOf('meta')   !== -1 || s.indexOf('facebook') !== -1) return '메타광고';
    return 'UTM(' + utm.source + '/' + utm.medium + ')';
  }

  if (!pageReferrer || pageReferrer === '정보 없음' || pageReferrer === '') {
    return '직접유입';
  }
  const r = String(pageReferrer).toLowerCase();
  if (r.indexOf('naver.com')  !== -1) return '자연유입(네이버)';
  if (r.indexOf('google.')    !== -1) return '자연유입(구글)';
  if (r.indexOf('daum.net')   !== -1 || r.indexOf('kakao.com') !== -1) return '자연유입(다음/카카오)';
  if (r.indexOf('bing.')      !== -1) return '자연유입(빙)';
  if (r.indexOf('youtube.')   !== -1) return '유튜브';
  if (r.indexOf('instagram.') !== -1) return '인스타그램';
  if (r.indexOf('facebook.')  !== -1) return '페이스북';
  return '기타(' + extractDomain(pageReferrer) + ')';
}

function parseUtmFromUrl(url) {
  const out = { source: '', medium: '', campaign: '' };
  if (!url || typeof url !== 'string') return out;
  const qIdx = url.indexOf('?');
  if (qIdx === -1) return out;
  const parts = url.substring(qIdx + 1).split('&');
  for (let i = 0; i < parts.length; i++) {
    const eq = parts[i].indexOf('=');
    if (eq === -1) continue;
    const k = parts[i].substring(0, eq);
    let v = '';
    try {
      v = decodeURIComponent(parts[i].substring(eq + 1).replace(/\+/g, ' '));
    } catch (e) {
      v = parts[i].substring(eq + 1);
    }
    if      (k === 'utm_source')   out.source   = v;
    else if (k === 'utm_medium')   out.medium   = v;
    else if (k === 'utm_campaign') out.campaign = v;
  }
  return out;
}

function extractDomain(url) {
  try {
    const m = String(url).match(/^https?:\/\/([^/?#]+)/i);
    return m ? m[1] : String(url).substring(0, 40);
  } catch (e) {
    return String(url).substring(0, 40);
  }
}

// ────────────────────────────────────────────────────────
// 시간 처리 (Next.js 서버에서 ISO(UTC) 로 보내준 값을 KST 로 변환)
// ────────────────────────────────────────────────────────
function formatKST(isoString) {
  let d;
  try {
    d = isoString ? new Date(isoString) : new Date();
    if (isNaN(d.getTime())) d = new Date();
  } catch (e) {
    d = new Date();
  }
  return Utilities.formatDate(d, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
}

// ────────────────────────────────────────────────────────
// 공통 유틸
// ────────────────────────────────────────────────────────
function safe(v) {
  if (v === undefined || v === null) return '';
  if (v === '정보 없음') return '';   // Next.js sanitize 의 기본값을 비워서 보이게
  return String(v);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
