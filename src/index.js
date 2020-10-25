module.exports = function check(str, bracketsConfig) {
  const arr = str.split('');
  let lengthArr = arr.length;
  let lengthBracketsConfig = bracketsConfig.length;
  for (let i = 0; i < lengthArr; i++) {
    let openBracket = bracketsConfig[i][0];
    let closeBracket = bracketsConfig[i][1];
    let a = 0;
    for (let j = 0; j < lengthBracketsConfig; j++) {
      if (arr[j] === openBracket) {
        a += 1;
      } else if (arr[j] === closeBracket) {
        a -= 1;
      }
      if (a < 0)
        return false;
      if (openBracket = closeBracket) {
        a ++
        if (a / 2 === 0) {
          return true;
        } 
        return false;
      }  
    }
    if (a > 0)
      return false;
  }
  return true;
}

