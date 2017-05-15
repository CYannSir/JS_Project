/*Cread by CYann 2017.3.13 copy from stack*/

// f: function that takes a number and returns a number
// deltaX: small positive number
// returns a function that is an approximate derivative of f
function makeDerivative( f, deltaX )
{
    var deriv = function(x) 
    /*将函数赋值给一个变量*/
    { 
       return ( f(x + deltaX) - f(x) )/ deltaX;
       /*作为参数传递给其他函数 */
    }
    return deriv;
    /*作为函数返回值 */
}
var cos = makeDerivative( Math.sin, 0.000001);
/*将函数作为参数和返回值*/
console.log(cos(0) ) ;   
//console.log(cos(pi/2) ) ;