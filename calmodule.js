exports.add = function (a, b) {
  return a+b;
}; 

// Returns difference of two numbers
exports.subtract = function (a, b) {
  return a-b;
}; 

// Returns product of two numbers
exports.multiply = function (a, b) {
  return a*b;
};
exports.divide = function (a, b) {
  return a/b;
};
exports.modulus = function (a, b) {
  
  return a%b;
};
exports.power= function (a, b) {
  return Math.pow(a,b);
};