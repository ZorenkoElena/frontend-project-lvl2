import _ from 'lodash';
import * as fs from 'fs';
import path from 'path';

// const pathSample = '__fixtures__/file1.json';
// const pathSample2 = '__fixtures__/file2.json';

const findDifferense = (path1, path2) => {
  const fullPath = path.resolve(process.cwd(), path1);
  const fullPath2 = path.resolve(process.cwd(), path2);

  const file1Json = fs.readFileSync(fullPath, 'utf8');
  const file2Json = fs.readFileSync(fullPath2, 'utf8');

  const file1obj = JSON.parse(file1Json);
  const file2obj = JSON.parse(file2Json);

  const file1ArrayOfKeys = Object.keys(file1obj);
  const file2ArrayOfKeys = Object.keys(file2obj);
  const commonArrayOfKeys = _.union(file1ArrayOfKeys, file2ArrayOfKeys).sort();

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
  const result = `{\n${midleresult.join('\n')}\n}`;
  return result;
};
// findDifferense(pathSample, pathSample2);
export default findDifferense;
