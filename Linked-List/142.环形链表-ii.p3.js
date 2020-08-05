/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * 快慢针
 * @param {ListNode} head
 * @return {ListNode}
 * @description
 * 有环时，让任意指针回退到 head 各自走一步
 * 相遇的点就是第一次入环点
 * @time  O(n)
 * @space O(1)
 */
var detectCycle = function (head) {
	let fast = head,
		slow = head
	while (fast) {
		if (fast.next === null) return null
		fast = fast.next.next
		slow = slow.next
		if (fast === slow) {
			fast = head
			while (true) {
				if (fast === slow) return fast
				fast = fast.next
				slow = slow.next
			}
		}
	}
	return null
}
// @lc code=end
