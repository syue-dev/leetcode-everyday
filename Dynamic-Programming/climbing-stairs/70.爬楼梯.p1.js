/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * 斐波那契公式
 * @param {number} n
 * @return {number}
 * @description
 * F(n) = (1 / sqrt5) * (((1 + sqrt5) / 2)^(n + 1) - ((1 - sqrt5) / 2)^(n + 1))
 * @time 	O(logn)
 * @space O(1)
 */
// var climbStairs = function (n) {
// 	const sqrt5 = Math.sqrt(5)
// 	return (
// 		(Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)) /
// 		sqrt5
// 	)
// }

/**
 * 动态规划
 * @param {number} n
 * @return {number}
 * @description
 * 1. base f(0) = 1 f(1) = 1
 * 2. f(n) = f(n - 1) + f(n - 2)
 * @time  O(n)
 * @space O(1)
 */
var climbStairs = function (n) {
	const arr = []
	arr[0] = 1
	arr[1] = 1
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2]
	}
	return arr[n]
}

// @lc code=end
