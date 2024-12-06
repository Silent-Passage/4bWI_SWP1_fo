function printMenu(name, age, place)
{
    console.log("Welcome",name+"!");
    console.log("Your age represents:",age);
    console.log("Your current location:",place);
}
printMenu("Raphael",17,"Lustenau")
printMenu("David",17,"Wolfurt")


function add(a,b)
{
    return a+b
}
let result1 = add(4,7);
console.log(result1);

function subtract(a,b)
{
    return a-b
}
let result2 = subtract(10,5);
console.log(result2);

function mulitply(a,b)
{
    return a*b
}
let result3 = mulitply(5,5);
console.log(result3);

function supercalculation(a,b)
{
    return (a+b)/2 * a
}
let result4 = supercalculation(10,12);
console.log(result4);

function printEasterDate(year)
{
    N=year-1900
    A=N%19
    B=((7*A+1)/19)
    M=(11*A+4-B)%29
    Q=N/4
    W=(N+Q+31-M)%7
    P=25-M-W
}
let result5 = printEasterDate(2024)
if(P>0)
{
    console.log("Der Ostersonntag ist der:",Math.round(P)+".","April")
}
else{console.log("Der Ostersonntag ist der:",Math.round(P+31)+".","März")}