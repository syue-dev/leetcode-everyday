/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
	let arr = []
	if (!root) return []
	PreOrder(root, arr)
	return arr
}

function PreOrder(root, arr) {
	arr.push(root.val)
	if (root.left) PreOrder(root.left, arr)
	if (root.right) PreOrder(root.right, arr)
}
// @lc code=end
