package es.juanc.katas

package object cardgame {

  trait I18n {
    val tie: String
    def winPlayerOne(scorePlayer1: Int, scorePlayer2: Int): String
    def winPlayerTwo(scorePlayer2: Int, scorePlayer1: Int): String
  }

  object I18nLangs {

    implicit object I18nEn extends I18n {
      val tie: String = "Tie"

      def winPlayerOne(scorePlayer1: Int, scorePlayer2: Int): String =
        winPlayer("one", scorePlayer1, scorePlayer2)

      def winPlayerTwo(scorePlayer2: Int, scorePlayer1: Int): String =
        winPlayer("two", scorePlayer2, scorePlayer1)

      private def winPlayer(player: String, scoreFrom: Int, scoreTo: Int): String =
        s"Win player $player: $scoreFrom to $scoreTo"
    }

    implicit object I18nEs extends I18n {
      val tie: String = "Empate"

      def winPlayerOne(scorePlayer1: Int, scorePlayer2: Int): String =
        winPlayer("uno", scorePlayer1, scorePlayer2)

      def winPlayerTwo(scorePlayer2: Int, scorePlayer1: Int): String =
        winPlayer("dos", scorePlayer2, scorePlayer1)

      private def winPlayer(player: String, scoreFrom: Int, scoreTo: Int): String =
        s"Gana el jugador $player: $scoreFrom a $scoreTo"
    }
	}

  trait CardGameRules {
    def cardScoreOf(playersDeck: (String, String)): (Int, Int)
  }

	object CardGameRules {

		implicit object HigherCard extends CardGameRules {

			private val cards: Vector[String] = Vector("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12")

			def cardScoreOf(playersDeck: (String, String)): (Int, Int) =
				(cards.indexOf(playersDeck._1), cards.indexOf(playersDeck._2))
		}
	}

  // 1) Module way
  object CardGameInEn extends CardGame
//  {
//    // 2) DI by implicits
//    // import I18nLangs.I18nEn
//    // lazy private val cardGame = CardGame()
//    def apply(): CardGame = cardGame
//  }

  // 1) Module way
  object CardGameInEs extends CardGame(i18n = I18nLangs.I18nEs)
//  {
//    // 2) DI by implicits
//    // import I18nLangs.I18nEs
//    // lazy private val cardGame = CardGame()
//    def apply(): CardGame = cardGame
//  }

//  // 3) Cake pattern
//  trait CardGameDeps {
//    val rules: CardGameRules
//    val i18n: I18n
//  }
//
//  trait CardGameDepsEn extends CardGameDeps {
//    val rules: CardGameRules = CardGameRules.HigherCard
//    val i18n: I18n = I18nLangs.I18nEn
//  }
//
//  trait CardGameDepsEs extends CardGameDeps {
//    val rules: CardGameRules = CardGameRules.HigherCard
//    val i18n: I18n = I18nLangs.I18nEs
//  }
//
//  object CardGameInEn extends CardGame
//    with CardGameDepsEn
//
//  object CardGameInEs extends CardGame
//    with CardGameDepsEs
}
