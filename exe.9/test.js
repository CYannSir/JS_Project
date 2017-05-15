var month = function(){
    var names = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12"];
    return {
        name:function(number){return names[number];} ,
        number:function(name){return names.indexOf(name);}
    };
}( );



console.log(month.name(2));
// → March
console.log(month.number("11"));
// → 10