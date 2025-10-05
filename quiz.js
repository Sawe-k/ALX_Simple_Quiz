
function checkAnswer() {
    let correctAnswer = "4";
    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    let feedback = document.getElementById("feedback");

    if (selectedOption) {
        let userAnswer = selectedOption.value;

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "⚠️ Please select an answer.";
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
