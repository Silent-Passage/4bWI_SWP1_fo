import { log } from "console";
import { read } from "fs";
import { resolve } from "path";
import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            
        });
    });
};


let konto=0;
let bool=true;

while (bool) 
{
    console.log("Selektieren Sie die gewünschte Funktion");
    console.log("1. Einzahlen");
    console.log("2. Abheben");
    console.log("3. Kontostand");
    console.log("4. Ende");

    let input = await readLineAsync();

    switch (input) 
    {
        case "1":
            console.log("Geben Sie den Betrag ein den sie einzahlen moechten: ")
            let a = Number(await readLineAsync())
            if (a<= 0) 
            {
                console.log("Ungueltiger Betrag!");
            } 
            else 
            {
                konto+=a;
                console.log(a,"wurden eingezahlt")
            }
            break;

        case "2":
            console.log("Geben Sie den Betrag ein den sie abheben moechten: ")
            let b = Number(await readLineAsync())

            if (b<=0) 
            {
                console.log("Ungueltiger Betrag!")
            } 
            else if (b>konto) 
            {
                console.log("Nicht genuegend Guthaben!")
            } 
            else 
            {
                konto-=b
                console.log(b,"wurden abgehoben")
            }
            break;

        case "3":
            console.log("Ihr Konto betraegt:",konto)
            break

        case "4":
            console.log("Auf Wiedersehen!")
            bool=false
            break;
    }
}

readline.close();