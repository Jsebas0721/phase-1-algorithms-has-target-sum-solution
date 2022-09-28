function hasTargetSum(array, target) {
  // Write your algorithm here
  
  // iterate through each number in the array
  for(let i = 0; i< array.length; i++){
  //  find the a complement number that adds to the target
      const complement = target - array[i];
  //iterate through the rest of the numbers in the array
    for(let j = i + 1; j < array.length; j++){
  //   check if any number is the complement number that adds to the target
      if(array[j] === complement){
        //if there is a number, return true
        return true;
      }
  
    }
 
  }
   // otherwise, return false
   return false;
}

/* 
  Write the Big O time complexity of your function here

  O(n^2)
*/

/* 
  Add your pseudocode here

  iterate through each number in the array
    find the a complement number that adds to the target
      iterate through the rest of the numbers in the array
        check if any number is the compliment number that adds to the target
        if there is a number, return true
  
  otherwise, return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([13], 4));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 2], 4));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([11, 12, 5], 23));
}

module.exports = hasTargetSum;
