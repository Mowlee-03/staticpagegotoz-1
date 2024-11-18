
function togglebtn() {
        let data=document.querySelector(".mobile-bar")
        data.classList.toggle('active')
}
function answershow(button) {
    // Find the parent `.questions` div
    let questionDiv = button.closest('.questions');
    let answer = questionDiv.querySelector('.q-answer');
    answer.classList.toggle('seeanswer');
    
    //change the button symbol
    let head=questionDiv.querySelector(".q-head")
    let changeSymbol = questionDiv.querySelector('.q-dropdown');
    let buttonElement = questionDiv.querySelector('.drop-btn'); // Get the button element
    if (answer.classList.contains('seeanswer')) {
        // When the answer is visible, show an upward arrow or minus icon
        changeSymbol.src = "../Assets/Symbol-2.png"; // Update with the correct symbol path
        buttonElement.style.backgroundColor = "#2B70FA"; // Change the background color
    } else {
        // When the answer is hidden, show a downward arrow or plus icon
        changeSymbol.src = "../Assets/Symbol-3.png"; // Update with the correct symbol path
        buttonElement.style.backgroundColor = ""; // Reset to default background color
    }
}
