window.onload = function(e) {

    // set minimum number and user determined max value
    let minNum = 1;
    let maxVal = "";

    while(true) {
        // prompt the user to enter a number for the max value
        let maxNum = prompt("Please enter the maximum number.");

        // validate the user entered number
        if (!isNaN(maxNum) && maxNum > minNum) {
            maxVal = parseInt(maxNum);
            document.getElementById('max-value').innerHTML = maxVal;
            break;
        }
    }

    // generate a random max number
    const num = Math.ceil(Math.random() * (maxVal - minNum)) + minNum; 

    // guess button
    const button = document.getElementById('button');

    // guess field
    const guessField = document.querySelector('.guessField');

    // initialize an empty array to store user guesses
    let nums = [];

    // add event listener to button
    button.addEventListener('click', ()=> {

    let guess = Number(document.getElementById('guess').value);
    let message = document.getElementById('message');
    
    // prevent duplicate guesses
    if (nums.includes(guess)) {
        message.innerHTML = `You have already guessed the number ${guess}`;
    } 
    // check if guess is a number
    else if (isNaN(guess)) {
        message.innerHTML = 'That is not a number!';
    }
    // check if guess is in range
    else if ((guess < minNum) || (guess > maxVal)) {
        message.innerHTML = 'That number is not in range, try again.';
    }
    // display message to user if guess is too high
    else if (guess > num) {
        console.log(guess);
        message.innerHTML = "No, try a lower number.";
        if (!nums.includes(guess)) {
            nums.push(guess);
            }
    }
    // display message to user if guess is too low
    else if (guess < num) {
        console.log(guess);
        message.innerHTML = "No, try a higher number.";
        if (!nums.includes(guess)) {
            nums.push(guess);
            }
    }
    // display message if user guess is correct
    else if (guess == num) {
        console.log(guess);
        nums.push(guess);
        message.innerHTML = `You got it! It took you ${nums.length} tries and your guesses were ${nums.join(', ')}`;
        nums = [];
        document.getElementById("guess").disabled = true;
        return;
    }
});
}