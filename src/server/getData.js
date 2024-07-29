import fs from 'fs';
import path from 'path';
export async function getData() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'data.json');
  const jsonData =fs.readFileSync(filePath, 'utf-8');
  const dataTools = JSON.parse(jsonData);
  const tags= dataTools.flatMap((tool) => tool.tags);
  const dataTags = [...new Set(tags)];
  return {dataTools,dataTags}
}
