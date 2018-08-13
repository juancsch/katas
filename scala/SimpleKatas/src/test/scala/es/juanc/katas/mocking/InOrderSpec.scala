package es.juanc.katas.mocking

import es.juanc.katas.UnitFlatSpec

class InOrderSpec extends UnitFlatSpec {

	"Call function" must "in sequence defined" in {

		val mockedFunction = mockFunction[Int, Unit]
		inSequence {
			mockedFunction expects 1
			mockedFunction expects 2
		}

		mockedFunction(1)
		mockedFunction(2)
	}
}
