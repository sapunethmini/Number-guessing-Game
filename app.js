
let ConsoleNUm1= Math.random()*10;
let ConsoleNUm= Math.round(ConsoleNUm1);
function  Game(){


console.log(ConsoleNUm);
let attempts = 0;

for (let i = 0; i < 3; i++)
{
    
    if (attempts > 3) {
        document.getElementById("output").innerText = "Game Over";
        alert("Game Over");
        return;
      }
    
    let userInput = parseInt(document.getElementById("userInput").value);
    attempts++;
    if(ConsoleNUm !== userInput)
    {
        if(ConsoleNUm>userInput)
        {
            document.getElementById("output").innerText = "Oops!! Number is greater than " + userInput;
            alert("Try again , your number >"+userInput);
            
        }else{
            document.getElementById("output").innerText = "Oops!! Number is lower than " + userInput;
            alert("Try again , your number <"+userInput);
        }
    }else{
        console.log("YES correct number !! winner!!!!!!");
        alert("YES correct number !! winner!!!!!!");
        break;
    
        
    }

   
}

document.getElementById("userInput").value = "";
    document.getElementById("output").innerText = "";
}
