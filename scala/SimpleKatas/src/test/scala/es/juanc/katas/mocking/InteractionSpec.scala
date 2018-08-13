package es.juanc.katas.mocking

import es.juanc.katas.UnitFlatSpec

class InteractionSpec extends UnitFlatSpec {

	"Print greeting message with 'hello world!!!'" must "print into console" in {

		val console = mock[Console]
		console.print _ expects "Hello world!!!"

		Greeting(console).message("Hello world!!")
	}
}
