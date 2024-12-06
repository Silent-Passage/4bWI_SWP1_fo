// Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
// X X X X 
// O O O O 
// X X X X 
// O O O O 

console.log("Aufgabe 1:");

for(let i = 1; i<=4;i++)
{
    if(i%2==0)
    {
        console.log("O O O O");
    }
    else{console.log("X X X X");}
}

// 2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren 
// (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)

console.log("Aufgabe 2:");
let count=0;
for(let i = 1; i<=100;i++)
{
    if(i%2==0)
    {
        count+=i
    }
}
console.log(count)