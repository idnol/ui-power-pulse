export const formattedData = (num) => {
    if (num < 10000) { return num }; 
    if (num >= 10000 && num < 1000000) { return `${(num / 1000).toFixed()}K` };
    if (num >= 1000000 && num < 1000000000) { return `${(num / 1000000).toFixed()}M` };
    if (num >= 1000000000 && num < 1000000000000) { return `${(num / 1000000000).toFixed()}B` }; }

export const findValue = (el, arr) => {
    const value = arr.find(item => item[el])?.[el] ?? null;
    return value; }

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min; }