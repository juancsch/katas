package es.juanc.katas.compress

import es.juanc.katas.UnitFlatSpec

class CompressFlatSpec extends UnitFlatSpec {

	behavior of "compression algorithm"

	it should "return a string compressed for 'value'" in {

		val values =
			Table(
				("value", "expected"),
				("", ""),
				("a", "a"),
				("aaa", "a3"),
				("aab",   "a2b"),
				("baacc", "ba2c2"),
				("adfggeqwdddvwweffggggseahargra", "adfg2eqwd3vw2ef2g4seahargr")
			)

		forAll(values) { (value: String, expected: String) =>

			compress(value) shouldBe expected
		}
	}

	def compress(uncompress: String, times: Int = 1): String = uncompress.toList match {
		case Nil => uncompress
		case head :: Nil => head.toString + toNumber(times)
		case head :: tail =>
			if (head == tail.head) compress(tail.mkString, times+1)
			else head.toString + toNumber(times) + compress(tail.mkString)
	}

	val toNumber: Int => String = (times: Int) => {
		if (times > 1) times.toString
		else ""
	}
}
