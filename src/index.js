'use strict';

const str = 'Аргентина МАНИТ негра';

const reverseLine = (str) => {
  const sep = '';
  const strWithoutGaps = str.toLowerCase().replaceAll(' ', sep);
  const reverseString = strWithoutGaps.split(sep).reverse().join(sep);
  return strWithoutGaps === reverseString;
};

console.log(reverseLine(str));
