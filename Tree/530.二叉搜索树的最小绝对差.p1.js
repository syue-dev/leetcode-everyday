/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
	let arr = []
	if (!root) return arr
	MiddleOrder(root, arr)
	let min
	for (let index = 0; index < arr.length - 1; index++) {
		let temp = Math.abs(arr[index + 1] - arr[index])
		if (min) {
			if (temp < min) min = temp
		} else {
			min = temp
		}
	}
	console.log(min)
	return min
}

function MiddleOrder(root, arr) {
	if (root.left) {
		MiddleOrder(root.left, arr)
	}
	arr.push(root.val)
	if (root.right) {
		MiddleOrder(root.right, arr)
	}
}
// @lc code=end
