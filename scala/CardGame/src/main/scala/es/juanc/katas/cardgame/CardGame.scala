package es.juanc.katas.cardgame

case class CardGame(i18n: I18n = I18nLangs.I18nEn,
                    rules: CardGameRules = CardGameRules.HigherCard) {

//case class CardGame(implicit val i18n: I18n,
//                    implicit val rules: CardGameRules) {

//class CardGame{
//	this: CardGameDeps =>

	def whoWins(deckPlayer1: List[String], deckPlayer2: List[String]): String = {

//		 val whoWins = calculateScore _ andThen messageResult
//		 val whoWins = messageResult _ compose calculateScore
//		 whoWins(deckPlayer1 zip deckPlayer2)

		(calculateScore _ andThen messageResult) (deckPlayer1 zip deckPlayer2)
	}

	private def calculateScore(decks: List[(String, String)]) = {

    decks.map(playersDeck => {

      val cardScore: (Int, Int) = rules.cardScoreOf(playersDeck)

      if (cardScore._1 > cardScore._2) (1,0)
      else if (cardScore._1 < cardScore._2) (0,1)
      else (1,1)
    }).reduce((reduction, actual) => {
      (reduction._1+actual._1, reduction._2+actual._2)
    })

//		decks.foldLeft[Scoreboard](Scoreboard(0,0))((score, playersDeck) => {
//
//			val cardScore: (Int, Int) = rules.cardScoreOf(playersDeck)
//
//			if (cardScore._1 > cardScore._2)
//				score.pointToPlayer1
//			else if (cardScore._1 < cardScore._2)
//				score.pointToPlayer2
//			else
//				score.tie
//		})
	}

//	private def messageResult(score: Scoreboard) = {
//
//		if (score.player1Win)
//			i18n.winPlayerOne(score.scorePlayer1, score.scorePlayer2)
//		else if (score.player2Win)
//			i18n.winPlayerTwo(score.scorePlayer2, score.scorePlayer1)
//		else
//			i18n.tie
//	}

  private def messageResult(score: (Int, Int)) = {
    if (score._1 > score._2) i18n.winPlayerOne(score._1, score._2)
    else if (score._1 < score._2) i18n.winPlayerTwo(score._2, score._1)
    else i18n.tie
  }
}
