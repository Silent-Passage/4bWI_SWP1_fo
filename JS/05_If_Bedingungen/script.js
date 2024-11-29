// erstelle eine Variable number

r = Math.random(1);
console.log("Unsere zufällige Zahl ist:",parseInt(r*100))


// Wenn die Zahl kleiner ist als 20  gib aus "Mini"
if (parseInt(r*100) < 20)
{
    console.log("Aufgabe 1: Mini")
} // Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"
else if(parseInt(r*100) >= 20 && parseInt(r*100) <= 50)
{
    console.log("Aufgabe 1: Medium")
}// Wenn die Zahl größer als 50 ist gib aus "Large"
else if(parseInt(r*100) > 50)
{
    console.log("Aufgabe 1: Large")
}


// Wenn die Zahl kleiner gleich 7 ist gib aus "Mini"
if (parseInt(r*100) <= 7)
{
        console.log("Aufgabe 2: Mini")
}// Wenn die Zahl zwischen 7 und 90 ist gib  aus "Medium"
else if(parseInt(r*100) > 7 && parseInt(r*100) < 90)
{
    console.log("Aufgabe 2: Medium")
} // Wenn die Zahl größer als 90 ist gib aus "Large"
else if(parseInt(r*100) > 90)
{
    console.log("Aufgabe 2: Large")
}