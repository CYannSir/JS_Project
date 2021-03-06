var    R = require('ramda');

console.log('add', R.map(R.add(2)));


// Exercise 1

var words = R.split(' ');

// Exercise 1a
//==============

var sentences = R.map(words);


// Exercise 2
//==============

var filterQs = R.filter(R.match(/q/i));


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

var _keepHighest = function(x,y){ return x >= y ? x : y; }; // <- leave be

var max = R.reduce(_keepHighest, -Infinity);


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = R.curry(function(start, end, xs){ return xs.slice(start, end); });


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. make it curried
var take = R.slice(0);


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };