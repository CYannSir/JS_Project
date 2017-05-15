var journal = [];

function countfalse(event, journal) {
  var index = 0;
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i];
    if (hasEvent(event, entry) && entry.squirrel == false) 
    index += 1;
  }
  return index;
}

function counttrue(event, journal) {
  var index = 0;
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i];
    if (hasEvent(event, entry) && entry.squirrel == true) 
    index += 1;
  }
  return index;
}


function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
  /*The array.indexOf() method returns the first index at which a given element 
  can be found in the array, or -1 if it is not present.*/
}

function gatherCorrelations(journal){
    var a ={};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!(event in a))
                a[event] = counttrue(event, journal);
        }

    }
  return a;
}

function gatherCorrelationsfalse(journal){
    var a ={};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!(event in a))
                a[event] = countfalse(event, journal);
        }

    }
  return a;
}

var JOURNAL=require("./jacques_journal");//获取另一个模块中的journal数组
var correlations = gatherCorrelations(JOURNAL);
var correlationfalse = gatherCorrelationsfalse(JOURNAL)


for(var event in correlations){
    console.log("squirrelTrue"+ " :  " + event +" : "+  correlations[event] );
}
for(var event in correlationfalse){
    console.log("squirrelFalse"+ " :  " + event +" : "+  correlationfalse[event] );
}
    
    

