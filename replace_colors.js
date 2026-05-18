import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'src/components/disability-insurance');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const colorMap = {
    '#1B3B5A': '#1A1A1A', // Main Navy -> Charcoal Black
    '#2C3E50': '#2D2D2D', // Lighter Navy -> Dark Grey
    '#0A192F': '#0a0a0a', // Deep Navy -> Pure Black
    '#152e46': '#222222', // Card background 1 -> Darker Grey
    '#183652': '#2b2b2b', // Card background 2 -> Medium Dark Grey
    '#0f2336': '#151515', // Card background 3 -> Very Dark Grey
    '#234567': '#404040', // Borders -> Grey Border
    '#3182A4': '#E69A27', // Light Blue point -> Amber
    '#EDC967': '#D4AF37', // Yellow point -> Muted Gold
    '#1a2530': '#111111', // Hover Navy -> Hover Black
};

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    for (const [oldC, newC] of Object.entries(colorMap)) {
        const regex = new RegExp(oldC, 'gi');
        if (regex.test(content)) {
            content = content.replace(regex, newC);
            changed = false; // it needs to know it actually changed
        }
    }

    // Actually, wait, replacing requires keeping track.
    // Better implementation:
    let newContent = content;
    for (const [oldC, newC] of Object.entries(colorMap)) {
        const regex = new RegExp(oldC, 'gi');
        newContent = newContent.replace(regex, newC);
    }

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
});

const pagePath = path.join(__dirname, 'src/app/disability-insurance/page.tsx');
if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    let newContent = content;
    for (const [oldC, newC] of Object.entries(colorMap)) {
        const regex = new RegExp(oldC, 'gi');
        newContent = newContent.replace(regex, newC);
    }
    if (content !== newContent) {
        fs.writeFileSync(pagePath, newContent, 'utf8');
        console.log(`Updated page.tsx`);
    }
}
