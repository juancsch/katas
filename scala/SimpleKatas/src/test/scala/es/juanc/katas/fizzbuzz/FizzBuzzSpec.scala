package es.juanc.katas.fizzbuzz

import es.juanc.katas.UnitFlatSpec

class FizzBuzzSpec extends UnitFlatSpec {

  "for every into 'value'" should "return the defined 'result'" in {

    val values =
      Table(
        ("value", "result"),
        ( 1,      "1"),
        ( 2,      "2"),
        ( 3,      "fizz"),
        ( 9,      "fizz"),
        ( 5,      "buzz"),
        ( 10,     "buzz"),
        ( 15,     "fizzbuzz"),
        ( 30,     "fizzbuzz")
      )

    forAll(values) { (value: Int, result: String) =>

      FizzBuzz.eval(value) should be (result)
    }
  }

  "from 1 to limit" should "print a list with result" in {

    val printerMock = mockFunction[String, Unit]
    // printerMock expects "buzz" twice()
    // printerMock expects "fizz" repeat 3 times()
    printerMock expects * repeat 10

    FizzBuzz.print(10, printerMock)
  }
}
