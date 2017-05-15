// 在当前目录 npm install ramda accounting
require('../../support');

var R = require('ramda');
var accounting = require('accounting');

// 示例数据
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// 练习 1:
// ============
// 使用 R.compose() 重写下面这个函数。提示：R.prop() 是 curry 函数
/*var isLastInStock = function(cars) {
  var last_car = R.last(cars);
  return R.prop('in_stock', last_car);
};*/

//使用curry函数
var isLastInStock = R.compose(R.prop('in_stock'), R.last);

// 练习 2:
// ============
// 使用 R.compose()、R.prop() 和 R.head() 获取第一个 car 的 name
//var nameOfFirstCar = undefined;
//重构
var nameOfFirstCar = R.compose(R.prop('name'),R.head);


// 练习 3:
// ============
// 使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合
var _average = function(xs) { return R.reduce(R.add, 0, xs) / xs.length; }; // <- 无须改动

/*var averageDollarValue = function(cars) {
  var dollar_values = R.map(function(c) { return c.dollar_value; }, cars);
  return _average(dollar_values);
};*/
//重构后
var averageDollarValue = R.compose(_average,R.map(R.prop('dollar_value')));


// 练习 4:
// ============
// 使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串：例如：sanitizeNames(["Hello World"]) //=> ["hello_world"]。

var _underscore = R.replace(/\W+/g, '_'); //<-- 无须改动，并在 sanitizeNames 中使用它

//var sanitizeNames = undefined;
//编写sanitizeNames()函数
var toLowerCase = function(x){ return x.toLowerCase();};
var sanitizeNames = R.map(R.compose(_underscore ,toLowerCase, R.prop('name')));


// 彩蛋 1:
// ============
// 使用 compose 重构 availablePrices

/*var availablePrices = function(cars) {
  var available_cars = R.filter(R.prop('in_stock'), cars);
  return available_cars.map(function(x){
    return accounting.formatMoney(x.dollar_value);
  }).join(', ');
};*/

//Git上答案
var formatPrice = R.compose(accounting.formatMoney(), R.prop("dollar_value"));
var availablePrices = R.compose( R.join(",") , R.map(formatPrice), R.filter( R.prop("in_stock") ) );


// 彩蛋 2:
// ============
// 重构使之成为 pointfree 函数。提示：可以使用 R.flip()

/*var fastestCar = function(cars) {
  var sorted = R.sortBy(function(car){ return car.horsepower }, cars);
  var fastest = R.last(sorted);
  return fastest.name + ' is the fastest';
};*/

//重构
var append = R.flip(R.concat);
var fastestCar = R.compose(append(' is the fastest'),R.prop('name'),R.last,R.sortBy(R.prop('horsepower')));

module.exports = { CARS: CARS,
                   isLastInStock: isLastInStock,
                   nameOfFirstCar: nameOfFirstCar,
                   fastestCar: fastestCar,
                   averageDollarValue: averageDollarValue,
                   availablePrices: availablePrices,
                   sanitizeNames: sanitizeNames
                 };