import fs from 'fs';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import path from 'path';

// const pathSampleJson = 'file1.json';
// const pathSampleYml = 'file1.yml';
// console.log('pathSample:', pathSample);
// console.log('process.cwd():_', process.cwd());

// console.log('__filename:_', __filename);
// console.log('__dirname):_', __dirname);

// const pathSample2 = '__fixtures__/file1.yml';

const parse = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const absolutePath = path.resolve(__dirname, '..', '__fixtures__', filename);

  // console.log('absolutePath:_', absolutePath);

  const readFile = fs.readFileSync(absolutePath, 'utf8');

  // console.log('readFile:_', readFile);

  const format = path.extname(filename);

  if (format === '.json') {
    // console.log('JSON.parse(readFile):_', JSON.parse(readFile));
    return JSON.parse(readFile);
  }
  if (format === '.yml' || format === '.yaml') {
    // console.log('yaml.load(readFile):_', yaml.load(readFile));
    return yaml.load(readFile);
  }
  return console.log('Unknown fornmat. You can use JSON or YAML formats.');
};

export default parse;
