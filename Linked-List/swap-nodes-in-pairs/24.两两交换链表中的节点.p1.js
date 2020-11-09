/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * 1. 定义哨兵0 哨兵next = 头
 * 2. 迭代条件为当前的next和next的next都不为空
 * 3. 0.next = 1.next (2)
 * 4. 1.next = 2.next (3)
 * 5. 2.next = 1
 * 6. 进入下次迭代 当前 = 当前next
 * @time  O(n)
 * @space O(1)
 */
var swapPairs = function (head) {
	let thead = new ListNode(0)
	thead.next = head
	let current = thead
	while (current.next && current.next.next) {
		let start = current.next
		let end = start.next
		current.next = end
		start.next = end.next
		end.next = start
		current = start
	}
	return thead.next
}
// @lc code=end
