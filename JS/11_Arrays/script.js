// Aufgabe 1
//
// Erstelle ein Array mit folgenden Werten:
// 4,1,2,3
// Füge die Werte 17 und 199 dazu
//
// a. Gib alle Werte in einer Schleife aus!
// b. Zähle alle Werte zusammen und gib das Ergebnis aus
// c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus

let array = [4,1,2,3];
array.push(17);
array.push(199);
console.log(array);
count=0;

for(let i=0; i<array.length;i++)
{
    console.log(array[i]);
    count+=array[i]

}
console.log("Zusammen ergeben alle Zahlen:",count)
console.log("Der Mittelwert wäre:",count/array.length)

// Aufgabe 2
//
// Erstelle ein Array mit folgenden Strings:
// "Susi", "Paula", "Hans"
//
// Gib folgenden Satz aus:
// "Meine Freunde sind Susi, Paula und Hans"
//
// Füge "Sepp" dazu. Nun soll die Ausgabe folgendermaßen lauten:
// "Meine Freunde sind Susi, Paula, Hans und Sepp"

let namen = ["Susi", "Paula", "Hans"]

console.log("Meine Freunde sind",namen[0]+",",namen[1],"und",namen[2])

namen.push("Sepp")

console.log("Meine Freunde sind",namen[0]+",",namen[1]+",",namen[2],"und",namen[3])