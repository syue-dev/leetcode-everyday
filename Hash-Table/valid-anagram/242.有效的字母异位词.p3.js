/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * 排序
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description
 * 1. 分割数组排序再判断是否相等
 * @time O(nlogn)
 * @space O(1)
 */
// var isAnagram = function (s, t) {
// 	if (s.length !== t.length) return false
// 	return [...s].sort().join('') === [...t].sort().join('')
// }

/**
 * 哈希
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description
 * 1. 创建 map key 为字符串 value 为字符串出现的次数
 * 2. 针对 s 做累加，针对 t 做核减
 * 3. 判断 map 的中 key 的 value 是否为 0
 * @time O(n)
 * @space O(1)
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) {
		return false
	}
	let hash = new Map()
	for (let i = 0; i < s.length; i++) {
		hash.has(s[i]) ? hash.set(s[i], hash.get(s[i]) + 1) : hash.set(s[i], 1)
		hash.has(t[i]) ? hash.set(t[i], hash.get(t[i]) - 1) : hash.set(t[i], -1)
	}
	for (const item of hash) {
		if (item[1] !== 0) return false
	}
	return true
}
// @lc code=end
