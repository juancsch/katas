package es.juanc.katas.cardgame

import es.juanc.katas.UnitSpec

/**
  * TODO list:
  * - entorno configurado para ejecutar las especificaciones
  * - dado 1 carta to cada jugador gana el jugador uno: "Win player one: 1 to 0"
  * - dada 1 carta to cada jugador empatan: "Tie"
  * - dada 1 carta to cada jugador gana el jugador dos: "Win player two: 1 to 0"
  * - dada 2 cartas to cada jugador gana el jugador dos: "Win player two: 2 to 0"
  * - dada 3 cartas to cada jugador gana el jugador dos: "Win player two: 2 to 1"
  * - ...
  */

class CardGameSpec extends UnitSpec {

  "Spec" must "pass test" in {

    "" shouldBe empty
  }

  "dado N carta to cada jugador" must "se obtiene el resultado parametrizado, con resultado en ingles" in {

    val values =
      Table(
        ("deck1",                         "deck2",                          "expected"),
        (List("12"),                      List("1"),                        "Win player one: 1 to 0"),
        (List("1"),                       List("12"),                       "Win player two: 1 to 0"),
        (List("12", "11"),                List("2", "1"),                   "Win player one: 2 to 0"),
        (List("1", "2"),                  List("12", "11"),                 "Win player two: 2 to 0"),
        (List("1", "12", "2"),            List("12", "11", "10"),           "Win player two: 2 to 1"),
        (List("12", "11", "10"),          List("1", "12", "2"),             "Win player one: 2 to 1"),
        (List("12", "11", "10", "2"),     List("1", "12", "2", "10"),       "Tie"),
        (List("11", "1", "10", "2", "1"), List("11", "1", "10", "10", "5"), "Win player two: 5 to 3")
      )

    forAll(values) { (deck1: List[String], deck2: List[String], expected: String) =>

      CardGameInEn.whoWins(deck1, deck2) shouldBe expected
    }
  }

  "dado 1 carta to cada jugador" must "gana el jugador uno, con resultado en español" in {

    CardGameInEs.whoWins(List("12"), List("1")) should equal("Gana el jugador uno: 1 a 0")
  }
}
