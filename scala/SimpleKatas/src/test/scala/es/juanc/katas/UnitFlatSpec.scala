package es.juanc.katas

import org.scalamock.scalatest.MockFactory
import org.scalatest.{FlatSpec, Matchers}
import org.scalatest.prop.TableDrivenPropertyChecks

abstract class UnitFlatSpec extends FlatSpec
  with Matchers
  with MockFactory
  with TableDrivenPropertyChecks {
}
