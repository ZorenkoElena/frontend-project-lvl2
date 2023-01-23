import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import diff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const absolutePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(absolutePath(filename), 'utf8');
// const expectedAnswer = readFile('result.txt');
// const recevedAnswer = diff('file1.json', 'file2.json');

const tests = [
  ['file1.json', 'file2.json', 'stylish', 'resultStylish.txt'],
  ['file1.json', 'file2.json', 'plain', 'resultPlain.txt'],
  ['file1.json', 'file2.json', 'json', 'resultJson.txt'],
  ['file1.yml', 'file2.yml', 'stylish', 'resultStylish.txt'],
  ['file1.yml', 'file2.yml', 'plain', 'resultPlain.txt'],
  ['file1.yml', 'file2.yml', 'json', 'resultJson.txt'],
  ['file1.json', 'file2.yml', 'stylish', 'resultStylish.txt'],
  ['file1.yml', 'file2.json', 'plain', 'resultPlain.txt'],
];
test.each(tests)('gendiff between %s and %s to output format %s', (file1, file2, outPutFormat, expectedResult) => {
  const filepath1 = absolutePath(file1);
  const filepath2 = absolutePath(file2);
  const answer = readFile(expectedResult);
  const receivedAnswer = diff(filepath1, filepath2, outPutFormat);

  expect(receivedAnswer).toEqual(answer);
});
