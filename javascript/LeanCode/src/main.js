/**
 *
 * @type {exports}
 */

var args = process.argv.slice(2);

require('./lib/CashRegister')[args[0].toUpperCase()].start();
