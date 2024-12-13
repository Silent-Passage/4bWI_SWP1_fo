// Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).

// Input
// 5
// 1 -2 -8 4 5
// Output
// 1

let a=[1, -2, -8, 4, 5, -1];
let c=a[0];

for(let i = 0; i < a.length; i++) {
    if(Math.abs(a[i])<Math.abs(c) || (Math.abs(a[i])==Math.abs(c) && a[i] > c)) 
    {
        c=a[i];
    }
}
console.log(c);


