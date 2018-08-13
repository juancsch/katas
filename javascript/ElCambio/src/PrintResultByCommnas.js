
// estrategia de formateo de la salida - inyectable
exports.printResultByCommnas = function(resultData) {

    var result = '';
    resultData.forEach(function (data) {
        result += ','+data.sumCoins+'x'+data.coinValue;
    });
    return result.slice(1);
};