package es.juanc.katas.leancode

object Discount {

  sealed trait Discount {
    def value: Int
    def applyTo(fruits: List[Fruit]): Int
  }

  private object ThereAreTwoCherry extends Discount {
    def value: Int = 20
    def applyTo(fruits: List[Fruit]): Int =
      if (fruits.count(_.isInstanceOf[Cherry]) == 2) value else 0
  }

  private object ThereAreTwoBanana extends Discount {
    def value: Int = Banana().value
    def applyTo(fruits: List[Fruit]): Int =
      if (fruits.count(_.isInstanceOf[Banana]) == 2) value else 0
  }

  private object ThereAreThreeApfel extends Discount {
    def value: Int = 100
    def applyTo(fruits: List[Fruit]): Int =
      if (fruits.count(_.isInstanceOf[Apfel]) == 2) value else 0
  }

  private object ThereAreThreeManzana extends Discount {
    def value: Int = 50
    def applyTo(fruits: List[Fruit]): Int =
      if (fruits.count(_.isInstanceOf[Manzana]) == 3) value else 0
  }

  private val discounts: Seq[Discount] = Seq(
    ThereAreTwoCherry,
    ThereAreTwoBanana,
    ThereAreThreeApfel,
    ThereAreThreeManzana
  )

  def applyTo(fruits: List[Fruit]): Int = {
    discounts map (_ applyTo fruits) sum
  }

//  def applyTo(fruits: List[Fruit]): Int = {
//    var total = 0
//    if (thereAreTwoCherry(fruits)) total += 20
//    if (thereAreTwoBanana(fruits)) total += Banana().value
//    if (thereAreThreeManzana(fruits)) total += 100
//    if (thereAreThreeApfel(fruits)) total += 50
//    total
//  }
//
//  private def thereAreTwoCherry(fruits: List[Fruit]): Boolean =
//    fruits.count(_.isInstanceOf[Cherry]) == 2
//
//  private def thereAreTwoBanana(fruits: List[Fruit]): Boolean =
//    fruits.count(_.isInstanceOf[Banana]) == 2
//
//  private def thereAreThreeApfel(fruits: List[Fruit]): Boolean =
//    fruits.count(_.isInstanceOf[Apfel]) == 2
//
//  private def thereAreThreeManzana(fruits: List[Fruit]): Boolean =
//    fruits.count(_.isInstanceOf[Manzana]) == 3
}
