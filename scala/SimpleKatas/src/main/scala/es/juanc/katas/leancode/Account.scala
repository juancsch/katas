package es.juanc.katas.leancode

import scala.collection.mutable

class Account {

  private val fruits = mutable.ListBuffer[Fruit]()

  def add(name: String): Int = {
    fruits += Fruit(name)
    total
  }

  def total: Int = {
    sumAllProductsValue - Discount.applyTo(fruits.toList)
  }

  private def sumAllProductsValue = {
    fruits.foldLeft(0)(_ + _.value)
  }
}
