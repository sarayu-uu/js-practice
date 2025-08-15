import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const examplesDir = path.join(__dirname, '../src/examples');
const dataFilePath = path.join(__dirname, '../src/data.ts');

const data = [];

function getOutput(code) {
    try {
        // Create a temporary file to execute the code
        const tempFilePath = path.join(__dirname, 'temp_code.js');
        fs.writeFileSync(tempFilePath, code);

        // Execute the code using Node.js and capture stdout
        const output = execSync(`node "${tempFilePath}"`, { encoding: 'utf8', stdio: 'pipe' });

        // Clean up the temporary file
        fs.unlinkSync(tempFilePath);

        return output.trim();
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

fs.readdirSync(examplesDir, { withFileTypes: true }).forEach(categoryDirent => {
    if (categoryDirent.isDirectory()) {
        const categoryName = categoryDirent.name;
        const categoryPath = path.join(examplesDir, categoryName);

        fs.readdirSync(categoryPath, { withFileTypes: true }).forEach(conceptDirent => {
            if (conceptDirent.isFile() && conceptDirent.name.endsWith('.js')) {
                const conceptName = conceptDirent.name.replace('.js', '');
                const conceptPath = path.join(categoryPath, conceptDirent.name);
                const code = fs.readFileSync(conceptPath, 'utf8');
                const output = getOutput(code);

                data.push({
                    category: categoryName,
                    concept: conceptName,
                    code: code,
                    output: output
                });
            }
        });
    }
});

const tsContent = `
export interface CodeExample {
    category: string;
    concept: string;
    code: string;
    output: string;
}

export const codeExamples: CodeExample[] = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync(dataFilePath, tsContent);
console.log('data.ts generated successfully!');
