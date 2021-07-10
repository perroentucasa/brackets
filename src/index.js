module.exports = function check(str, bracketsConfig) {
  let strArr = str.split("");

  for (let symbStr = 0; symbStr < strArr.length; symbStr++) {
    for (let brack = 0; brack < bracketsConfig.length; brack++) {
      if (
        strArr[symbStr] === bracketsConfig[brack][0] &&
        strArr[symbStr + 1] === bracketsConfig[brack][1]
      ) {
        strArr.splice(symbStr, 2);
        symbStr = -1;
      }
    }
  }

  return strArr.length == 0 ? true : false;
};
