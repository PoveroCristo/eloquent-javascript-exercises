/*We’ve seen that % (the remainder operator) can be used to test whether a number is 
even or odd by using % 2 to see whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.*/

function isEven(a) {
    if (a % 2 == 0) {
        return console.log(a + " is an even number");
    } else {
        return console.log(a + " is an odd number");
    }
}

isEven(0);
isEven(1);
isEven(50);
isEven(75);