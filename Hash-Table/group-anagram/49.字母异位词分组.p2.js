/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * 哈希
 * @param {string[]} strs
 * @return {string[][]}
 * @description
 * 1. 创建 hash map 并遍历数组
 * 2. 以异位词为 key 判断是否在 map 中存在
 * 3. 取 map 的 values 集合
 */
var groupAnagrams = function (strs) {
	let hash = new Map()
	for (let i = 0; i < strs.length; i++) {
		const key = [...strs[i]].sort().join('')
		if (hash.has(key)) {
			hash.get(key).push(strs[i])
			hash.set(key, hash.get(key))
		} else {
			hash.set(key, [strs[i]])
		}
	}
	return [...hash.values()]
}
// @lc code=end
