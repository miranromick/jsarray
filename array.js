// Arrays of Numbers
//
// Purpose:
// Create an array with five decimal numbers, and use it for the following:
// Signature:
// Create a function that finds the highest number.
//
// Examples:
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign it a reasonable start value; then use forEach: if an element is higher than max, change max.
// Create a function that finds the lowest number.
//
// lowestNumber([1,4,2]) should return 1
// lowestNumber([-1,-2,-4]) should return -4
//
//Create a function that finds the smallest number (the closest to zero).
//  smallestNumber([1,4,2]) should return 1
// smallestNumber([0.1,0.01,0.001]) should return 0.001
// smallestNumber([-1,-2,-4]) should return -1
// smallestNumber([0.1,-0.001]) should return -0.001
//
// Create a function that calculate the sum.
// sum([1,2,3]) should return 6
// sum([]) should return 0
//
// Create a function that calculate the mean value.
// mean([1,2,3]) should return 2
//
// Create a function that finds the index of the highest number.
// indexHighestNumber([1,4,2]) should return 1
// indexHighestNumber([-1,-2,-4]) should return 0




// biggest number
var a = [2.2,6.3,20.1]
var max = 30
a.forEach(function(element){
  //check if max is smaller than each element, if so, assign max as that value
  if(element>max){
    max=element
  }
})
console.log(max)




// a.sort(function(element1, element2){
//   return(element1 < element2) *1 + (element1 > element2) *-1
// })
// console.log(a[0])


// for (var i = 0; i < array.length; i++) {
// //   array[i]
// }

// lowest number
var a = [-4,1,7]
var min = [0]
a.forEach(function(element){
  if(element<min){
    min=element
  }
})
console.log(min)

// a.sort(function(element1, element2){
//   return(element1 > element2) *1 + (element1 < element2) *-1
// })
// console.log(a[0])
//
// // smallest number
// var a = [1,4,-2]
// var b = 0
// a.forEach(function(element){
//   // var a = [1,4,-2]
//   // var b =
//   b = b + element
// }
// })

// Calculate sum of the numbers in the array
var a = [1,2,3]
var b = 0
a.forEach(function(element){
  b = b + element
})
console.log(b)

//calculate the mean value
var a =[1,8,16]
var b =0
a.forEach(function(element){
  b = b + element
})
console.log(b/a.length)









// For to While
//
// Re-write the following as a while loop:
// for (var i=0; i<10; i++) { console.log(i); }
// What is the value of i after the loop? Is it the same in both cases?

var i = 0
while(i<10){
  console.log(i)
  i=i+1
}


// Re-write the following as a for loop:
// var a = 10;
// while (a > 0) {
//   console.log(a);
//   a = a - 1;
// }
// Is the value of a the same after the loop?


for (var a = 10; a>0; a--) {console.log(a); }


// Duplicate Array
// Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.
// mergeArray([1, 2, 3], [2, 30, 1]) should return [1, 2, 3, 30]
// Order does not matter.

//This is the first array
var a =[1,2,3]
//This is the second array
var b =[2,30,1]
//This is the two arrays, combined
// var c = a.concat(b)
//This is the array with no duplicates, currently empty
// var noDuplicate = []
//function to take each element in each array
function mergeArray(a, b){
  var c = a.concat(b)
  var noDuplicate = []
  c.forEach(function(el){
    //this sees if there are any duplicates
    if (noDuplicate.lastIndexOf(el) < 0) {
      //this pushes the element into noDuplicate
      noDuplicate.push(el)
    }
  })
  console.log(noDuplicate)
}


// Pre-fill
// Write a Javascript function called fillArray to create a specified number of elements with a pre-filled numeric values in an array.
// fillArray(6, 0) should return [0, 0, 0, 0, 0, 0]
// fillArray(4, 11) should return [11, 11, 11, 11]
//
// Clean Function
// Write a Javascript function to filter false, null, 0 and blank values from an array.
// filterArrayValues([58, '', 'abcd', true, null, false, 0]) should return [58, "abcd", true]
//
// Sum Target
// Write a Javascript function to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number.
//
// findPair(50, [10,20,10,40,50,60,70] should return [0, 3] or [2, 3] (one or the other or both)
// findPair(50, [25,25,10] should return [0, 1] or [1, 0] (but not both)
//
// Order does not matter.
