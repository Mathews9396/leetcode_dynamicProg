var getRow = function(rowIndex) {
      //Generate the pascals triangle for rowIndex rows
  const pscTrng = [];

  if (rowIndex == 0) {
    return [1];
  } else if (rowIndex == 1) {
    return [1, 1];
  }
    pscTrng.push([1],[1, 1]);

//   if (rowIndex > 0) {
//     if (rowIndex >= 2) pscTrng.push();
//     if (rowIndex == 1 || rowIndex == 2) return pscTrng;
//   }
//   console.log(pscTrng);
    let numRowTrng = [];

  for (let i = 2; i <= rowIndex; i++) {
    numRowTrng = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0) numRowTrng.push(1);
      else if (j == i) numRowTrng.push(1);
      else {
        numRowTrng.push(pscTrng[i - 1][j] + pscTrng[i - 1][j - 1]);
      }
    }
    pscTrng.push(numRowTrng);
  }
  return numRowTrng;
};

console.log(getRow(20));
