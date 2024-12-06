// Du hast folgende Eingabe "1 2 3 4"
// Line 2: n space-separated integer numbers x_1 .. x_n.
// Output
// sum of even numbers
// Constraints
// -100 <= x_i <= 100

// Example
// Input
// 1 2 3 4
// Output
// 6

let N1 = Math.random() * 100;
N1_random = Math.floor(N1);
let N2 = Math.random() * 100;
N1_random = Math.floor(N2);
let N3 = Math.random() * 100;
N1_random = Math.floor(N3);
let N4 = Math.random() * 100;
N1_random = Math.floor(N4);

let count = 0;
console.log("N1:",Math.floor(N1));
console.log("N2:",Math.floor(N2));
console.log("N3:",Math.floor(N3));
console.log("N4:",Math.floor(N4));

if(Math.floor(N1)%2==0)
{
    count+=Math.floor(N1)
}
if(Math.floor(N2)%2==0)
{
    count+=Math.floor(N2)
}
if(Math.floor(N3)%2==0)
{
    count+=Math.floor(N3)
}
if(Math.floor(N4)%2==0)
{
    count+=Math.floor(N4)
}
console.log(count);