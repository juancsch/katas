/**
 * Factorial
 */

var Mathematica = require("./Mathematica");
var printer = require("./Printer");
var reader = require("./ReaderFile");

module.exports = {

    execute: function( file ) {

        var factorialOf = new Mathematica().factorialOf();

        var lines = reader.readLines(file);
        for (var i = 0; i < lines.length; i++) {
            printer.print( factorialOf( lines[i] ) );
        }
    }
};
