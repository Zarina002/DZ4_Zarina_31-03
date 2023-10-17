const array = ["name", "John", "lastname", "Black", "age", "23"]
const resultObject = {}

for (let i = 0; i < array.length; i += 2) {
  const key = array[i]
  const value = array[i + 1]
  resultObject[key] = value
}

console.log(resultObject)







function calculateAverage() {
  if (arguments.length === 0) {
    console.log("Нет чисел для вычисления среднего арифметического числа")
    return
  }

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  const average = sum / arguments.length
  console.log("Среднее арифметическое число:", average)
}

calculateAverage(2, 4, 6, 8)







function getDataType(value) {
  const Datatype = typeof value
  console.log(Datatype)
}

getDataType(false)
getDataType('hello world!')
getDataType(42)


