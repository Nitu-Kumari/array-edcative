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
