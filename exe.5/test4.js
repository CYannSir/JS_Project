var E = require('./test3');
console.log(E.words("Jingle bells Batman smells"));
console.log(E.sentences(["Jingle bells Batman smells", "Robin laid an egg"]));
console.log(E.filterQs(['quick', 'camels', 'quarry', 'over', 'quails']));
console.log(E.max([323,523,554,123,5234]));
console.log(E.slice(1)(3)(['a', 'b', 'c']));
console.log(E.take(2)(['a', 'b', 'c']));