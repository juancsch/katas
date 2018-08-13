/**
 *
 */

var TheChange = require('../src/TheChange');

var coinsAvailable = [50,20,10,5,2,1];
var printResultByCommnas = require('../src/PrintResultByCommnas').printResultByCommnas;

var giveChange = function(amount) {

    var change = TheChange.new({
        coinsAvailable: coinsAvailable,
        printResult: printResultByCommnas
    });

    return change.giveChange(amount);
};

describe("ElCambio:", function() {

    describe('when amount,', function () {

        [ {amount: 1, result: '1x1'},
          {amount: 2, result: '1x2'}, 
          {amount: 4, result: '2x2'},
          {amount: 35, result: '1x20,1x10,1x5'},
          {amount: 123, result: '2x50,1x20,1x2,1x1'}
        ].forEach( function( data ) {

            it("should return " + data.result + " for " + data.amount + ' amount', function() {

                expect( giveChange(data.amount) ).toEqual( data.result );
            });
        });
    });
});
