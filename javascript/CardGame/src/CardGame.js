
module.exports = function build() {
  return Game(ScoreBuilder.withDefaultTexts(), CardGameRules())
}

const Game = function(MathScore, rules) {
  // Object.create(obj/prototype) ...

  const checkRoundWinner = function(deckPlayer1 = '', deckPlayer2 = '', matchScore = {}) {
    if(rules.scoredOf(deckPlayer1) > rules.scoredOf(deckPlayer2)) {
      matchScore.point2Player1()
    } else if(rules.scoredOf(deckPlayer1) < rules.scoredOf(deckPlayer2)) {
      matchScore.point2Player2()
    } else {
      matchScore.tie()
    }
  }

  function match(deckPlayer1 = [], deckPlayer2 = []) {
    const matchScore = MathScore()

    for(let round = 0 ; deckPlayer1.length > round ; round++) {
      checkRoundWinner(deckPlayer1[round], deckPlayer2[round], matchScore)
    }

    return matchScore
  }

  return {
    whoWins(deckPlayer1, deckPlayer2) {
      return match(deckPlayer1, deckPlayer2).printResult()
    }
  }
}

const ScoreBuilder =(function() {

  const defaultTexts = {
    TIE: 'Tie',
    WIN_ONE: 'Win player one',
    WIN_TWO: 'Win player two',
  }

  return {
    withI18n(texts = defaultTexts) {
      return function() {
        return Score(texts)
      }
    },
    withDefaultTexts() {
      return this.withI18n()
    }
  }
})()

const Score = function(texts = '') {

  let player1 = 0
  let player2 = 0

  return {
    point2Player1() {
      player1++
    },
    point2Player2() {
      player2++
    },
    tie() {
      player1++
      player2++
    },
    printResult() {
      let result = texts.TIE
      if(player1 > player2) {
        result = `${texts.WIN_ONE}: ${player1} a ${player2}`
      } else if(player1 < player2) {
        result = `${texts.WIN_TWO}: ${player2} a ${player1}`
      }
      return result
    }
  }
}

const CardGameRules = function() {

	const cardRank = '123456789JQK'

  return {
    scoredOf(card) {
      return cardRank.indexOf(card)
    }
  }
}
