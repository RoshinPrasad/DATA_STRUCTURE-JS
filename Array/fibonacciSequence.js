
let fib = [0, 1]

// fibonacci sequence the next element in this sequence is
// the sum of the previous two elements

// fibonacci(3) == [0,1,1]
// fibonacci(7) == [0,1,1,2,3,5,8]
// fibonacci(9) == [0,1,1,2,3,5,8,13,21]

function fibonacci(nums) {
    for (let i = 2; i < nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacci(5))