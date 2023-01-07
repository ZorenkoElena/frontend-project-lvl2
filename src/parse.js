import fs from 'fs';
// import yaml from "js-yaml";
import { fileURLToPath } from 'url';
import path from 'path';

// const pathSample = '__fixtures__/file1.json';

// console.log('pathSample:', pathSample);
// console.log('process.cwd():_', process.cwd());

// console.log('__filename:_', __filename);
// console.log('__dirname):_', __dirname);

// const pathSample2 = '__fixtures__/file1.yml';

const parse = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const absolutePath = path.resolve(__dirname, '..', filename);

  // console.log('absolutePath:_', absolutePath);

  const readFile = fs.readFileSync(absolutePath, 'utf8');

  // console.log('readFile:_', readFile);
  // console.log('JSON.parse(readFile):_', JSON.parse(readFile));
  // const format = path.extname(filename);

  // return JSON.parse(readFile);

  // if (format === ".json") {
  return JSON.parse(readFile);
  // }
  // if (format === ".yml" || format === ".yaml") {
  // return yaml.load(readFile);
  // }
};
// parse(pathSample);

export default parse;
