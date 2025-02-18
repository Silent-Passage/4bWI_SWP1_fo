document.getElementById("button").addEventListener("click", function() {
    const value1 = document.getElementById("value1").innerText;
    const value2 = document.getElementById("value2").innerText;

    let num1 = parseInt(value1);
    let num2 = parseInt(value2);

    if (isNaN(num1) || isNaN(num2)){
        alert("Invalid value, please enter integers");
    }  
    else{
        

        let randomNumber = 0
        let Skibidi = Math.abs(num2-num1)+1

        if(num1 < num2)
        {
            randomNumber = Math.floor(Math.random() * Skibidi + num1);
        }else{randomNumber = Math.floor(Math.random() * Skibidi + num2);}
    
        document.getElementById("output").innerText =  randomNumber;
    }
})