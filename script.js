const playGame = () => {
    // Generate a random number between 1 and 10
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0; // Counter for attempts made by the user

    // DOM elements
    const okButton = document.getElementById('okButton');
    const cancelButton = document.getElementById('cancelButton');
    const guessInput = document.getElementById('guessInput');

    // Function to check the user's guess
    const checkGuess = () => {
        const guess = parseInt(guessInput.value); // Get the user's guess as an integer

        // Validate the input
        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Invalid input. Please enter a number between 1 and 10.");
            return;
        }

        attempts++; // Increment the attempts counter

        // Provide feedback based on the user's guess
        if (guess < targetNumber) {
            alert("Too low. Try again.");
        } else if (guess > targetNumber) {
            alert("Too high. Try again.");
        } else {
            // If the guess is correct, congratulate the user
            alert(`Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`);
            resetGame(); // Reset the game after a successful guess
        }
    };

    // Function to cancel the game
    const cancelGame = () => {
        alert("Game canceled.");
        resetGame(); // Reset the game when canceled
    };

    // Function to reset the game state
    const resetGame = () => {
        guessInput.value = ''; // Clear the input field
        guessInput.disabled = true; // Disable input field
        okButton.disabled = true; // Disable 'OK' button
        cancelButton.disabled = true; // Disable 'Cancel' button
    };

    // Event listeners for buttons
    okButton.addEventListener('click', checkGuess); // Check the guess when 'OK' button is clicked
    cancelButton.addEventListener('click', cancelGame); // Cancel the game when 'Cancel' button is clicked

    // Enable input and buttons to start the game
    guessInput.disabled = false;
    okButton.disabled = false;
    cancelButton.disabled = false;
};

// Start the game when the script loads
playGame();
