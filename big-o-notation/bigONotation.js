
function log(array) {
    console.log(array[0]);
    console.log(array[1]);
}

//O(1) Constant Time: no matter how big the input is,
// it will always take the same amount of time to run the function
log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // O(1) Constant Time

//============================================================

function logAll(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//O(n) Linear Time: the time it takes to run the function
// is directly proportional to the size of the input
logAll([1, 2, 3, 4]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // O(n) Linear Time

//============================================================

function addAndLog(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; i++) {
            console.log(array[i] + array[j]);
        }
    }
}

//O(n^2) Exponential Time: the time it takes to run the function
// is proportional to the square of the input size
addAndLog(['A', 'B', 'C']); // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']); // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']); // 25 pairs logged out

//============================================================

function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

//O(log n) Logarithmic Time: the time it takes to run the function
// is proportional to the logarithm of the input size
binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
