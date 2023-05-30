//Maps and Sets Exercise

//  **Quick Question #1**

// What does the following code return?

new Set([1,1,2,2,3,4]) // {1,2,3,4} // a set will remove dupilcates 

// **Quick Question #2**

// What does the following code return?

// [...new Set(`referee`)].join(``) // ??


//  **Quick Questions #3**

// What does the Map ***m*** look like after running the following code?

let m = newMap();
m.set([1,2,3],true);
m.set([1,2,3],false);

// 0: {Array(3) => true}
// 1: {Array(3) = > false}


//  **hasDuplicate**

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1])
hasDuplicate([1,5,-1,4])

const hasDuplicate = arr => new Set(arr).size !== arr.length

//  **vowelCount**

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') 
vowelCount('Colt') 

function isV(char){
    return `aeiou`.includes(char);

}
function vowelC(str){
    const vowelMap = new Map();
    for (let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isV(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap
}
