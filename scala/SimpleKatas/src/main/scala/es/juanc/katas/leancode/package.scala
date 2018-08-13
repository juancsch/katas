package es.juanc.katas

package object leancode {

  trait Fruit {
    val value: Int
  }

  abstract class AbstractApple extends Fruit { val value = 100 }
  case class Apple() extends AbstractApple
  case class Apfel() extends AbstractApple
  case class Manzana() extends AbstractApple
  case class Cherry() extends Fruit { val value = 75 }
  case class Banana() extends Fruit { val value = 150 }
  case class Unknown() extends Fruit { val value = 0 }

  object Fruit {
    def apply(fruit: String): Fruit = fruit match {
      case "apple" | "apples" => Apple()
      case "apfel" => Apfel()
      case "manzana" => Manzana()
      case "cherry" => Cherry()
      case "banana" => Banana()
      case _ => Unknown()
    }
  }
}
