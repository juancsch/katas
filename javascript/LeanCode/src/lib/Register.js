/**
 *
 * @returns {{record: record, end: end}}
 * @constructor
 */

var newProduct = function( prize, discountRule ) {

    var purchased = 0;

    function calculatePrize() {

        return prize - (discountRule ? discountRule(purchased) : 0);
    }

    return {
        prize: function () {
            purchased++;
            return calculatePrize();
        },
        removeDiscount: function () {
            purchased = 0;
        }
    };
};

var newPoducts = function() {

    var products = {
        'banana': newProduct(150, function( purchaded ) {
            return (purchaded !== 0 && purchaded % 2 === 0) ? 150 : 0;
        }),
        'apple': newProduct(100),
        'cherry': newProduct(75, function( purchaded ) {
            return (purchaded !== 0 && purchaded % 2 === 0) ? 30 : 0;
        })
    };

    return {
        getPrizeOf: function (product) {

            return products[product] ? products[product].prize() : 0;
        },
        removeDiscount: function () {

            products.forEach(function (product) {
                product.removeDiscount();
            });
        }
    }
};

var register = function( products ) {

    var total = 0;

    return {
        record: function( product ) {

            total += products.getPrizeOf(product);
            return total;
        },
        end: function () {
            total = 0;
            products.removeDiscount();
        }
    }
};

module.exports = {

    create: function () {

        return register( newPoducts() );
    }
};
