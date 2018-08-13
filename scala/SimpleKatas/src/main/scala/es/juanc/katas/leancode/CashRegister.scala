package es.juanc.katas.leancode

import scala.io.StdIn

object CashRegister extends App {

  val register = new Account

  newLine

  var fruits = ""
  while ({fruits = StdIn.readLine(); fruits.toLowerCase != "exit"}) {
    println(register.add(fruits))
    newLine
  }

  private def newLine = print("> ")
}
