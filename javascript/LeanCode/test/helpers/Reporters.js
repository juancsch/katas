/**
 *
 * @type {SpecReporter|exports}
 */

var specReporter = require('jasmine-spec-reporter');
var growlReporter = require('jasmine-growl-reporter');

// jasmine.getEnv().addReporter(new specReporter());
jasmine.getEnv().addReporter(new growlReporter());
