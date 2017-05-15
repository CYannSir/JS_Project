var journal = [];

function gatherCorrelations(journal){
    var a ={};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!(event in a))
                a[event] = count(event, journal);
        }

    }
  return a;
}

function count(event, journal) {
  var index = 0;
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i];
    if (hasEvent(event, entry)) 
    index += 1;
  }
  return index;
}


function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
  /*The array.indexOf() method returns the first index at which a given element 
  can be found in the array, or -1 if it is not present.*/
}

function sortObj(obj) {
    var arr = [];
    for (var i in obj) {
        arr.push([obj[i],i]);
    };
    arr.sort(function (a,b) {
        return b[0] - a[0];
    });
    var len = arr.length,
        obj = {};
    for (var i = 0; i < len; i++) {
        obj[arr[i][1]] = arr[i][0];
    }
    return obj;
}

var JOURNAL=require("./jacques_journal");//获取另一个模块中的journal数组
var correlations = gatherCorrelations(JOURNAL);
//console.log(correlations);
var print = sortObj(correlations);
for(var event in print)
    console.log("events"+ ":" + event +" ; count:"+ print[event]);
    //console.log("events"+ ":" + event +" ; count:"+ correlations[event]);

    
    

