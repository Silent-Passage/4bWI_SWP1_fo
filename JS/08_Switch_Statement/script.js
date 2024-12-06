 // Erstelle eine Zufallszahl zwischen 5 und 10

let a = 5;
let b = 10;
let N1 = Math.random() * (b - a + 1) + a;
console.log(Math.floor(N1));

// Wenn der Wert 10 ist gib aus Ten
if(Math.floor(N1) == 10)
{
    console.log("Ten")
}
// Wenn der Wert 9 ist gib aus Nine
if(Math.floor(N1) == 9)
{
    console.log("Nine")
}
// Wenn der Wert 8 ist gib aus Eight
if(Math.floor(N1) == 8)
{
        console.log("Eight")
}
// etc.
if(Math.floor(N1) == 7)
{
    console.log("Seven")
}
if(Math.floor(N1) == 6)
{
    console.log("Six")
}
if(Math.floor(N1) == 5)
{
    console.log("Five")
}