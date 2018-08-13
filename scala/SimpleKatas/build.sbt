/** ********* PROJECT INFO *****************/
scalaVersion := "2.12.4"

name := "SimpleKatas"
organization := "es.juanc.katas"
version := "0.0.1"

/** ********* DEPENDENCIES *****************/
libraryDependencies ++= Seq(
  "org.scalatest" %% "scalatest"                   % "3.0.4" % Test,
  "org.scalamock" %% "scalamock-scalatest-support" % "3.4.2" % Test
)

/** ********* COMMANDS ALIASES ******************/
addCommandAlias("t", "test")
addCommandAlias("c", "compile")
addCommandAlias("tc", "test:compile")
