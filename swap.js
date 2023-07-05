let a=prompt("ENTER THE FIRST NUMBER:");
let b=prompt("ENTER THE SECOND NUMBER");
console.log(`a is ${a} and b is ${b}`);
let temp=a;
a=b;
b=temp;
console.log(`a is ${a} and b is ${b}`);