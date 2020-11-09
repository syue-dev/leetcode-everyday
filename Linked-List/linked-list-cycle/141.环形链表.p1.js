/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 * @description
 * 1. 初始化快慢针
 * 2. 迭代 fast
 * 3. 如果 fast next 空结束 证明没有环
 * 4. fast 跑 2 步 slow 跑 1 步
 * 5. 如果 fast 等于 slow 证明相遇有环
 * @time  O(n)
 * @space O(1)
 */
// var hasCycle = function (head) {
// 	let fast = head
// 	let slow = head
// 	while (fast) {
// 		if (fast.next === null) return false
// 		fast = fast.next.next
// 		slow = slow.next
// 		if (fast === slow) return true
// 	}
// 	return false
// }

/**
 * 哈希
 * @param {*} head
 * @return {boolean}
 * @description
 * 1. 初始化一个 map
 * 2. 迭代 head
 * 3. 如果 map 存在 head key 有环
 * 4. 否则保存当前 head key
 * 5. head 递进
 * @time  O(n)
 * @space O(n)
 */
var hasCycle = function (head) {
	let map = new Map()
	while (head) {
		if (map.get(head)) return true
		map.set(head, true)
		head = head.next
	}
	return false
}
// @lc code=end
