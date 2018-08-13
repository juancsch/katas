package es.juanc.katas.fizzbuzz

object FizzBuzz {

  def eval(number: Int)(implicit cond: List[Int => String]): String = {

//  def eval(number: Int): String = (number % 3, number % 5) match {
//    case (0, 0) => "fizzbuzz"
//    case (0, _) => "fizz"
//    case (_, 0) => "buzz"
//    case _ => number.toString

    cond.map(_(number)).reduce(_+_) match {
      case "" => number.toString
      case result @ _ => result
    }
  }

  def print(limit: Int, printer: String => Unit): Unit = {

//     (1 to limit)
//       .map(eval)
//       .foreach(printer)

    for (i <- 1 to limit)
    yield printer(eval(i))
  }
}
