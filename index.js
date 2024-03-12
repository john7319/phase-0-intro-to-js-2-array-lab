// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
// adds an element to the end of the array
function destructivelyAppendCat(name){
    cats.push(name);
}
// adds an element at the beginning of an array
function destructivelyPrependCat(name){
    cats.unshift(name);
}
//removes an element at the end of the array
function destructivelyRemoveLastCat(){
    cats.pop();
}
//removes the first element
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
   return [...cats, name ]
}


function prependCat(name){
    return [name ,...cats ]
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
    return cats.slice(1);
}