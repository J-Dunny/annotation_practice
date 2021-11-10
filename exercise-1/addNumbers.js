// declare funcition called addNumbers
function addNumbers() {
  //declare var firstNum and secondNum to 9 and 14
  var firstNum = 9
  var secondNum = 14

// re-asigning value of the variables to 3 and 4
  firstNum = 3
  secondNum = 4
// create var nums and assign to array with firstNum and secondNum
  var nums = [firstNum, secondNum]
// create new var product and assign to firstNum multiplied by secondNum
  var product = firstNum * secondNum
  // create var sum and assign to firstNum + secondNum
  var sum = firstNum + secondNum
  //create var average and assign to sum divided by nums.length
  var average = sum / nums.length

  // console log nums at index 0 and 1
  console.log(nums[0])
  console.log(nums[1])
// console log an interpolation of num1 and num2 in a string
  console.log(`The first number is ${num1} and the second number is ${num2}!`)
// return value of sum
  return sum
}
