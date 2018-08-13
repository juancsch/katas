/**
 *
 */

var Register = require("../src/lib/Register");

var resgiterBuilder = function() {

    return new Register.create();
};

describe("Register spectations", function() {

    describe("iteracion 1", function() {

        xit("Acceptan test: marcar el precio acumulado de los productos comprados segun su valor", function () {

            var register = resgiterBuilder();

            expect(register.record('apple')).toBe(100);
            expect(register.record('cherry')).toBe(175);
            expect(register.record('cherry')).toBe(250);
        });

        describe("cuando introducimos un producto obtendremos su valor asignado", function () {

            var register;

            beforeEach(function () {

                register = resgiterBuilder();
            });

            [{
                product: 'banana',
                value: 150
            }, {
                product: 'apple',
                value: 100
            }, {
                product: 'cherry',
                value: 75
            }].forEach(function (params) {

                it("deberia devolver el valor de un/una '" + params.product + "'", function () {

                    expect(register.record(params.product)).toBe(params.value);
                });
            });
        });
    });

    describe("iteracion 2", function() {

        it("Acceptan test: descuento de 20 centimos al comprar [cada] dos 'cherrys'", function () {

            var register = resgiterBuilder();

            expect(register.record('apple')).toBe(100);
            expect(register.record('cherry')).toBe(175);
            expect(register.record('cherry')).toBe(230);
        });
    });

    describe("iteracion 3", function() {

        var register;

        beforeEach(function () {

            register = resgiterBuilder();
        });

        it("Acceptan test 1", function () {

            register.record('apple');
            register.record('cherry');
            expect(register.record('banana')).toBe(325);
        });

        it("Acceptan test 2", function () {

            register.record('cherry');
            expect(register.record('cherry')).toBe(130);
        });
    });

    describe("iteracion 4", function() {

        it("Acceptan test: descuento de 30 centimos al comprar [cada] dos 'cherrys'" +
            " y la segunda banana gratis", function () {

            var register = resgiterBuilder();

            expect(register.record('cherry')).toBe(75);
            expect(register.record('cherry')).toBe(120);
            expect(register.record('banana')).toBe(270);
            expect(register.record('banana')).toBe(270);
        });
    });
});
