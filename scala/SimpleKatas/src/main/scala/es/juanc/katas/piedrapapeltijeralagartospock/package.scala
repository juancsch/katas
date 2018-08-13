package es.juanc.katas

package object piedrapapeltijeralagartospock {

  sealed trait Gesture {
    val losers: Seq[Gesture]
    def win(gesture: Gesture): Boolean = losers.contains(gesture)
  }

  final case object Rock extends Gesture {
    val losers: Seq[Gesture] = Seq(Scissors, Lizard)
  }

  final case object Scissors extends Gesture {
    val losers: Seq[Gesture] = Seq(Rock, Lizard)
  }

  final case object Paper extends Gesture {
    val losers: Seq[Gesture] = Seq(Scissors, Spock)
  }

  final case object Lizard extends Gesture {
    val losers: Seq[Gesture] = Seq(Spock, Paper)
  }

  final case object Spock extends Gesture {
    val losers: Seq[Gesture] = Seq(Rock, Scissors)
  }

  def game(player1: Gesture, player2: Gesture): String = {
    if (player1.win(player2)) s"win player 1 win with $player1 over $player2"
    else s"win player2 win with $player2 over $player1"
  }
}
