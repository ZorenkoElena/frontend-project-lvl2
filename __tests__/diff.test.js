import path from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import diff from '../src/diff.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('diff', () => {
  const firstFile = getFixturePath(file1.json);
  const secondFile = getFixturePath(file2.json);
  const expectedAnswer = readFile(result.txt);
  const recevedAnswer = diff(firstFile, secondFile);
  expect(expectedAnswer).toEqual(recevedAnswer);
});
