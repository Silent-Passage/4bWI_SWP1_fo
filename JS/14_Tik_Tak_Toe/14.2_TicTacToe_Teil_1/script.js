let field = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// console.log(field[2][2])
let string = "";
for (let i = 0; i < field.length; i++) 
    {
    let actualrow = field[i];
    
    for (let col = 0; col < actualrow.length; col++) 
        {
        string+=actualrow[col]+" ";
        
    }
}
console.log(string);
