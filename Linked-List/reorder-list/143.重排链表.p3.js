/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if (!head) return
	let res = []
	while (head) {
		res.push(head)
		head = head.next
	}
	let i = 0
	let j = res.length - 1
	while (i < j) {
		res[i].next = res[j]
		i++
		if (i === j) break
		res[j].next = res[i]
		j--
	}
	res[j].next = null
}
// @lc code=end
