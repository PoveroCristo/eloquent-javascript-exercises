/*Arrays have a reverse method that changes the array by inverting the order
 in which its elements appear. For this exercise, write two functions, 
 reverseArray and reverseArrayInPlace. 
 The first, reverseArray, takes an array as argument and produces a new array that has the same
  elements in the inverse order. The second, reverseArrayInPlace, 
  does what the reverse method does: it modifies the array given as argument by reversing 
  its elements. Neither may use the standard reverse method.*/

  function reverseArray(array) {
      let reversedArray = [];
      for (i = array.length - 1; i >= 0; i--) {
          reversedArray.push(array[i]);
      }
      return console.log(reversedArray);
  }
  
  reverseArray(["A", "B", "C"])

  function reverseArrayInPlace(array) {
      
  }