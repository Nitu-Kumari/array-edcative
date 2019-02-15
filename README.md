#const Keyword
~~~
const is block-scoped. The variable declared with const cannot be redeclared or reassigned.

that means
function(){
    // block scoped
}

~~~
#var Keyword
~~~
Variables declared with var are function-scoped. If a variable is declared anywhere else besides a function using var, it will always exist in the global scope.

function foo(){
   var n=6;
   console.log(n);
}

var n=5;
console.log(n);
foo();
~~~

#Remove Even Integers from an Array
~~~

function removeEven(arr) {
    var odds = []
    for (let number of arr) {
        if (number % 2 != 0) // Check item list not even  
            odds.push(number) 
    }
  return odds // return  odd no
}
console.log(removeEven([3, 2, 41, 3, 34]))
~~~

#Find Minimum Value in Array
~~~
function findMinimum(arr){
  arr.sort(arr.sort(function(a,b){
      return a-b
  }))  
  return arr[0]
}
console.log(findMinimum([19,12,13,16,11]))
~~~



#First Non-Repeating Integer in an Array
~~~
var str="abcdca";
for (var i=0;i<str.length; i++){

    if (str.indexOf(str.charAt(i))==str.lastIndexOf(str.charAt(i))){

        console.log(str.charAt(i));
        break;
    }
}
~~~

# 6 Find Second Maximum Value in an Array?
~~~
that mean
1,2,5,6,8
2nd largest value
6

function findSecondMaximum(arr){
  arr.sort(function(a, b) {
        return a - b
    })
  if(arr.length >= 2)
    return arr[arr.length-2]
  else
    return null
}

console.log(findSecondMaximum([1,2,5,6,8]))
~~~












