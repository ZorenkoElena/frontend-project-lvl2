import _ from 'lodash';
import parse from './parse.js';
// import * as fs from 'fs';
// import path from 'path';

const pathSample = '__fixtures__/file1.json';
const pathSample2 = '__fixtures__/file2.json';

const findDifferense = (path1, path2) => {
  const file1obj = parse(path1);
  console.log('file1obj:_', parse(path1));
  const file2obj = parse(path2);
  console.log('file2obj:_', file2obj);
  const file1ArrayOfKeys = Object.keys(file1obj);
  console.log('file1ArrayOfKeys:_', file1ArrayOfKeys);

  const file2ArrayOfKeys = Object.keys(file2obj);
  console.log('file2ArrayOfKeys:_', file2ArrayOfKeys);

  const commonArrayOfKeys = _.union(file1ArrayOfKeys, file2ArrayOfKeys).sort();
  console.log('commonArrayOfKeys:_', commonArrayOfKeys);

  const midleresult = commonArrayOfKeys.reduce((acc, key) => {
    const newline = [];
    if (_.has(file1obj, key) && _.has(file2obj, key)) {
      if (file1obj[key] === file2obj[key]) {
        newline.push(`    ${key}: ${file1obj[key]}`);
      } else {
        newline.push(`  - ${key}: ${file1obj[key]}`);
        newline.push(`  + ${key}: ${file2obj[key]}`);
      }
    }
    if (_.has(file1obj, key) && !_.has(file2obj, key)) {
      newline.push(`  - ${key}: ${file1obj[key]}`);
    }
    if (!_.has(file1obj, key) && _.has(file2obj, key)) {
      newline.push(`  + ${key}: ${file2obj[key]}`);
    }
    return [...acc, ...newline];
  }, []);

  console.log('midleresult:_', midleresult);

  const result = `{\n${midleresult.join('\n')}\n}`;

  console.log('result:_', result);
  return result;
};
// console.log(findDifferense(pathSample, pathSample2));

findDifferense(pathSample, pathSample2);
export default findDifferense;
