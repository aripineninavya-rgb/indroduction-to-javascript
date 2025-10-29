const target = Math.floor(Math.random()*10);
let guess;
while (guess !== target){
    if (guess > target) {
        console.log (`its too high ${guess}`);

    } else if (guess < target){
        console.log (`its too low ${guess}`);

    } 

    guess = parseFloat(prompt("guess the correct number"));
}

  
    console.log(`congrats you won ${guess}`);
    
    

