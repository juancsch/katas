package es.juanc.katas.primefactors

import org.scalatest._

class PrimeFactorsSpec extends FlatSpec with Matchers {

  "Factorization" must "be List() for 1" in {

    PrimeFactors.factorize(1) should equal (List[Int]())
  }

  it must "be List(2) for 2" in {

    PrimeFactors.factorize(2) should equal (List(2))
  }

  it must "be List(3) for 3" in {

    PrimeFactors.factorize(3) should equal (List(3))
  }

  it must "be List(2, 2) for 4" in {

    PrimeFactors.factorize(4) should equal (List(2, 2))
  }
}
