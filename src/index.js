import parse from './parse.js';
import makeDiff from './makeDiff.js';
import convertToDesiredFormat from './formaters/formatOfOutput.js';

const findDifferense = (path1, path2, format = 'stylish') => {
  const file1obj = parse(path1);

  const file2obj = parse(path2);

  const diff = makeDiff(file1obj, file2obj);

  return convertToDesiredFormat(diff, format);
};

export default findDifferense;
