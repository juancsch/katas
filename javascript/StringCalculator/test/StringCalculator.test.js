
var StringCalculator = require('../src/StringCalculator')
var ParseNumbers = require('../src/ParseNumbers')

function add (numbers) {
	return StringCalculator({
		parseNumbers: ParseNumbers()
	}).add(numbers)
}

describe('Definicion del comportamiendo de StringCalculator', function () {

	describe('Objeto StringCalculator', function () {

		it('deberia instanciar un StringCalculator correctamente', function () {

			var sc = new StringCalculator({})
			expect(sc).toBeDefined()
		})
	})

	describe('suma de numeros,', function () {

		it("deberia devolver la cadena '0' con la cadena vacia", function () {

			var result = add('')
			expect(result).toBe(0)
		});

		['0', '1', '2'].forEach(function (value) {

			it('deberia devolver el numero introducido cuando sea uno solo', function () {

				var result = add(value)
				expect(result).toBe(parseInt(value))
			})
		})

		it('debberia devolver la suma de los dos numeros introducidos', function () {

			var result = add('1,2')
			expect(result).toBe(3)
		})

		it('deberia sumar todos los numeros introducidos', function () {

			var result = add('1,2,3')
			expect(result).toBe(6)
		})
	})
})
