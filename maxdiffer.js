function maxDiffer(arr) {
    let maxDif = -1;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > min && maxDif < arr[i] - min) {
        maxDif = arr[i] - min;
      }
  
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return maxDiff;
  }
  
  console.log(maxDiffer([7,8,4,9,9,15,3,1,10])); 

  
  