// ([1, 2, 2, 3, 3, 3].uniq() => [1, 2, 3])

Array.prototype.uniq = function () {
  let array = [];
  let i = 0;
  while (i < this.length) {
    if (!array.includes(this[i])) {
      array.push(this[i]);

    }
    i += 1;
  }

  return array;
};

// console.log([1, 2, 2, 3, 3, 5].uniq());

Array.prototype.twoSum = function(){
  // nested while loop to find all combination
  // use an if statement to check if sum equal 0
  // if so, add position pairs to array 

  let array =[];
  let i = 0; 
  while (i < this.length-1){
    let j = i + 1;
    while (j < this.length){
      if (this[i] + this[j] === 0) {
        array.push([i, j]);
      }
      j = j+1;
    }   
    i = i+1;
  }
  return array;
}

// console.log([1, 2, -2, 3, -3, 5].twoSum());


Array.prototype.transpose = function(){
  // 

  let m= this[0].length;
  let n= this.length;

  let arr = Array.from(Array(m), () => new Array(n));


  for(let i =0; i < this.length; i++){
    for (let j = 0; j < this[0].length; j++){
      arr[j][i] = this[i][j];
    }
  }

  return arr;
}

console.log([[0, 1, 2],[3, 4, 5]].transpose());