 // Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"

let Minion_eats_Banana = "Banane"
let Apple = "Apfel"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

let BananaDurchschnittlich = bananaPricePerKilo / 0.22;
let AppleDurchschnittlich = applePricePerKilo / 0.34;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
// Preis von 8 Äpfeln

    console.log("Preis von 8 Äpfel:",AppleDurchschnittlich*8,"Geldeinheiten")
    console.log("Gerundet wäre dies:",Math.round(AppleDurchschnittlich*8),"Geldeinheiten")
// Preis von 17 Bananen
    console.log("Preis von 17 Bananen:",BananaDurchschnittlich*17,"Geldeinheiten")
    console.log("Gerundet wäre dies:",Math.round(BananaDurchschnittlich*17),"Geldeinheiten")
// Preis von 1 Tonne Äpfel
    console.log("Preis von 1 Tonne Äpfel:",applePricePerKilo*1000,"Geldeinheiten")
    console.log("Gerundet wäre dies:",Math.round(applePricePerKilo*1000),"Geldeinheiten")
// Preis von 1 Tonne Bananen
    console.log("Preis von 1 Tonne Bannen:",bananaPricePerKilo*1000,"Geldeinheiten")
    console.log("Gerundet wäre dies:",Math.round(bananaPricePerKilo*1000),"Geldeinheiten")
