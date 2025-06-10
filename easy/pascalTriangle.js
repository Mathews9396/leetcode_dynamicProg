function generatePascalTraingle(numRows) {
  //Generate the pascals triangle for numRows rows
  const pscTrng = [];
  if (numRows > 0) {
    pscTrng.push([1]);
    if (numRows >= 2) pscTrng.push([1, 1]);
    if (numRows == 1 || numRows == 2) return pscTrng;
  }
  console.log(pscTrng);

  for (let i = 2; i < numRows; i++) {
    let numRowTrng = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0) numRowTrng.push(1);
      else if (j == i) numRowTrng.push(1);
      else {
        numRowTrng.push(pscTrng[i - 1][j] + pscTrng[i - 1][j - 1]);
      }
    }
    pscTrng.push(numRowTrng);
  }
  return pscTrng;
}

console.time('pt')
const result = generatePascalTraingle(30);
console.log(`The Pascals Triangle generated - `, result);
console.timeEnd('pt')