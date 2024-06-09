function hasContiguousSubarrayWithSum(arr, target) {
  let start = 0;         
  let currentSum = 0;    
  
  // Iterate through the array with the end pointer
  for (let end = 0; end < arr.length; end++) {
      currentSum += arr[end];  // Add the current element to the current sum
      
      // While currentSum is greater than the target, move the start pointer to the right
      while (currentSum > target && start <= end) {
          currentSum -= arr[start];  
          start++;  
      }
      
      // Check if the currentSum equals the target
      if (currentSum === target) {
          return true; 
      }
  }
  
  return false;  // Return false if no subarray with the target sum is found
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarrayWithSum(arr, target));  // Output: true
