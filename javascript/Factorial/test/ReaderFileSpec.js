/**
 * TODO list:
 * -
 */

var chai = require("chai");
var expect = chai.expect;

var fs = require("fs");

describe("Reader file", function () {

    beforeEach(function() {

        console.log("reading file ...");
    });

    it("Leer un archivo y pasar cada linea a una entrada de un array", function() {

        var fileData = fs.readFileSync("test/dataSpec.txt").toString().split("\n");

        expect( fileData ).have.members([ '1', '2', '3', '' ]);
    });
});
