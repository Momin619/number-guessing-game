let random_Number = () => Math.floor(Math.random() * 100); // Generate a number between 0 and 99

let target = random_Number();
console.log(`Target Number: ${target}`); // Debugging purposes

let guess = 0; // Count the number of guesses

// Elements
const input = document.querySelector("#number");
const submitButton = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");
const resetButton = document.querySelector("#reset");

// Function to reset feedback animation
function resetFeedbackAnimation() {
  feedback.style.animation = "none"; // Remove animation
  feedback.offsetHeight; // Trigger reflow to restart animation
  feedback.style.animation = ""; // Reapply animation
}

// Submit Button Event Listener
submitButton.addEventListener("click", () => {
  const userGuess = parseInt(input.value, 10); // Convert input value to an integer

  // Check if the input is valid
  if (isNaN(userGuess)) {
    feedback.textContent = "Please enter a valid number.";
    feedback.style.color = "red";
    resetFeedbackAnimation(); // Reset animation
    return;
  }

  if (userGuess < 0 || userGuess > 99) {
    feedback.textContent = "Please guess a number between 0 and 99.";
    feedback.style.color = "red";
    resetFeedbackAnimation(); // Reset animation
    return;
  }

  guess++; // Increment the guess counter
  console.log(`Guess #${guess}: ${userGuess}`); // Debugging purposes

  // Compare the user's guess to the target
  if (userGuess === target) {
    feedback.textContent = `🎉 Correct! You guessed the number ${target} in ${guess} tries.`;
    feedback.style.color = "white";
    resetFeedbackAnimation(); // Reset animation
    resetButton.style.display = "block"; // Show the reset button
    submitButton.disabled = true; // Disable the submit button
  } else if (userGuess < target) {
    feedback.textContent = "🔼 Too low! Try a bigger number.";
    feedback.style.color = "orange";
    resetFeedbackAnimation(); // Reset animation
  } else {
    feedback.textContent = "🔽 Too high! Try a smaller number.";
    feedback.style.color = "orange";
    resetFeedbackAnimation(); // Reset animation
  }

  input.value = ""; // Clear the input field for the next guess
});

// Reset Button Event Listener
resetButton.addEventListener("click", () => {
  target = random_Number(); // Generate a new random number
  console.log(`New Target Number: ${target}`); // Debugging purposes

  guess = 0; // Reset the guess counter
  feedback.textContent = ""; // Clear feedback message
  input.value = ""; // Clear input field
  resetButton.style.display = "none"; // Hide reset button
  submitButton.disabled = false; // Enable the submit button
});
