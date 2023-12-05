const value = "33";
const value1 = "33abc";
const value2 = null;
const value3 = undefined;
const value4 = true;
const value5 = "";
const value6 = "Name";
const value7 = 33;

const convertToNum = Number(value);
const convertToNum1 = Number(value1); // Will be converted but output will be NaN
const convertToNum2 = Number(value2); // Will be converted but output will be 0
const convertToNum3 = Number(value3); // Will be converted but output will be Nan
const convertToNum4 = Number(value4); // Will be converted but output will be 1
const convertToBool = Boolean(value4); // Will be converted but output will be 1
const convertToBool1 = Boolean(value5); // Will be converted but output will be false
const convertToBool2 = Boolean(value6); // Will be converted but output will be true
const convertToStr = String(value7); // Will be converted but output will be string 33
