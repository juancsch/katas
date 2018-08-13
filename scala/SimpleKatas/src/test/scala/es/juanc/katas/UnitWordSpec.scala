package es.juanc.katas

import org.scalamock.scalatest.MockFactory
import org.scalatest.prop.TableDrivenPropertyChecks
import org.scalatest.{Matchers, WordSpec}

abstract class UnitWordSpec extends WordSpec
  with Matchers
  with MockFactory
  with TableDrivenPropertyChecks {
}
