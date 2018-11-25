function reverse(arrayOfChars) {

    // Reverse the input array of characters in place
    var leftIndex = 0;
    var rightIndex = arrayOfChars.length -1;
    
    while (leftIndex < rightIndex)
    {
      var temp = arrayOfChars[leftIndex];
      arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
      arrayOfChars[rightIndex] = temp
      
      leftIndex += 1;
      rightIndex -= 1;
      
    }
    
    return;
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'empty string';
  let input = ''.split('');
  reverse(input);
  let actual = input.join('');
  let expected = '';
  assertEqual(actual, expected, desc);
  
  desc = 'single character string';
  input = 'A'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'A';
  assertEqual(actual, expected, desc);
  
  desc = 'longer string';
  input = 'ABCDE'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'EDCBA';
  assertEqual(actual, expected, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }