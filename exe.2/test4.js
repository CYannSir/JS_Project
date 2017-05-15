/*Cread by CYann 2017.3.6*/
var called = 0; 
var a = "wechat";
function chicken(a,b,c,d,e,f,g,h,i,j,k,l,m,n){
    called = called + 1 ; 
    console.log(called);
    return egg(a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}

function egg(a,b,c,d,e,f,g,h,i,j,k,l,m,n) 
{
    return chicken(a,b,c,d,e,f,g,h,i,j,k,l,m,n ); 
}

console.log(chicken(0.1,1,2,3,4,5,6,7,8,9,10,11,12,13)+"came first.");


