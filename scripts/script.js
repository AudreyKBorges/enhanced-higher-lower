while(true) {
    // Ask user what the maximum number should be
    let maxNum = prompt("Please enter the maximum number.");
    let minNum = 1;
     
    // Validate user entered number
    if(!isNaN(maxNum) && maxNum > minNum) {
        maxVal = parseInt(maxNum);
        document.getElementById('max-value').innerHTML = maxVal;
        break;
    }
}

let minNum = 1;
// generate a random max number
let num = parseInt(Math.random() * (maxVal - minNum)) + minNum; 

function do_guess() {
    // user input
    let guess = Number(document.getElementById('guess').value);
    let message = document.getElementById('message');
    // initialize empty array to store input
    let numList = [];
    let len = numList.length;
    
    // validate user guess
    if(isNaN(guess)) {
        message.innerHTML = "That is not a number!";
    }
    // check to see if user guess is in range
    else if ((guess < minNum) || (guess > maxVal)) {
        message.innerHTML = "That number is not in range, try again.";
        return;
    } 
    else {
        guess = parseInt(guess);
        if (guess === num) {
            numList.push(guess);
            console.log(guess);
            message.innerHTML = `You got it! It took you ${len} tries and your guesses were ${numList.join(', ')}`;
        }
        else if (guess < num) {
            numList.push(guess);
            console.log(guess);
            message.innerHTML = "No, try a higher number.";
        }
        else {
            numList.push(guess);
            console.log(guess);
            message.innerHTML = "No, try a lower number.";
        }
    }
}