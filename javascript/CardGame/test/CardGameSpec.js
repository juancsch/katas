/**
 * TODO list:
 * - entorno configurado para ejecutar las especificaciones
 * - dado 1 carta a cada jugador gana el jugador uno: "Win player one: 1 a 0"
 * - dada 1 carta a cada jugador empatan: "Tie"
 * - dada 1 carta a cada jugador gana el jugador dos: "Win player two: 1 a 0"
 * - dada 2 cartas a cada jugador gana el jugador dos: "Win player two: 2 a 0"
 * - dada 3 cartas a cada jugador gana el jugador dos: "Win player two: 2 a 1"
 * - ...
 */

const chai = require('chai')
const expect = chai.expect

const CardGame = require('../src/CardGame')

describe('Configuracion del entorno', function() {
  it('deberia pasar el test cuando el entorno este correctamente configurado', function() {
    expect(true).to.be.eq(true)
  })
})

describe("Especificaciones del 'CardGame'", function() {

  const spectation = ({description, given, then}) => {

    const whoWins = CardGame().whoWins(given.deckPlayer1, given.deckPlayer2)

    it(description, function() {
      expect(whoWins).to.equal(then)
    })
  }

  describe('cuando se reparte una carta', function() {
    [
      {
        description: 'mayor al jugador uno deberia ganar el jugador uno: 1 a 0',
        given: {
          deckPlayer1: ['K'],
          deckPlayer2: ['1'],
        },
        then: 'Win player one: 1 a 0',
      },
      {
        description: 'mayor al jugador dos deberia ganar el jugador dos: 1 a 0',
        given: {
          deckPlayer1: ['1'],
          deckPlayer2: ['K'],
        },
        then: 'Win player two: 1 a 0',
      },
      {
        description: 'iguales a ambos jugadores empatan',
        given: {
          deckPlayer1: ['K'],
          deckPlayer2: ['K'],
        },
        then: 'Tie',
      },
    ].forEach(spectation)
  })

  describe('cuando se reparte 2 cartas', function() {
    [
      {
        description: 'ambas mayores al jugador dos este gana: 2 a 0',
        given: {
          deckPlayer1: ['K', 'Q'],
          deckPlayer2: ['1', '2'],
        },
        then: 'Win player one: 2 a 0',
      },
      {
        description: 'iguales a ambos jugadores empatan',
        given: {
          deckPlayer1: ['K', '1'],
          deckPlayer2: ['K', '1'],
        },
        then: 'Tie',
      },
    ].forEach(spectation)
  })

  describe('cuando se reparte 3 cartas', function() {
    [
      {
        description: 'todas mayores al jugador uno este gana: 3 a 0',
        given: {
          deckPlayer1: ['K', 'Q', 'J'],
          deckPlayer2: ['1', '2', '3'],
        },
        then: 'Win player one: 3 a 0',
      },
      {
        description: 'gana el jugador dos: 2 a 1',
        given: {
          deckPlayer1: ['2', '1', '7'],
          deckPlayer2: ['K', 'Q', '1'],
        },
        then: 'Win player two: 2 a 1',
      },
      {
        description: 'gana el jugador uno: 2 a 1',
        given: {
          deckPlayer1: ['K', '1', 'Q'],
          deckPlayer2: ['1', 'K', '2'],
        },
        then: 'Win player one: 2 a 1',
      },
    ].forEach(spectation)
  })
})
