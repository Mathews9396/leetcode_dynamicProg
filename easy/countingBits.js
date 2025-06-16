// function countCharacter(str, char) {
//   return str.split(char).length - 1;
// }

// var countBits = function(start, end) {
//   let decimals = [],
//     countBits = [];
//   for (let i = start; i <= end; i++) {
//     // console.log(i.toString(2));
//     let decimalValue = i.toString(2);
//     let countOf1 = countCharacter(decimalValue, "1");
//     decimals.push([i, decimalValue, countOf1]);
//     countBits.push(countOf1);
//   }
//   console.log(countBits);
// }
// countBits(384,512);

// let i=2, multipleOf2=i*2, multiplesOf2 =[];
// while(i<=36){
//     if(i==multipleOf2){
//         multipleOf2*=2;
//         multiplesOf2.push(i-1);}
//     i++;
// }
// console.log(multiplesOf2);

var countBits = function (n) {
  if (n == 0) retrun[0];
  else if (n == 1) retrun[(0, 1)];

  const ans = [0, 1];
  for (let i = 2; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }

  console.log(ans);

  return ans;
};

countBits(10);
