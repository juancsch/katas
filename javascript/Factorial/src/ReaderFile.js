
var fs = require('fs');

module.exports = {

    readLines: function(file, charset) {

        charset || (charset = "utf8");

        var lines = fs.readFileSync(file, charset).toString().split("\n");
        return lines.filter( function( line ) {
            return !isNaN(parseInt(line));
        });
    }
};

/*
Synchronous:

var fs = require('fs');
var array = fs.readFileSync('file.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}

Asynchronous:

var fs = require('fs');
fs.readFile('file.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
        console.log(array[i]);
    }
});
*/
