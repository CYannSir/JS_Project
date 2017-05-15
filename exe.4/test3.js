
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

//groupBy函数，接受两个参数，一个数组array和一个处理数组中每个元素的函数dealElement
function groupBy(array , dealElement)
{
    var objectGroup = {};
    array.forEach(function(person){
        var name = dealElement(person);
        if(name in objectGroup){
            objectGroup[name].push(person);
        } 
        else{
             objectGroup[name] = [person];
        }
    });
    return objectGroup;
}

var centuryAverageAge = groupBy(ancestry , function(person){
    return Math.ceil(person.died/100);
});

for(var century in centuryAverageAge){
    var age = centuryAverageAge[century].map(function(person){
        return person.died - person.born;
    });
    console.log(century +"世纪"+ ":"+average(age));
}

