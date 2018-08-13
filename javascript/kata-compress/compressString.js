module.exports = compressStringFunctional;

function compressStringIterative (uncompressed) {

	let
		index = 0,
		times = 0,
		compressed = '';

	while (index <= uncompressed.length-1) {
		if (uncompressed.charAt(index) !== uncompressed.charAt(index-1)) {
			compressed += uncompressed.charAt(index-1) + (times === 0 ? '' : times);
			times = 0;
		}
		index++;
		times++;
	}

	return compressed + uncompressed.charAt(index-1) + (times <= 1 ? '' : times);
}

function compressStringFunctional (uncompressed) {

	return uncompressed.length > 1 ?
		compressString(uncompressed, 1, 1, uncompressed.charAt(0)) :
		uncompressed;
}

function compressString (uncompressed, index, times, compressed) {

	return index <= uncompressed.length-1 ?
		uncompressed.charAt(index) !== uncompressed.charAt(index-1) ?
		 	compressString(uncompressed, index+1, 1, compressed + (times <= 1 ? '' : times) + uncompressed.charAt(index)) :
		 	compressString(uncompressed, index+1, times+1, compressed) :
		compressed + (times <= 1 ? '' : times);
}

// function compressString (uncompressed, index, times, compressed) {
//
// 	return index <= uncompressed.length-1 ?
// 		compressString(uncompressed, index+1,
// 			nextTime (uncompressed, index, times),
// 		 	compressedValue(uncompressed, index, times, compressed)) :
// 		compressed + (times <= 1 ? '' : times);
// }
//
// function previousCharDiff (uncompressed, index) {
// 	return uncompressed.charAt(index) !== uncompressed.charAt(index-1)
// }
//
// function nextTime (uncompressed, index, times) {
// 	return previousCharDiff(uncompressed, index) ?
// 			1 :
// 			times+1;
// }
//
// function compressedValue (uncompressed, index, times, compressed) {
// 	return previousCharDiff(uncompressed, index) ?
// 		compressed + (times <= 1 ? '' : times) + uncompressed.charAt(index) :
// 		compressed;
// }

compressStringFunctional('adaaassbbbbbdfbfff')
