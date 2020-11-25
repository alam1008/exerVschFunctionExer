// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2){
    return num1 + num2
}
var result = sum(2, 5)
console.log(result)

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function max(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
var result2 = max(3, 5, 2)
console.log(result2)

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd").
function evenOdd(num1){
    if(num1 % 2 == 0){
        console.log("even")
    } else {
        console.log("odd")
}}
var result3 = evenOdd(3)

// Optional Challenges

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string. You will need to use a string method or two:
// -slice()
// -concat() (optional)
var x = ""
function string(x){
    if (x.length <= 20){
        console.log(x + x)
    } else if (x.length > 20){
        console.log(x.slice(0, x.length / 2))
    }
}
var result4 = string("heythereeveryonemynameisangela") 