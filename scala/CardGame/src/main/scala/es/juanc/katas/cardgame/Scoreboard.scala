package es.juanc.katas.cardgame

case class Scoreboard(scorePlayer1: Int, scorePlayer2: Int) {
  def pointToPlayer1: Scoreboard = Scoreboard(scorePlayer1+1, scorePlayer2)
  def pointToPlayer2: Scoreboard = Scoreboard(scorePlayer1, scorePlayer2+1)
  def tie: Scoreboard = Scoreboard(scorePlayer1+1, scorePlayer2+1)
  def player1Win: Boolean = scorePlayer1 > scorePlayer2
  def player2Win: Boolean = scorePlayer1 < scorePlayer2
}
