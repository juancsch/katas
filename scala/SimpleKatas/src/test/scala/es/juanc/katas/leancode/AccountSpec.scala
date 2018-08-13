package es.juanc.katas.leancode

import es.juanc.katas.UnitFlatSpec

class AccountSpec extends UnitFlatSpec {

//  "Given a fruit name" must "response with its value" in {
//
//    val values =
//      Table(
//        ("fruit", "value"),
//        ("apple",  100),
//        ("cherry", 75),
//        ("banana", 150)
//      )
//
//    forAll(values) { (fruit: String, value: Int) =>
//
//      new Register().valueOf(fruit) shouldBe value
//    }
//  }

  "Given a shopping" must "response with result value" in {

    val account = new Account

    var result = account.add("apple")
    result shouldBe 100

    result = account.add("cherry")
    result shouldBe 175

    result = account.add("banana")
    result shouldBe 325

    account.total should be (325)
  }

  "Given a shopping with discount in cherrys" must "response with total account balance" in {

    val account = new Account

    var result = account.add("apple")
    result shouldBe 100

    result = account.add("cherry")
    result shouldBe 175

    result = account.add("cherry")
    result shouldBe 230

    account.total should be (230)
  }

  "Given a shopping with discount in bananas" must "response with total account balance" in {

    val account = new Account

    var result = account.add("cherry")
    result shouldBe 75

    result = account.add("cherry")
    result shouldBe 130

    result = account.add("banana")
    result shouldBe 280

    result = account.add("banana")
    result shouldBe 280

    account.total should be (280)
  }

  "Given a shopping with different names" must "response with total account balance" in {

    val account = new Account

    var result = account.add("cherry")
    result shouldBe 75

    result = account.add("manzana")
    result shouldBe 175

    result = account.add("cherry")
    result shouldBe 230

    result = account.add("banana")
    result shouldBe 380

    result = account.add("banana")
    result shouldBe 380

    result = account.add("apple")
    result shouldBe 480

    account.total should be (480)
  }

  "Given a shopping with discount in manzanas" must "response with total account balance" in {

    val account = new Account

    var result = account.add("cherry")
    result shouldBe 75

    result = account.add("manzana")
    result shouldBe 175

    result = account.add("cherry")
    result shouldBe 230

    result = account.add("banana")
    result shouldBe 380

    result = account.add("banana")
    result shouldBe 380

    result = account.add("apple")
    result shouldBe 480

    account.total should be (480)
  }
}
