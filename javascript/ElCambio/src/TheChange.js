
var TheChange = function(options) {

    var coinsAvailable = options.coinsAvailable;
    var printResult = options.printResult;

    /* var newResultData = function () {
        var resultData = [];

        function isMayorThanZero(sumCoins) {
            return !!sumCoins;
        }

        return {
            add: function(data) {
                if(isMayorThanZero(data.sumCoins)) {
                    resultData.push(data);
                    return true;
                }
                return false;
            },
            get: function() {
                return resultData;
            }
        };
    }; */

    function sumCoinsByValue(amount, coinValue) {
        // podria encapsular/indirecionar una estrategia - detalle
        return (amount / coinValue) >> 0;
    }

    function isMayorThanZero(sumCoins) {
        return !!sumCoins;
    }

    this.giveChange = function(amount) {

        var resultData = []; // posible encapsulacion de coleccion
        coinsAvailable.forEach( function(coinValue) {
            var sumCoins = sumCoinsByValue(amount, coinValue); // semantica de alto nivel
            if(isMayorThanZero(sumCoins)) { // semantica de alto nivel
                resultData.push({sumCoins: sumCoins, coinValue: coinValue});
                amount %= coinValue; // ¿como quitar este detalle de implementacion para dar semantica al met. publico?
            }
        });
        return printResult( resultData );
    };
};

module.exports = TheChange;