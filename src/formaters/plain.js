import _ from 'lodash';

const checkForNesting = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (_.isString(data)) {
    return `'${data}'`;
  }
  return data;
};
const showPlainOutput = (dataArray, deep = '') => {
  const result = dataArray.map(({
    name, value, type, value1, value2,
  }) => {
    switch (type) {
      case 'created':
        return `Property '${deep}${name}' was added with value: ${checkForNesting(value)}`;
      case 'deleted':
        return `Property '${deep}${name}' was removed`;
      case 'changed':
        return `Property '${deep}${name}' was updated. From ${checkForNesting(value1)} to ${checkForNesting(value2)}`;
      case 'unchanged':
        return null;
      case 'nested':
        return showPlainOutput(value, `${deep}${name}.`);
      default:
        throw new Error(`Type: ${type} is undefined`);
    }
  });

  const resultString = result.filter((node) => node !== null).join('\n');
  // console.log(resultString);
  return resultString;
};
export default showPlainOutput;
