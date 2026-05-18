import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  const client = getClient();
  if (!client) return "죄송합니다. 현재 AI 상담 서비스를 이용할 수 없습니다.";

  try {
    const model = client.models;
    
    // Formatting history for the API if needed, or just sending single prompt for simplicity in this demo context
    // Ideally, we would use chat.sendMessage, but stateless generateContent is often easier for simple widgets without persistent backend.
    
    const prompt = `
      당신은 '더드림법률사무소'의 교통사고 전문 AI 상담사입니다.
      사용자의 질문에 친절하고 전문적으로 답변해주세요.
      단, 구체적인 법률적 판단이나 승소 보장은 하지 마시고, 
      일반적인 절차 안내와 방문 상담을 유도하는 방향으로 답변해주세요.
      답변은 300자 이내로 간결하게 해주세요.
      
      사용자 질문: ${message}
    `;

    const response = await model.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "죄송합니다. 답변을 생성하는 중 오류가 발생했습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};