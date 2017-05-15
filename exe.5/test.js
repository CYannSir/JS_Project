var memoize = function(f) {
    var cache = {};
    return function() {
        //JSON是JS提供的一个工具对象 (Utility)
        var arg_str = JSON.stringify(arguments);
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
        return cache[arg_str];
};
};
//上述memoize函数可以直接用ramda的库函数R.memoize
function fibo(n){
// your code
    if(n==1 || n==2)
        return 1;
    else
        return (fibo(n-2) + fibo(n-1));
}
function testfibo(n,times){
    //your code
    if (n != 0)
        fibo(n);
    return (Date.now() - times)/1000;
}

//调用memoize函数进行优化
var fibo_memoize = memoize(n =>{
// your code
    return fibo(n);
});

function testfibo_memoize(n,times){
    //your code
    if (n != 0)
        fibo_memoize(n);
    return (Date.now() - times)/1000;
}

var times = Date.now();

console.log("Fibonacci:" +fibo(30)+ "   " +"runtime："+ testfibo(30,times) +"s");

var timess = Date.now();
console.log("Fibonacci:" +fibo_memoize(30)+ "   " +"runtime："+ testfibo_memoize(30,timess) +"s");

//Date.now()   可以返回当前毫秒数 
