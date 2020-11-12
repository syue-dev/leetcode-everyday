/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
	let i = 0
	let j = 1
	let res = []
	for (let index = 0; index < A.length; index++) {
		if (A[index] % 2 === 0) {
			res[i] = A[index]
			i += 2
		} else {
			res[j] = A[index]
			j += 2
		}
	}
	return res
}
// @lc code=end
