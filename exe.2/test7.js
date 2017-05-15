/*Cread by CYann 2017.3.13 */
//6.1 习题
/*function makeAccount( n ){  
    var y = n ;
    return function( x ){
        if(x > 0 || x < 0 && x != NaN)
            return  y = x + y;
        else{
            return y;
        }
    };
}
var account = makeAccount(100);
console.log(account(10));
console.log(account(-20));
console.log(account());*/

function makeAccount( n ){  
    
    var string = n ;
    return function rmbAccount(s){
        
        var y = s ;
        return function (x){
            if(x > 0 || x < 0 && x != NaN){
                return  y = x + y;
            }
            else{
                return y + string ;
            }
        };
        
        return  y;
    };
        
}
var rmbAccount = makeAccount('RMB'); 
var account = rmbAccount(10);

console.log(account());




