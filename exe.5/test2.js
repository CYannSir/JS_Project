var R = require('ramda');
// 练习 1
//==============
// 重构使之成为一个 curry 函数
/*var words = function(str) {
  return split(' ', str);
};*/

//curry函数
var words = split(' ');


// 练习 1a
//==============
// 使用 map 创建一个新函数，使之能够操作字符串数组
//var sentences = undefined;
//map函数
var sentences = map(words);

// 练习 2
//==============
// 重构使之成为一个 curry 函数
/*var filterQs = function(xs) {
  return filter(function(x){ return match(/q/i, x);  }, xs);
};*/
//curry函数
var filterQs = filter(match(/q/i));

// 练习 3
//==============
// 使用帮助函数 _keepHighest 重构 max 使之成为 curry 函数
// 无须改动:
var _keepHighest = function(x,y){ return x >= y ? x : y; };
// 重构这段代码:
/*var max = function(xs) {
  return reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};*/
//重构后
var max = reduce(_keepHighest, -Infinity);

// 彩蛋 1:
// ============
// wrap array's slice to be functional and curried.
// 包裹数组的 slice 函数使之成为 curry 函数
// //[1,2,3].slice(0, 2)
//var slice = undefined;
//curry函数
var slice = _.curry(function(start, end, xs){ return xs.slice(start, end); });

// 彩蛋 2:
// ============
// 借助  slice 定义一个 take  curry函数，接受 n 个元素为参数。
//var take = undefined;
//重构后curry函数
var take = slice(0);

module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
