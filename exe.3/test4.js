function deepEqual(a,b){
    if(a === b){
        return true;
    }
    if(a == null || b == null || typeof a != "object" || typeof b !="object"){
        return false;
    }

    var A = 0 , B = 0;
    for( var i in a){
        A += 1 ;
    }

    for(var i in b){
        B += 1;
        if(!(i in a) || !deepEqual(a[i],b[i])){
            return  false;
        }

    }
    return A==B;

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true