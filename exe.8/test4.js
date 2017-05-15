var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|\w)'|'(\w|$)/i, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
