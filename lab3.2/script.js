function nextTest(isCorrect, nextPage) {
    if (localStorage.getItem('correctAnswers') === null) {
        localStorage.setItem('correctAnswers', '0');
    }

    if (isCorrect) {
        let correctAnswers = parseInt(localStorage.getItem('correctAnswers'));
        correctAnswers++;
        localStorage.setItem('correctAnswers', correctAnswers);
    }

    window.location.href = nextPage;
}

function resetAnswers() {
    localStorage.setItem('correctAnswers', '0');
}

function showResults() {
    const correctAnswers = parseInt(localStorage.getItem('correctAnswers')) || 0;

    if (correctAnswers === 5) {
        window.location.href = "goodResult.html";
    } else if (correctAnswers >= 3) {
        window.location.href = "normalResult.html";
    } else {
        window.location.href = "endFail2.html";
    }

    resetAnswers();
}
