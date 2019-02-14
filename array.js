function removeEven(arr) {
    var odds = []
    for (let number of arr) {
        if (number % 2 != 0) // Check item list not even  
            odds.push(number) 
    }
  return odds // return  odd no
}
console.log(removeEven([3, 2, 41, 3, 34]))