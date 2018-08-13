/**
 * TODO list:
 * - entorno configurado para ejecutar las especificaciones
 * - triangular con distintos valores
 */

var chai = require("chai");
var expect = chai.expect;

var factorial = require('../src/PrimeFactors')

describe("Configuracion del entorno", function() {

    it("deberia pasar el test al ejecutar el entorno de testing", function () {

        expect(true).to.be.eql(true);
    });
});

describe("PrimeFactors", function () {

    it("la factorizacion de 0, 1 es []", function () {

        var numbers = [0, 1];

        for (var i = 0; i < numbers.length; i++) {
            expect( factorial( numbers[i] ) ).have.members( [] );
        }
    });

    it("la factorizacion de 2 es [2]", function () {

        expect( factorial( 2 ) ).have.members( [2] );
    });

    it("la factorizacion de 2 es [3]", function () {

        expect( factorial( 3 ) ).have.members( [3] );
    });

    it("la factorizacion de 4 es [2, 2]", function () {

        expect( factorial( 4 ) ).have.members( [2, 2] );
    });

    it("la factorizacion de 5 es [5]", function () {

        expect( factorial( 5 ) ).have.members( [5] );
    });

    it("la factorizacion de 6 es [2, 3]", function () {

        expect( factorial( 6 ) ).have.members( [2, 3] );
    });

    it("la factorizacion de 7 es [7]", function () {

        expect( factorial( 7 ) ).have.members( [7] );
    });

    it("la factorizacion de 8 es [2, 2, 2]", function () {

        expect( factorial( 8 ) ).have.members( [2, 2, 2] );
    });

    it("la factorizacion de 9 es [3, 3]", function () {

        expect( factorial( 9 ) ).have.members( [3, 3] );
    });
});
