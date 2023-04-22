// return an array of odd numbers from a given array of numbers


//helper method recursion uses a helper function to break down the recurisve function
function isOdd(arr){
    let newArr = []

    function helper(arr){
        if (arr.length == 0) {
            return null
        }

        if (arr[0] % 2 !== 0) {
            newArr.push(arr[0])
        }

        return helper(arr.slice(1))
    }
    helper(arr)

    return newArr
}


console.log(isOdd([1,2,3,4,5]))