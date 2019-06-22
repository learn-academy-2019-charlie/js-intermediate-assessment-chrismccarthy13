// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

reverse = (i) => {
  var newArr = i.reverse()
  return(newArr)
}

console.log(reverse(originalArray))

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

letterCounter = (str, letter) => {
	let count = 0
	let newStr = str.toLowerCase().split('')
	newStr.filter(value => {
		if (value === letter) {
			count++
		}
	})
	return count
}

console.log(letterCounter(ourString, 'l'))

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

getFib = (num) => {
	var newFib = [0, 1]
	for (let i = 2; i < 11; i++) {
			newFib[i] = newFib[i - 2] + newFib[i - 1]
		}
	return newFib
}

console.log(getFib());

//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

oddChecker = (arr1) => {
  let newArr =[]

  for (let i = 0; i < arr1.length; i++) {
    newArr[i] = arr1[i] %2 === 1
  }
  return newArr.push(i)
}

console.log(oddChecker(fullArr))
