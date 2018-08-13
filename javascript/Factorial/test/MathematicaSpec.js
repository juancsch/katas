/**
 * TODO list:
 * -
 */

var chai = require("chai");
var expect = chai.expect;

var Mathematica = require("../src/Mathematica");

describe("Mathematica", function() {

    var data = [{
        number: 0,
        factorial: 1
    }, {
        number: 1,
        factorial: 1
    }, {
        number: 2,
        factorial: 2
    }, {
        number: 3,
        factorial: 6
    }, {
        number: 4,
        factorial: 24
    }];

    data.forEach(function(value) {

        it("factorial de " + value.number + " deberia ser " + value.factorial, function() {

            expect(factorial(value.number)).to.equal(value.factorial);
        });
    });
});

// --- código de produccion ---------------------------------

function factorial(number) {

    return new Mathematica().factorialOf(number);
}
