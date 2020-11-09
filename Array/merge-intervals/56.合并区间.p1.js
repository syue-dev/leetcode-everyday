/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	if (intervals.length === 0) return []
	intervals.sort((a, b) => a[0] - b[0])

	let res = []
	res.push(intervals[0])

	for (let i = 0; i < intervals.length; i++) {
		if (intervals[i][0] <= res[res.length - 1][1]) {
			if (intervals[i][1] > res[res.length - 1][1]) {
				res[res.length - 1][1] = intervals[i][1]
			}
		} else {
			res.push(intervals[i])
		}
	}
	return res
}
// @lc code=end
