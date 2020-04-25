/*Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
 Also write a listToArray function that produces an array from a list. 
 Then add a helper function prepend, which takes an element and a list and creates a new list that adds 
 the element to the front of the input list, and nth, which takes a list and a number and returns the element 
 at the given position in the list (with zero referring to the first element) or undefined when there is no such element.*/

 function arrayToList(array) {
     let list = {}
     for (i = array.length - 1; i >= 0; i--) {
         list = {value: array[i], rest: list}
     }
     return list
 }

console.log(arrayToList([10, 20, 30]));

 function listToArray(list) {
     let array = []
    for (let node = list; node; node = node.rest) {
        if(node.value != undefined)
        array.push(node.value);
    }
    return array
 }

 console.log(listToArray(arrayToList([10,20,30])));