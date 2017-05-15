var journal = [];

function tableFor(journal) {
    var b = {};
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i];

        if (hasEvent("pizza",entry )&& entry.squirrel == false) 
                b[i] = entry.events;
  }
  return b;
}

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
  /*The array.indexOf() method returns the first index at which a given element 
  can be found in the array, or -1 if it is not present.*/
}

var JOURNAL=require("./jacques_journal");//获取另一个模块中的journal数组
var correlations = tableFor(JOURNAL);

//console.log(correlations);
for(var event in correlations)
    console.log("events"+ ":" + correlations[event]);
