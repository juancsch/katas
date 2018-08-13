/**
 * @type {exports}
 */

var StandardInputOutput = require('../inout/StandardInputOutput');
var Cvs2standarOutput = require('../inout/Cvs2standarOutput');

var ReaderFile = require('../inout/ReaderFile');

// Fake ...
var register = {
    new: function() {
    },
    record: function( line ) {
        return line;
    }
};

module.exports = {
    STDINOUT: {
        start: function() {
            StandardInputOutput(register).start();
        }
    },
    CVSINPUT: {
        start: function () {
            new Cvs2standarOutput(register, new ReaderFile()).start();
        }
    }
};
