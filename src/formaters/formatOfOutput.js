import showDetailedOutput from './stylish.js';

const convertToDesiredFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return showDetailedOutput(data);

    default:
      console.log('unknown format');
      break;
  }
};
export default convertToDesiredFormat;
