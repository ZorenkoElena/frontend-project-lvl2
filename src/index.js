import parse from './parse.js';
import makeDiff from './makeDiff.js';
import convertToDesiredFormat from './formaters/formatOfOutput.js';

// path1, path2, (format = 'stylish');

const pathSample = 'file1.json';
const pathSample2 = 'file2.json';

const findDifferense = (path1, path2, format = 'stylish') => {
  const file1obj = parse(path1);
  // console.log('file1obj:_', parse(path1));

  const file2obj = parse(path2);
  // console.log('file2obj:_', file2obj);
  const diff = makeDiff(file1obj, file2obj);
  // console.log('diff:_', diff);
  return convertToDesiredFormat(diff, format);
};
console.log(findDifferense(pathSample, pathSample2));

findDifferense(pathSample, pathSample2);
export default findDifferense;
