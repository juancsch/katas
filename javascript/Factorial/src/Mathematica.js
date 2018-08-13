/**
 * Mathematica.js
 */

var Mathematica = function() {
};

Mathematica.prototype.factorialOf = function(number) {

    /* Recursiva
    if( number === 0 ) {
        return 1;
    } else {
        return number * this.factorialOf(number-1);
    }*/

    /* Iterativa */
    var result = 1;
    for( var i = number ; i > 1 ; i-- ) {
        result *= i;
    }
    return result;
};

module.exports = Mathematica;
