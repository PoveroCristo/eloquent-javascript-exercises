function loop(initialValue, testFunction, updateFunction, bodyFunction) {
   for (let value = initialValue; testFunction(value); value = updateFunction(value)) {
       bodyFunction(value);
   }
}

loop(10, n => n > 0, n => n - 1, console.log);
loop(0, n => n <= 10, n => n + 1, console.log);