function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Target not found
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end);
    } else {
        return binarySearch(arr, target, start, mid - 1);
    }
}

// Test cases
const arr1 = [2, 4, 6, 8, 10];
const arr2 = [1, 3, 5, 7, 9];

console.log(binarySearch(arr1, 6)); // Output: 2
console.log(binarySearch(arr2, 4)); // Output: -1 (not found)
console.log(binarySearch(arr1, 10)); // Output: 4

// ===========================Working of binarySearch([1,2,3,4,5,6,7,8,9,10], 3, 0, 10)===========================
// Initial array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Target: 3

// Initial call:
// start = 0, end = 10
// mid = Math.floor((0 + 10) / 2) = 5
// arr[5] = 6
// Since 6 > 3, search left half: binarySearch(arr, 3, 0, 4)

// Second call:
// start = 0, end = 4
// mid = Math.floor((0 + 4) / 2) = 2
// arr[2] = 3
// Since arr[2] = 3, return 2



// Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.


function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0
    }
    if (arr[0] === target) {
        return 1 + countOccurrences(arr.slice(1), target)
    }
    return countOccurrences(arr.slice(1), target)
}

console.log("Task 8: Count occurrences of a target element in an array")
console.log(countOccurrences([1, 2, 5, 4, 5, 6, 7, 8, 9, 10], 5)) // 2
console.log(countOccurrences([1, 7, 3, 4, 7, 6, 7, 8, 7, 10], 7)) // 4
console.log(countOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)) // 1



// ============================Working of countOccurrences([1, 2, 5, 4, 5, 6, 7, 8, 9, 10], 5)=========================
// Initial Call: countOccurrences([1, 2, 5, 4, 5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [1, 2, 5, 4, 5, 6, 7, 8, 9, 10] (1 != 5)
//   |
//   v
// countOccurrences([2, 5, 4, 5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [2, 5, 4, 5, 6, 7, 8, 9, 10] (2 != 5)
//   |
//   v
// countOccurrences([5, 4, 5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [5, 4, 5, 6, 7, 8, 9, 10] (5 == 5)
//   |
//   v
// 1 + countOccurrences([4, 5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [4, 5, 6, 7, 8, 9, 10] (4 != 5)
//   |
//   v
// countOccurrences([5, 6, 7, 8, 9, 10], 5)
//   |
//   v
// [5, 6, 7, 8, 9, 10] (5 == 5)
//   |
//   v
// 1 + countOccurrences([6, 7, 8, 9, 10], 5)
//   |
//   v
// ...