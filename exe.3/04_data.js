var journal = [];

//调用数组的push方法向数组添加元素
//数组的元素是对象，对象包含两个属性：events和squirrel
function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}


//相关系数计算
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

//判断雅克的日常事件是否有事件events
function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
  /*The array.indexOf() method returns the first index at which a given element 
  can be found in the array, or -1 if it is not present.*/
}

//四种情况统计
function tableFor(event, journal) {
  var table = [0, 0, 0, 0];//对应书上表格的四种情况
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

//
function gatherCorrelations(journal) {
  var phis = {};//相关性系数存储在phis对象中
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))//in运算符
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}




var JOURNAL=require("./jacques_journal");//获取另一个模块中的journal数组
var correlations = gatherCorrelations(JOURNAL);
console.log(correlations);
/*
for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) &&
     !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");//在journal里面添加了新的事件：吃花生不刷牙
}
console.log(phi(tableFor("peanut teeth",JOURNAL)));//计算吃花生不刷牙的相关系数

*/