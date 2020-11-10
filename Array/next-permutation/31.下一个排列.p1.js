/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 先找出最大的索引 k 满足 nums[k] < nums[k+1]，如果不存在，就翻转整个数组；
// 再找出另一个最大索引 l 满足 nums[l] > nums[k]；
// 交换 nums[l] 和 nums[k]；
// 最后翻转 nums[k+1:]。

var nextPermutation = function (nums) {
	if (nums == null || nums.length == 0) return
	let maxIndexK = -1
	for (let i = nums.length - 2; i >= 0; i--) {
		if (nums[i] < nums[i + 1]) {
			maxIndexK = i
			break
		}
	}
	if (maxIndexK === -1) {
		nums.reverse()
		return
	}
	let maxIndexL = -1
	for (let j = nums.length - 1; j >= 0; j--) {
		if (nums[j] > nums[maxIndexK]) {
			maxIndexL = j
			break
		}
	}
	;[nums[maxIndexK], nums[maxIndexL]] = [nums[maxIndexL], nums[maxIndexK]]
	let left = maxIndexK + 1
	let right = nums.length - 1
	while (left < right) {
		;[nums[left], nums[right]] = [nums[right], nums[left]]
		left++
		right--
	}
}
// @lc code=end
