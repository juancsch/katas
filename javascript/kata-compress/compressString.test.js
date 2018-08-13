const
    test = require('tape'),
    compressString = require('./compressString');

[
    {input: '', compressed: ''},
    {input: 'a', compressed: 'a'},
    {input: 'aa', compressed: 'a2'},
    {input: 'aaa', compressed: 'a3'},
    {input: 'aab', compressed: 'a2b'},
    {input: 'bbbaac', compressed: 'b3a2c'},
    {input: 'baacc', compressed: 'ba2c2'}
].forEach(({input, compressed}) => {

    test(`compressString should return "${compressed}" when "${input}" is passed`, ({equal, end}) => {

        const
            expect = compressed,
            actual = compressString(input),
            msg = `${actual} should be equal to ${expect}`

        equal(actual, expect, msg);
        end();
    })
});
