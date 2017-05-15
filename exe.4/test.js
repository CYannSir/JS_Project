var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
var sum = arrays.reduce(function(acc,val){
    return acc.concat(val);
},[]);

console.log(sum);

// → [1, 2, 3, 4, 5, 6]

