


function range(start , end , step)
{
    if(step == null ) {
        step = 1;
    }
    var n = [];

    if(step > 0){
        for(var i = start; i <= end; i += step )
            {
                n.push(i);
            }
    }else{
        step = -step;
        for(var i = start; i >= end; i -= step ){
                n.push(i);
            }
    }
    return n;
}

function sum(n)
{
    var total = 0 ;
    for( var i = 0 ; i < n.length ; i++)
        total += n[i];
    return total;
}

console.log(range(1 , 10 , 2));
console.log(range(5 , 2 , -1));
console.log(sum(range(1, 10)));