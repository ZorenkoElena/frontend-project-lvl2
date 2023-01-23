import _ from 'lodash';

const indent = (deep, replacer = ' ', spacesCount = 4) => {
  const identCount = replacer.repeat(deep * spacesCount);
  return identCount;
};
const checkForNesting = (data, deep) => {
  if (!_.isObject(data)) {
    return data;
  }
  const keys = Object.keys(data, deep);
  const middleResult = keys.map((key) => `${indent(deep)}    ${key}: ${checkForNesting(data[key], deep + 1)}`);
  return `{\n${middleResult.join('\n')}\n${indent(deep)}}`;
};
const showDetailedOutput = (dataArray, deep = 0) => {
  // console.log('dataArray in stylish:_', dataArray);
  const result = dataArray.map(({
    name, value, type, value1, value2,
  }) => {
    switch (type) {
      case 'created':
        return `${indent(deep)}  + ${name}: ${checkForNesting(value, deep + 1)}`;
      case 'deleted':
        return `${indent(deep)}  - ${name}: ${checkForNesting(value, deep + 1)}`;
      case 'changed':
        return `${indent(deep)}  - ${name}: ${checkForNesting(value1, deep + 1)}\n${indent(deep)}  + ${name}: ${checkForNesting(value2, deep + 1)}`;

      case 'unchanged':
        return `${indent(deep)}    ${name}: ${checkForNesting(value, deep + 1)}`;
      case 'nested':
        return `${indent(deep)}    ${name}: ${showDetailedOutput(value, deep + 1)}`;
      default:
        throw new Error(`Type: ${type} is undefined`);
    }
  });

  const resultString = `{\n${result.flat().join('\n')}\n${indent(deep)}}`;
  // console.log(resultString);
  return resultString;
};
export default showDetailedOutput;
