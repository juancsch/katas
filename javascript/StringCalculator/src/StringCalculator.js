/**
 * String calculator
 */
module.exports = StringCalculator

function StringCalculator ({parseNumbers}) {

	return {
		add (numbers = 0) {
			return this.sum(this.addendsOf(numbers || '0'))
		},
		addendsOf (numbers = 0) {
			return parseNumbers.parse(numbers)
		},
		sum (addends = []) {
			return addends.reduce((sum, addend) => sum + parseInt(addend), 0)
		}
	}
}
