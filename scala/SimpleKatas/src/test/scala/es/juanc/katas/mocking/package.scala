package es.juanc.katas

import java.io._

package object mocking {

	trait Console {
		def print(message: String): Unit
	}

	class StdOutConsole extends Console {
		override def print(message: String): Unit = println(message)
	}

	class FileOutput(val toFile: String = "greetings.txt") extends Console {
		override def print(message: String): Unit = {
			new PrintWriter(toFile) {
				write(message)
				close()
			}
		}
	}

	case class Greeting(console: Console) {
		def message(message: String): Unit = console.print(message)
	}
}

