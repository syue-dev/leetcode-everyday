/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
	let len = A.length
	let left = 0
	let right = len - 1
	if (A.length < 3) return false
	while (A[left] < A[left + 1] && left < len - 1) left++
	while (A[right] < A[right - 1] && right > 0) right++
	return A[left] === A[right] && right < len - 1 && left > 0
}
// @lc code=end
