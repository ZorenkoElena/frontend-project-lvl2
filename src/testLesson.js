let deep = 0;
const jsonTostring = (value, replacer = ' ', spacesCount = 1) => {
  deep += 1;

  console.log('value:', value);
  console.log('replacer:', replacer);
  console.log('spacesCount:', spacesCount);

  const dataToArray = Object.entries(value);

  console.log('dataToArray:', dataToArray);

  const midleResult = dataToArray.reduce((acc, [key, value1], index) => {
    // eslint-disable-next-line operator-linebreak
    const finishValue =
      typeof value1 !== 'object'
        ? String(value1)
        : jsonTostring(value1, replacer, spacesCount);

    console.log('key:', key);
    console.log('value1:', value1);
    console.log('index:', index);

    const space = replacer.repeat(spacesCount * deep);
    const newline = `${space}${key}: ${finishValue}\n`;
    const notLastItem = [...acc, newline];

    console.log('notLastItem:', notLastItem);

    const lastItem = `{\n${notLastItem.join('')}}`;

    console.log('lastItem:', lastItem);

    return index === dataToArray.length - 1 ? lastItem : notLastItem;
  }, []);
  console.log(midleResult);
  return midleResult;
};
const data = { hello: 'world', is: true, nested: { count: 5 } };
jsonTostring(data, '*', 2);
