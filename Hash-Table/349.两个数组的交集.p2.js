/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 哈希 + 函数
// var intersection = function (nums1, nums2) {
// 	let temp = {}
// 	return nums1.filter((item) => {
// 		if (!temp[item]) {
// 			temp[item] = true
// 			return nums2.includes(item)
// 		}
// 	})
// }
// 哈希
var intersection = function (nums1, nums2) {
	if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1]
	let hash = new Set(nums1)
	let res = new Set()
	for (let i = 0; i < nums2.length; i++) {
		if (hash.has(nums2[i])) {
			res.add(nums2[i])
		}
	}
	return [...res]
}
// @lc code=end
