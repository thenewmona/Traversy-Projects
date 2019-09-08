//destructing assignment 

let a, b;
[a, b, ...rest] = [100, 200, 300, 400, 500];
//rest pattern (... is the spread operator)

console.log(rest);