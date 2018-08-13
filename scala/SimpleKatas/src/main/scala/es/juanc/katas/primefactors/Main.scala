package es.juanc.katas.primefactors

object Main extends App {

  private def addItemsToList = {

    var list = List[Int]()

    // list = 1 :: 2 :: 3 :: list
    list = list :+ 1
    list = list :+ 2
    list = list :+ 3

    println(list)
  }

  addItemsToList
}
