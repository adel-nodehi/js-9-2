"use strict";

// data structure: Array, Object, Set, Map

const array = [1, 2, 3, 3, 2, 4, 4, 5];

// const uniq = new Set(array);
const uniq = [...new Set(array)];

console.log(uniq);

/*
// Set methods
uniq.add(25);

console.log(uniq.size);
console.log(uniq.has(6));

// uniq.clear();
uniq.delete(3);

console.log(uniq);
*/
