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
// 	s = [...s].sort().join('')
// 	t = [...t].sort().join('')
// 	return s === t
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
	if (s.length !== t.length) return false
	const map = new Map()
	for (let i = 0; i < s.length; i++) {
		map.get(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
		map.get(t[i]) ? map.set(t[i], map.get(t[i]) - 1) : map.set(t[i], -1)
	}

	for (let item of map) {
		if (item[1] !== 0) return false
	}
	return true
}
// @lc code=end
