/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	intervals.push(newInterval)
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
