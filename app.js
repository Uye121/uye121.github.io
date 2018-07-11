function multiply(valuesArray) {
  this.multiplier = 2;
  this.array = [1, 2, 3, 4];
  return valuesArray.map(x => x * this.multiplier);
};

var fakeContext = {};

var arr = multiply.call(fakeContext, [4, 6, 3]);
console.log(arr[2]);
console.log(fakeContext);