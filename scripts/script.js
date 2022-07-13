while(true) {
    // Ask user what the maximum number should be
    let maxNum = prompt("Please enter the maximum number.");
    let minNum = 1;
     
    // Validate user entered number
    if(!isNaN(maxNum) && maxNum > minNum) {
        maxVal = Math.floor(maxNum);
        document.getElementById('max-value').innerHTML = maxVal;
        break;
    }
}

function do_guess() {
    let guess = Number(document.getElementById('guess').value);
    let message = document.getElementById('message');
    let minNum = 1;
    let num = Math.floor(Math.random() * maxVal- minNum) + minNum;  
    
    // Validate user guess
    if(isNaN(guess)) {
        message.innerHTML = "That is not a number!";
    }
    // Check to see if user guess is in range
    else if ((guess < minNum) || (guess > maxVal)) {
        message.innerHTML = "That number is not in range, try again.";
    }
    else if (guess == num) {
        message.innerHTML = "You got it!";
    }
    else if (guess < num) {
        message.innerHTML = "No, try a higher number.";
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
    }
}