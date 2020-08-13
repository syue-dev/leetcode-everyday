/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * 暴力
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @description
 * 1. 遍历 nums.length - k + 1
 * 2. 遍历 i + k，计算出当前窗口中最大值
 * @time  O(n*k)
 * @space O(1)
 */
// var maxSlidingWindow = function (nums, k) {
// 	const res = []
// 	for (let i = 0; i < nums.length - k + 1; i++) {
// 		let max = Number.MIN_SAFE_INTEGER
// 		for (let j = i; j < i + k; j++) {
// 			max = Math.max(nums[j], max)
// 		}
// 		res.push(max)
// 	}
// 	return res
// }

/**
 * 双端队列
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @description
 * 1. 创建双端队列对象
 * 2. 遍历 nums 如果 i < k - 1 先填满
 * 3. 否则进行双端队列操作，push max pop
 * @time  O(n)
 * @space O(n)
 */
var maxSlidingWindow = function (nums, k) {
	let res = []
	class slideWindow {
		constructor() {
			this.arr = []
		}
		push(val) {
			let data = this.arr
			while (data.length > 0 && data[data.length - 1] < val) {
				data.pop()
			}
			data.push(val)
		}
		pop(val) {
			let data = this.arr
			if (data.length > 0 && data[0] === val) {
				data.shift()
			}
		}
		max() {
			return this.arr[0]
		}
	}

	const windows = new slideWindow()
	for (let i = 0; i < nums.length; i++) {
		if (i < k - 1) {
			windows.push(nums[i])
		} else {
			windows.push(nums[i])
			res.push(windows.max())
			windows.pop(nums[i - k + 1])
		}
	}
	return res
}

// @lc code=end
