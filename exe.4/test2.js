
var ANCESTRY_FILE=require("./ancestry");//获取另一个模块中的ANCESTRY_FILE数组
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


var mother_son_averageage = ancestry.filter(function (person){
  return byName[person.mother] != null;
}).map(function (person) 
  {
    return person.born - byName[person.mother].born ;
  });


console.log(average(mother_son_averageage));
