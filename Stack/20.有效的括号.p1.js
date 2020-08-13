/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
new Map()
// @lc code=start
/**
 * stack
 * @param {string} s
 * @return {boolean}
 * @description
 * 1. 遍历字符串
 * 2. 遇到左边符号入栈
 * 3. 遇到右边符号，pop栈定匹配
 * @time  O(n)
 * @space O(1)
 */
// var isValid = function (s) {
// 	let arr = []
// 	for (let i = 0; i < s.length; i++) {
// 		switch (s[i]) {
// 			case '(':
// 			case '[':
// 			case '{':
// 				arr.push(s[i])
// 				break
// 			case ')':
// 				if (arr.pop() !== '(') return false
// 				break
// 			case ']':
// 				if (arr.pop() !== '[') return false
// 				break
// 			case '}':
// 				if (arr.pop() !== '{') return false
// 				break
// 		}
// 	}
// 	return !arr.length
// }

/**
 * 暴力
 * @param {string} s
 * @return {boolean}
 * @description
 * 1. 迭代字符串
 * 2. 替换(){}[]
 * 3. 判断替换结果和原串是否一致
 * @time  O(n^2)
 * @space O(1)
 */
var isValid = function (s) {
	while (s.length) {
		let temp = s
		s = s.replace('()', '')
		s = s.replace('[]', '')
		s = s.replace('{}', '')
		if (s === temp) return false
	}
	return true
}
// @lc code=end
