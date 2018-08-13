package es.juanc.katas.stringcalculator

import es.juanc.katas.UnitFlatSpec

class StringCalculatorSpec extends UnitFlatSpec {

  "for every into 'value'" must "return the defined 'result'" in {

    val values =
      Table(
        ("value", "result"),
        ("",      "0"),
        ("  ",    "0"),
        ("1",     "1"),
        ("1,1",   "2"),
        ("1,3,4,2","10")
      )

    forAll(values) { (factors: String, result: String) =>

      implicit val separator = ","

      add(factors) shouldBe result
    }
  }
}
