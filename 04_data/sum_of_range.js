/*Write a range function that takes two arguments, start and end,
 and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
 Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument 
that indicates the “step” value used when building the array. If no step is given,
 the elements go up by increments of one, corresponding to the old behavior. 
 The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
 Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].*/

function range(a, b) {
    let rangeArray = [];
    for (let i = a; i <= b; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}
range(1,10);
range(5,10);

function sum(array) {
    let sumCounter = 0
    for (let element of array) {
        sumCounter += element;
    }
    return console.log(sumCounter);
}

sum(range(1,10));

function rangeWithGap(a, b, c) {
    let rangeArray = [];
    for (let i = a; i <= b; i += c) {
        rangeArray.push(i);
    }
    return console.log(rangeArray);
}

rangeWithGap(1, 10, 2);