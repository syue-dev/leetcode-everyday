/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * stack
 * @param {number[]} heights
 * @return {number}
 * @description
 * 1. 创建一个 stack 初始值为 -1
 * 2. 遍历数组
 * 3. 迭代栈，当前元素小于栈顶，计算 max = 栈顶 * (current下标 - 栈顶下标 - 1)
 * 4. 如果当前元素大于栈顶，直接入栈
 * 5. 遍历数组结束后，遍历剩余栈
 * @time  O(n)
 * @space O(n)
 */
var largestRectangleArea = function (heights) {
	let max = 0
	let stack = [-1]
	for (var i = 0; i < heights.length; i++) {
		const current = heights[i]
		while (stack.length > 1 && heights[i] < heights[stack[stack.length - 1]]) {
			max = Math.max(
				max,
				heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
			)
		}
		stack.push(i)
	}
	while (stack.length > 1) {
		max = Math.max(
			max,
			heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
		)
	}
	return max
}
// @lc code=end
