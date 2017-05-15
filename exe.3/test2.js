function reverseArray(a){
    var n = [];
    for(var i = a.length -1 ; i >=0  ; i-- ){
        n.push(a[i]);
    }
    return n;
}

function reverseArrayInPlace(a){
    for(var i = 0 ; i < Math.floor(a.length/2); i++) //借鉴答案中的Math.floor函数
    {
        var empty = a[i];
        a[i] = a[a.length-1-i];
        a[a.length-1-i] = empty;
     }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

