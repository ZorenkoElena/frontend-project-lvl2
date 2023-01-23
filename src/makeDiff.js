import _ from 'lodash';

const findDifferense = (obj1, obj2) => {
  const objArrayOfKeys1 = Object.keys(obj1);

  const objArrayOfKeys2 = Object.keys(obj2);

  const commonArrayOfKeys = _.union(objArrayOfKeys1, objArrayOfKeys2).sort();

  const result = commonArrayOfKeys.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {
        name: key,
        value: findDifferense(obj1[key], obj2[key]),
        type: 'nested',
      };
    }
    if (!_.has(obj2, key)) {
      return {
        name: key,
        value: obj1[key],
        type: 'deleted',
      };
    }
    if (!_.has(obj1, key)) {
      return {
        name: key,
        value: obj2[key],
        type: 'created',
      };
    }
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (obj1[key] !== obj2[key]) {
        return {
          name: key,
          value1: obj1[key],
          value2: obj2[key],
          type: 'changed',
        };
      }
    }
    return {
      name: key,
      value: obj1[key],
      type: 'unchanged',
    };
  });

  return result;
};

export default findDifferense;
