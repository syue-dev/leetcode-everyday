/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * 暴力
 * @param {number[]} nums
 * @return {number[][]}
 * @description
 * @time O(n^3)
 */
// var threeSum = function (nums) {
// 	if (!nums || nums.length <= 2) return []
// 	const map = new Map()
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			for (let k = j + 1; k < nums.length; k++) {
// 				if (nums[i] + nums[j] + nums[k] === 0) {
// 					const current = [nums[i], nums[j], nums[k]].sort()
// 					const key = current.join()
// 					if (!map.has(key)) map.set(key, current)
// 				}
// 			}
// 		}
// 	}
// 	return Array.from(map.values())
// }

/**
 * 双指针夹逼
 * @param {number[]} nums
 * @return {number[][]}
 * @description
 * 1. 数组升序排序
 * 2. 循环数组长度
 * 3. 定义左右指针
 * 4. 遍历左右指针重叠，判断三数和 sum
 * 5. 大于 0 右指针递减
 * 6. 小于 0 左指针递增
 * 7. 等于 0 匹配 左右都移动
 * @time O(n^2)
 */
var threeSum = function (nums) {
	if (!nums || nums.length < 3) return []
	const res = []
	nums.sort((a, b) => a - b)
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) break
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let L = i + 1
		let R = nums.length - 1
		while (L < R) {
			const sum = nums[i] + nums[L] + nums[R]
			if (sum === 0) {
				res.push([nums[i], nums[L], nums[R]])
				while (L < R && nums[L] === nums[L + 1]) L++
				while (L < R && nums[R] === nums[R - 1]) R--
				L++
				R--
			} else if (sum > 0) R--
			else if (sum < 0) L++
		}
	}
	return res
}

// @lc code=end
