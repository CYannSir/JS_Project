function getcontent(content){
    var req = new XMLHttpRequest();
    req.open("GET" , "http://eloquentjavascript.net/author" , false);
    req.setRequestHeader("accept" , content);
    req.send(null);
    return req.responseText;
}

var contents = ["text/plain" , 
                            "text/html" , 
                            "application/json" , 
                            "application/rainbows+unicorns"];

contents.forEach(function(content){
    try {
        console.log( content + ":\n" + getcontent(content) , "\n");
    } catch (error) {
        console.log("Error:" + error);
    }

});