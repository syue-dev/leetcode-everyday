/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.arr = []
	this.arrMin = [Infinity]
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	this.arr.push(x)
	this.arrMin.push(Math.min(this.arrMin[this.arrMin.length - 1], x))
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.arr.pop()
	this.arrMin.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.arr[this.arr.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.arrMin[this.arrMin.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
