// return an array of odd numbers from a given array of numbers

//pure recursion function
function isOdd(arr) {
    let newArr = []

    if (arr.length === 0) {
        return []
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    newArr = newArr.concat(isOdd(arr.slice(1)))
    
    return newArr
}


console.log(isOdd([1,2,3,4,5]))