package es.juanc.katas.compress

import es.juanc.katas.UnitWordSpec

class CompressWordSpec extends UnitWordSpec {

	"Compress [Unit of work]" when {

		"given 'a' input [scenario]" should {

			"return 'a' value [behaviour]" in {

				val expected = "a"
				val actual = ""

				actual shouldBe expected
			}
		}
	}
}
