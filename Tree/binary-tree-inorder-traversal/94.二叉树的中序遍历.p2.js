/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	let arr = []
	if (!root) return arr
	MiddleOrder(root, arr)
	return arr
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
