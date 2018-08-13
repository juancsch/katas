package es.juanc.katas

package object stringcalculator {

  // implicit val anotherSeparator = "-"

  def add(factors: String)(implicit separator: String) = factors.trim match {
      case ""                  => "0"
      case factorsTrimmed @ _  =>  factorsTrimmed
                                      .split(separator)
                                      .foldLeft(0)(_+_.toInt)
                                      .toString
  }
}
