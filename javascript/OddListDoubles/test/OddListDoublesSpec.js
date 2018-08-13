/**
 * OddListDoubles
 */

/* TODO List:
 * dados dos numeros, donde a > b devuelve una lista vacia
 * dados dos numeros iguales impares devuelve una lista con un elemento
 * dados dos numeros pares iguales devuelve una lista vacia
 * dados dos numeros no iguales devuelve una lista de tantos elementos como numeros impares haya entre ellos
 * para 1 y 2 devuelve [2]
 * para 1 y 3 devuelve [2, 6]
 * para 1 y 4 devuelve [2, 6]
 * para 1 y 5 devuelve [2, 6, 10]
 * para 1 y 6 devuelve [2, 6, 10]
 */
const chai = require('chai')
const expect = chai.expect

function generarListaDeImparesPor2(a, b) {
  if(a > b) {
    return []
  }

  const result = []

  for(let i = a ; i <= b ; i++) {
    if(i % 2 !== 0) {
      result.push(2 * i)
    }
  }

  return result
}

describe('Listado de los impares multiplicados por dos entre dos numeros', () => {

  it('dados dos numeros, donde a > b devuelve una lista vacia', () => {

    const actual = generarListaDeImparesPor2(2, 1)

    expect(actual).to.deep.equal([])
  })

  it('dados dos numeros iguales impares devuelve una lista con un elemento', () => {

    const actual = generarListaDeImparesPor2(1, 1)

    expect(actual).to.deep.equal([2])
  })

	;[
		{
			a: 1,
			b: 2,
			length: 1
		},
		{
			a: 1,
			b: 3,
			length: 2
		},
		{
			a: 1,
			b: 4,
			length: 2
		},
		{
			a: 1,
			b: 5,
			length: 3
		},
		{
			a: 1,
			b: 6,
			length: 3
		},
		{
			a: 0,
			b: 1,
			length: 1
		}
	].forEach(data => {

		it('dados dos numeros no iguales devuelve una lista de tantos elementos como numeros impares haya entre ellos', () => {
			const expected = data.length
			const actual = generarListaDeImparesPor2(data.a, data.b).length

			expect(actual).to.equal(expected)
		})
	})

	;[
		{
			a: 1,
			b: 2,
			result: [2]
		},
		{
			a: 1,
			b: 3,
			result: [2, 6]
		},
		{
			a: 1,
			b: 4,
			result: [2, 6]
		},
		{
			a: 1,
			b: 5,
			result: [2, 6, 10]
		},
		{
			a: 1,
			b: 6,
			result: [2, 6, 10]
		},
		{
			a: 0,
			b: 1,
			result: [2]
		},
		{
			a: 0,
			b: 0,
			result: []
		}
	].forEach(data => {

	it('dados dos numeros no iguales devuelve los impares entre ellos multiplicados por dos', () => {
			const expected = data.result
			const actual = generarListaDeImparesPor2(data.a, data.b)

			expect(actual).to.deep.equal(expected)
		})
	})
})
