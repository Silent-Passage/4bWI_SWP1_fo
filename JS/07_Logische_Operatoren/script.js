// Erstelle zwei Zufallszahl zwischen 0 und 100
// Speichere diese jeweils in einer Variable
let N1 = Math.random() * 100;
N1_random = Math. floor (N1);

let N2 = Math.random() * 100;
N1_random = Math. floor (N2);

console.log("N1:",N1)
console.log("N2:",N2)

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

if(N1 < N2 && N1 < 50)
{
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

if(N1 < 30 || N2 < 30)
{
    console.log("Eine der beiden ist kleiner als 30")
}

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"

if(N1 < 50 && N2 != 50)
{
    console.log("Erste Zahl klein, zweite kein 50iger")
}