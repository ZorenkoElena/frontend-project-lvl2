import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import diff from '../src/index.js';

const pathSample = 'result.txt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const absolutePath = (filename) =>
  path.resolve(__dirname, '..', '__fixtures__', filename);
console.log('absolutePath(pathSample):_', absolutePath(pathSample));

const readFile = (filename) => fs.readFileSync(absolutePath(filename), 'utf8');

console.log('readFile(pathSample):_', readFile(pathSample));

const expectedAnswer = readFile('result.txt');
console.log('expectedAnswer:_', expectedAnswer);

const recevedAnswer = diff('file1.json', 'file2.json');
console.log('recevedAnswer:_', recevedAnswer);

test('diff', () => {
  expect(expectedAnswer).toEqual(recevedAnswer);
});
