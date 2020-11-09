/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
	let arr = []
	if (!root) return []
	NPostOrder(root, arr)
	return arr
}

function NPostOrder(root, arr) {
	if (!root) return
	for (let i in root.children) {
		if (root.children[i]) {
			NPostOrder(root.children[i], arr)
		}
	}
	arr.push(root.val)
}
// @lc code=end
