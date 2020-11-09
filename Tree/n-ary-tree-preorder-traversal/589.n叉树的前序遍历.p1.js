/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
	let arr = []
	if (!root) return []
	NPPreOrder(root, arr)
	return arr
}

function NPPreOrder(root, arr) {
	if (!root) return
	arr.push(root.val)
	for (let i in root.children) {
		if (root.children[i]) {
			NPPreOrder(root.children[i], arr)
		}
	}
}
// @lc code=end
