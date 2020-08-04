/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * 交换
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @description
 * 1. 定义 j 为遇到非0时放到哪的下标
 * 2. 遍历数组
 * 3. 如果遇到非0数字，交换当前和 j 位置
 * 4. j 指针移动（下一个放0的位置）
 * @time 	O(n)
 * @space O(1)
 */

// var moveZeroes = function (nums) {
// 	let j = 0
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] !== 0) [nums[j++], nums[i]] = [nums[i], nums[j]]
// 	}
// }

// var moveZeroes = function (nums) {
// 	let j = 0
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] !== 0) {
// 			if (j < i) {
// 				nums[j] = nums[i]
// 				nums[i] = 0
// 			}
// 			j++
// 		}
// 	}
// }

/**
 * 两次遍历
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @description
 * 1. 定义 j 为值是 0 的最小下标
 * 2. 遍历数组
 * 3. 如果遇到非0数字，交换当前和 j 位置
 * 4. j 指针移动
 * 5. 再次遍历数组，起始位置为 j，将剩余位置全部置为 0
 * @time 	O(n)
 * @space O(1)
 */

var moveZeroes = function (nums) {
	let j = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[j] = nums[i]
			j++
		}
	}

	for (let i = j; i < nums.length; i++) {
		nums[i] = 0
	}
}
// @lc code=end
