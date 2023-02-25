module.exports = function reverse(n) {
	const positive = n.toString().split('').reverse().join('')
	const negative = n.toString().substring(1).split('').reverse().join('')
	if (n < 0) {
		return negative
	} else {
		return positive
	}
}