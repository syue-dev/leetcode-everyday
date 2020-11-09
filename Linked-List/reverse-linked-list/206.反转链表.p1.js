/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 迭代
 * @param {ListNode} head
 * @return {ListNode}
 * @description
 * 1. 迭代条件为当前节点的 next 为空为止
 * 2. next = Current.next（保存 Current 的 next）
 * 2. Current.next = pre （消费上一次保存 pre）
 * 3. pre = Current （为下次保存 pre）
 * 4. Current= next 进入下次循环 (旧的next是下一个处理对象)
 * @time  O(n)
 * @space O(1)
 */
// var reverseList = function (head) {
// 	let current = head
// 	let pre = null
// 	while (current !== null) {
// 		let next = current.next
// 		current.next = pre
// 		pre = current
// 		current = next
// 	}
// 	return pre
// }
/**
 * 尾递归
 * @param {ListNode} head
 * @return {ListNode}
 * @description
 * @time  O(n)
 * @space O(1)
 */
var reverseList = function (head) {
	let reverse = (pre, current) => {
		if (!current) return pre
		let next = current.next
		current.next = pre
		pre = current
		current = next
		return reverse(pre, current)
	}
	return reverse(null, head)
}
// @lc code=end
