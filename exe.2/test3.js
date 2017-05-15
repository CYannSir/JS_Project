function  countBs( x ) {
    var num = 0;
    var b = "B";
    for(var i = 0 ; i < x.length ; i++){
        if(x.charAt(i) === b){
            num++;
        }
    }
    return num;
}
function countChar( x , y ) {
    var number = 0;
    for(var i = 0 ; i < x.length ; i++){
        if(x.charAt(i) == y){
            number++;
        }
    }
    return number;
}

console.log(countBs("countBs"));
console.log(countChar("countChar","C"));