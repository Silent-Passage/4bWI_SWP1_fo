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

let field = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let neustart = "";
let win = 0;
let zuege = 0;

function winner() {
    for (let i=0; i<3; i++) 
    {
        if (field[i][0]!=0 && field[i][0]==field[i][1] && field[i][1]==field[i][2]) return field[i][0];
        if (field[0][i]!=0 && field[0][i]==field[1][i] && field[1][i]==field[2][i]) return field[0][i];
    }
    if (field[0][0]!=0 && field[0][0]==field[1][1] && field[1][1]==field[2][2]) return field[0][0];
    if (field[0][2]!=0 && field[0][2]==field[1][1] && field[1][1]==field[2][0]) return field[0][2];
    return 0;
}

function draw() {
    return zuege >= 9 && win==0;
}
do {
    field = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    win=0;
    zuege=0;

    while (win==0 && !draw()) 
    {
        do
        {
            console.log("(Spieler X) Welche Zeile möchtest du auswählen? (0,1,2)");
            let rowX = await readLineAsync();
            console.log("(Spieler X) Welche Reihe möchtest du auswählen? (0,1,2)");
            let columnX = await readLineAsync();

            if (field[rowX][columnX]==0) 
            {
                field[rowX][columnX]=1;
                zuege+=1;
                printField();
                win=winner();
            }
                else{console.log("Feld ist schon belegt! Versuche es erneut.");   
            }
        }while(zuege%2==0)
        if (win!=0 || draw()) break;

        do
        {
            console.log("(Spieler O) Welche Zeile möchtest du auswählen? (0,1,2)");
            let rowO = await readLineAsync();
            console.log("(Spieler O) Welche Reihe möchtest du auswählen? (0,1,2)");
            let columnO = await readLineAsync();

            if (field[rowO][columnO]==0) {
                field[rowO][columnO]=2;
                zuege+=1;
                printField();
                win=winner();
            } 
            else 
            {
                console.log("Feld ist schon belegt! Versuche es erneut.");

            }
        }while(zuege%2!=0)
    }

    if (win==1) 
    {
        console.log("Spieler X gewinnt!");
    } 
    else if (win==2) 
    {
        console.log("Spieler O gewinnt!");
    } 
    else {console.log("Draw");}

    console.log("Möchtest du neustarten? (y/n)");
    neustart = await readLineAsync();
} while (neustart.toLowerCase()=="y");
console.log("-------------------------------")
console.log("GG");
readline.close();


function printField(){
    for (let i = 0; i < field.length; i++) 
    {
        let actualrow = field[i];
        let string = "";
        
        for (let col = 0; col < actualrow.length; col++) 
        {
            let input = " ";
            if(actualrow[col]==1){
                input="X"
            }
            else if(actualrow[col]==2){
                input="O"
            }

            if(col+1 != field.length){
                string+=input+" | ";
            
            }
            else{string+=input;}
        }
        console.log(string)
        if(i+1 != field.length)
        {
            console.log("-- --- --")
        }
    }
}
