const input = { s: "axc", t: "ahbgdc" };

var isSubsequence = function ({ s, t }) {
  let sArr = s.split("");
  let originalArr = t.split("");

  let sArrLen = sArr.length;
  for (let i = 0; i < sArrLen; i++) {
    let removed;
    for (let j = 0; j < originalArr.length; j++) {
      if (originalArr[j] == sArr[i]) {
        removed = originalArr.splice(0, j + 1);
        // console.log(`removed - ${removed}`);
        //if all elements in the original array is removed
        if (!originalArr.length) {
          if (i == sArrLen - 1) return true;
          else return false;
        }
        break;
      }
    }
    if(!removed) return false;
  }
  return true;
};

const result = isSubsequence(input);
console.log(`Result - ${result}`);
