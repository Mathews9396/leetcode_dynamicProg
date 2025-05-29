/**
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step} n 
 
*/

// 1. Recursive
function recursiveClimbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

//2. Top-Down DP (Memoization)
function topDownClimbStairs(n, memo = {}) {
  if (n <= 2) return n;
  if (memo[n]) return memo[n];
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
}

// 3. Bottom-Up DP (Tabulation)
function bottomUpClimbStairs(n) {
  if (n <= 2) return n;
  let dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}


function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1,
    b = 2;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

//log the output of all four methods
const n = 30;
//process the time taken by each method
console.time("Recursive");
console.log("Recursive:", recursiveClimbStairs(n)); // Output: 21
console.timeEnd("Recursive");
console.time("Top-Down DP");
console.log("Top-Down DP:", topDownClimbStairs(n)); // Output: 21
console.timeEnd("Top-Down DP");
console.time("Bottom-Up DP");
console.log("Bottom-Up DP:", bottomUpClimbStairs(n)); // Output: 21
console.timeEnd("Bottom-Up DP");
console.time("Optimized");
console.log("Optimized:", climbStairs(n)); // Output: 21
console.timeEnd("Optimized");


// console.log("Recursive:", recursiveClimbStairs(n)); // Output: 8
// console.log("Top-Down DP:", topDownClimbStairs(n)); // Output: 8
// console.log("Bottom-Up DP:", bottomUpClimbStairs(n)); // Output: 8
// console.log("Optimized:", climbStairs(n)); // Output: 8
