/**
 * Parse to number from string
 */
module.exports = ParseNumbers

function ParseNumbers (separator = ',') {
	return {
		parse (numbers) {
			return numbers.split(separator)
		}
	}
}
