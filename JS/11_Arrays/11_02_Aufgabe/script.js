// The program:
// Invertiere eine Bitfolge


// EXAMPLE:
// Input
// 000111000
// Output
// 111000111

//Ich habe die Aufgabe falsch interpretiert:
let string1 = "000111000";
let string2="";
// for(let i = string1.length-1; i>=0;i--)
// {
//     string2+=string1[i];
// }

// console.log(string2);

for(let i = 0; i < string1.length; i++)
{
    if(string1[i]=="0")
    {
        string2+="1"
    }
    else{string2+="0"}
}
console.log(string2)