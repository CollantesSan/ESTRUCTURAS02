// Unshift and Push function
let papu = [1,2,3,4,5]
console.log(papu.push(6))

let papu2 = [1,2,3,4,5]
console.log(papu2.unshift(0))

//toString
console.log(papu.toString())

//Splice: Used to remove an element from any specified index
console.log(papu.splice(3,2)) // This will remove the elements in the position 3 and 4

//Concat: Joins two arrays
console.log(papu.concat(papu2)) //This will join the two arrays

//indexOF: Searches an element of an array and returns its position 
console.log(papu.indexOf(6)) // This will return 3, after use the function splice() 

//find: Returns the first value of the array element that passes a given test.
console.log(papu2.find(x => x<1))

//findIndex: Returns the first index of the array element that passes a given test.
function isPair(x) {
    return x % 2 == 0
}
let papuNumeros = [1,3,13,23,24,30,45]
let par = papuNumeros.findIndex(isPair)
console.log(par)

//forEach: Calls a function for each element.
function div2(x){
    console.log(x/2)
}
papuNumeros.forEach(div2)

//includes: Checks if an array contains a specified element.
console.log(papuNumeros.includes(2))
console.log(papuNumeros.includes(23))

//sort: Sorts the elements alphabetically in strings and ascending order in numbers.
let papuNumeros2 = [43,223,1,543,4392,34,254,590,-1,-456]
console.log(papuNumeros2.sort()) //As the sort function turn the array into a string, 223 and 254 are greater than 34 and 43 numerically, but it comes first than them. It is because "2"<"3"

//slice: Selects part of an array and returns it as a new array.
let papuNumeros21 = papuNumeros2.slice(2,7)
console.log(papuNumeros21) //It shows the array sorted

//constructor: The constructor property returns the function that created the Array prototype.
let constructor = papuNumeros.constructor
console.log(constructor)

//copyWithin: The copyWithin() method copies array elements from one position to another in the given array.
let cosa = ["Vatista", "Heathcliff", "DULLAHAN", "▄ ▄ ▄ ▄ ▄", "Sancho", "Philip"]
cosa.copyWithin(5,3)
console.log(cosa)

//entries: The entries() method returns a new Array Iterator object containing key/value pairs for each array index.
iterator = cosa.entries()
for (let entry of iterator){
    console.log(entry)
}

//every: The every() method checks if all the array elements pass the given test function.
let check = papuNumeros2.every(isPair)
console.log(check)

//fill: The fill() method returns an array by filling all elements with a specified value.
let numeritos = [1,2,3,4,5,6,7,8,9,10]
numeritos.fill("RAPID GASHES")
console.log(numeritos)

//filter: The filter() method returns a new array with all elements that pass the test defined by the given function.
let filtro = papuNumeros2.filter(isPair)
console.log(filtro)

//flat: The flat() method creates a new array by flattening a nested array up to the specified depth.
let nestedArray = [1,2,3,[4,5,6,[7,8,[9]]]]
let flat = nestedArray.flat(3)
console.log(flat)

//flatMap: The flatMap() method first maps each element of an array using a mapping function, then flattens it into a new array.
let papuNumerosPot = [...papuNumeros2].flatMap((x) => [x**2])
console.log(papuNumeros2)
console.log(papuNumerosPot)

//from: The from() method creates a new array from any array-like or iterable object.
let wildHunt = Array.from("LamentMournDespair")
console.log(wildHunt)

//isArray: The isArray() method checks whether the passed argument is an array or not.
let hola = "LA SANGRE"
console.log(Array.isArray(hola))

//join: The join() method returns a new string by concatenating all of the elements in an array, separated by a specified separator.
let cathy = ["Through","Patches","of","Violet"]
let whereAreYou = cathy.join(" ")
console.log(whereAreYou)

//keys: The keys() method returns a new Array Iterator object that contains the keys for each element in the array.
let iterator2 = cathy.keys();

// looping through the Iterator object
for (let key of iterator2) {
  console.log(key);
}

//lastIndexOf: The lastIndexOf() method returns the index of the last occurrence of a specified element in the array.
let lastIndex = papuNumeros2.lastIndexOf(223)
console.log(lastIndex)

//length: The length property returns or sets the number of elements in an array.
let len = nestedArray.length
console.log(len)

//map: The map() method creates a new array with the results of calling a function for every array element.
let papuNumerosPot2 = [...papuNumeros2].map((x) => [x**2])
console.log(papuNumerosPot2)

//of: The of() method creates a new array instance from the given arguments.
let hero = Array.of("HERO", "ON", "A", "PLASTIC", "HORSE")
console.log(hero)

//pop: The pop() method removes the last element from an array and returns that element.
let hero2 = [...hero]
let horserip = hero2.pop()
console.log(hero2)
console.log(horserip)

//reduce: The reduce() method executes a reducer function on each element of the array and returns a single output value.
let sorrow = ["I ", "have ", "nothing ", "but ", "my ", "sorrow "]
function joinStrings(accumulator, currentValue) {
    return accumulator + currentValue;
}
let joinedString = sorrow.reduce(joinStrings);
console.log(joinedString);

//reduceRight: The reduceRight() method reduces the array to a single value by executing a callback function on two values of the array (from right to left).
function sum_reducer(accumulator, currentValue) {
    return accumulator + currentValue; 
}
let sum = papu2.reduceRight(sum_reducer); 
console.log(sum);

//reverse: The reverse() method returns the array in reverse order.
let reversa = [...papu2]
reversa.reverse()
console.log(reversa)

//shift: The shift() method removes the first element from an array and returns that element.
let shift = [...reversa]
let num = shift.shift()
console.log(shift)
console.log(num)

//some: The some() method tests whether any of the array elements pass the given test function.
console.log(papuNumeros2.some(isPair))

//toLocateString: The Array.toLocaleString() method returns a string representing the elements of the array in a particular locale.
let stringlocale = sorrow.toLocaleString()
console.log(stringlocale)

//values: The values() method returns a new Array Iterator object that contains the values for each index in the array.
let iteratorObject = sorrow.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}