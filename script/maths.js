
function guessRandomNumber () {

const target = Math.floor(Math.random() * 10) + 1;

let guess = parseFloat(prompt("guess the correct number:"));

    while (guess !== target) {
        if (guess > target) {
            console.log (`its too high ${guess}`);

        } else if (guess < target){
            console.log (`its too low ${guess}`);

        } 

        guess = parseFloat(prompt("try again:"));
    }

    console.log(`congrats you won ${guess}`);
}

guessRandomNumber();




    
    
    

