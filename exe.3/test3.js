function arrayToList(a){
    var list = null;
    for(var i = a.length-1 ; i >= 0 ; i--){
        list = {
            value:a[i],
            rest:list
        }
    }
    return list;
}

function listToArray(list){
    var n = [];
    for(var y = list ; y ;y = y.rest){
        n.push(y.value)
    }
    return n;
}

function prepend(value , list){
    return  {
        value:value,
        rest:list
    }

} 

function nth(list,number){
    if(!list)
        return undefined; 
    //普通版本
    for(var x = list ; x ; x = x.rest)
    {
        
        if(number==0)
        {
            return x.value
        }
        else{
            number--;
          
        }
        
    }    
   
   /*递归版本部分 */
    /*else if( number == 0)
        return list.value;
    else
        return nth(list.rest , number-1);*/
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(arrayToList([10, 20,30]));