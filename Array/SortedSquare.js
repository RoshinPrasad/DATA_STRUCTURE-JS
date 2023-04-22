let nums = [-4,-1,0,3,10]

function sortArrays(nums) {
    nums = nums.map(num => num*num)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
            } 
        }
    }
    return nums;
}

console.log(sortArrays(nums));