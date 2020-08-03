/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 枚举
 * @param {number[]} height
 * @return {number}
 * @description
 * 1. 双重循环遍历数组左右边
 * 2. 计算左右边面积 (j - i) * min height
 * 3. 返回面积最大值
 * @time O(n^2)
 * @space O(1)
 */
// var maxArea = function (height) {
// 	let max = 0
// 	for (let i = 0; i < height.length; i++) {
// 		for (let j = i + 1; j < height.length; j++) {
// 			const area = (j - i) * Math.min(height[i], height[j])
// 			max = Math.max(max, area)
// 		}
// 	}
// 	return max
// }

/**
 * 左右边界，中间收敛
 * @param {number[]} height
 * @return {number}
 * @description
 * 1. 定义两个左、右下标
 * 2. 遍历数组，把左、右中高度相对小的进行挪动
 * 3. 计算当前的面积并比对取最大
 * @time O(n)
 * @space O(1)
 */
var maxArea = function (height) {
	let max = 0
	for (let i = 0, j = height.length - 1; i < j; ) {
		let minHeight = height[i] < height[j] ? height[i++] : height[j--]
		max = Math.max(max, (j - i + 1) * minHeight)
	}
	return max
}

// @lc code=end
