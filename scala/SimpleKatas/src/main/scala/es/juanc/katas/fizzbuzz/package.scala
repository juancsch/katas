package es.juanc.katas

package object fizzbuzz {

  implicit val rules: List[Int => String] = List(
    (n: Int) => if (n % 3 == 0) "fizz" else "",
    (n: Int) => if (n % 5 == 0) "buzz" else ""
  )
}
