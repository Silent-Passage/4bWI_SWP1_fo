
// //Berechne die Summe der geraden durch die Summe der ungeraden Zahlen
// const data2 = "1,2,3,4,5,6,7,8,9,10,11,12"

let data2 = [1,2,3,4,5,6,7,8,9,10,11,12,31,33,35];
e=0
o=0
for(let i = 0; i < data2.length;i++)
{
    if(data2[i]%2==0)
    {
        e++
    }
    else{o++}
}
console.log("Even:",e)
console.log("Odd:",o)
console.log(e/o)