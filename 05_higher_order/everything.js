function every(array, test) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (!(test(value))) {
            return false;
        }
    }
    return true;
}

console.log(every([1, 2, 3], n => n < 10));

function everyWithSome(array, test) {
    return !array.some(element => !test(element));
}

console.log(everyWithSome([1, 2, 3], n => n < 10));