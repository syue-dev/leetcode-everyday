/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
	let i = 0,
		j = 0
	while (j < typed.length) {
		if (i < name.length && name[i] === typed[j]) {
			i++
			j++
		} else if (j > 0 && typed[j - 1] === typed[j]) {
			j++
		} else {
			return false
		}
	}
	return i === name.length
}
// @lc code=end
