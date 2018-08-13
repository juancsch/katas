package es.juanc.katas.primefactors

object PrimeFactors {

  def factorize(number: Int, list: List[Int] = List()): List[Int] = {
    // println(s"call $number $list")
    for(i <- 2 to number if number % i == 0) {
      // println(s"factor $i")
      return factorize(number/i, list:+i)
    }
    list
  }

  val fact = factorize _
}
