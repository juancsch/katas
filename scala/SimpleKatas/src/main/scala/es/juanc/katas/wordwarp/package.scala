package es.juanc.katas

package object wordwarp {

  implicit class WorWarp(sentence : String) {

    def wordWrap(maxLength: Int) : String = {

      sentence.split(" ").foldLeft(Array(""))((out, in) => {
        if ((out.last + " " + in).trim.length > maxLength) out :+ in
        else out.updated(out.length - 1, out.last + " " + in)
      }).mkString("n").trim
    }
  }
}
