import showDetailedOutput from './stylish.js';
import showPlainOutput from './plain.js';

// eslint-disable-next-line consistent-return
const convertToDesiredFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return showDetailedOutput(data);
    case 'plain':
      return showPlainOutput(data);
    case 'json':
      return JSON.stringify(data);
    default:
      console.log('unknown format');
      break;
  }
};
export default convertToDesiredFormat;
