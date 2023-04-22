let count = 1
let mCount = 0

let array = [555,901,482,1771]


for (let i = 0; i < array.length; i++) {
    findDigits(array[i])
    if(count%2 == 0) {
        mCount++
    }
    count = 1
}

function findDigits(num) {
    if (num>=10) {
        count++
        num = num/10
        findDigits(num)
    }
}

console.log(mCount);