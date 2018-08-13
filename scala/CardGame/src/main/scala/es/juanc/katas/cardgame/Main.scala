package es.juanc.katas.cardgame

object Main extends App {

  val cards: Vector[String] = Vector("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12")

  println(
    cards.indexOf("12")
  )

  val man = List("juan", "pepe")
  val woman = List("ana", "mari")

  (man zip woman) foreach println

  cards.reduce((reduction, actual) => {
    println(s"a:$reduction b:$actual")
    reduction + actual
  })
}
