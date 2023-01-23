import fs from 'fs';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import path from 'path';

const parse = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const absolutePath = path.resolve(__dirname, '..', '__fixtures__', filename);

  const readFile = fs.readFileSync(absolutePath, 'utf8');

  const format = path.extname(filename);

  if (format === '.json') {
    return JSON.parse(readFile);
  }
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(readFile);
  }
  return console.log('Unknown format. You can use JSON or YAML formats.');
};

export default parse;
