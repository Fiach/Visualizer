import {swap} from "./swap.js";
import {printArray} from "./printArray.js";

// An optimized version of Bubble Sort
function bubbleSort( arr, n)
{
    var i, j;
    for (i = 0; i < n-1; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
                swap(arr,j,j+1);

            }
        }

    }
}

// Driver program to test above functions
const arr = [5, 1, 4, 2, 8];
const n = 5;
console.log("UnSorted array:");
printArray(arr, n);

bubbleSort(arr, n);
console.log("Sorted array: \n");
printArray(arr, n);