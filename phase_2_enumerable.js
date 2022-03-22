function callbackFunction(ele){
  // console.log(`callbackFunction ${ele}`);
  return ele * ele ;
}

Array.prototype.myEach = function(callbackFunction){
  // let arr = [];
  for(const ele of this){
    // arr.push(callbackFunction(ele));
    callbackFunction(ele);
  }
  return undefined;
}

// console.log([1,2,3].myEach(callbackFunction));

// Array.prototype.myMap = function(callbackFunction){
//   let newArray = []

//   //for each ele, pass into callback and push into newArray 
//   const numbers = [1, 2, 4]

//   return function (numbers) {
//     newArray.push(myEach(callbackFunction(numbers)))
//   }
// }
Array.prototype.myMap = function(callback){
  let newArray = [];  
  this.myEach((ele)=>{
    newArray.push(callback(ele));
  });
  return newArray;
};



// console.log([1, 2, 3].myMap(callbackFunction));
// [1, 2, 3].myMap(callbackFunction)


