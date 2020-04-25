/*Write a function deepEqual that takes two values and returns true only if they are the same value
 or are objects with the same properties, where the values of the properties are equal when compared
  with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their 
properties compared, you can use the typeof operator. If it produces "object" for both values, 
you should do a deep comparison. But you have to take one silly exception into account: 
because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.*/

let obj = {here: {is: "an"}, object: 2};
let obj2 = {here: 1, object: 2};
let obj3 = {here: {is: "an"}, object: 2};

function deepEqual(objA, objB) {
    if ((typeof objA == "object" && objA != null) && (typeof objB == "object" && objB != null)) {
        if (Object.keys(objA).length == Object.keys(objB).length) {
            if (JSON.stringify(objA) != JSON.stringify(objB)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    } else {
        return objA === objB
    }
}



console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, obj2));
console.log(deepEqual(obj, obj3));
