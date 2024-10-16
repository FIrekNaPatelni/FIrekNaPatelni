function submitQuiz() {
    var totalQuestions = 5;
    var score = 0;

    // Get user's answers
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');

    // Check answers and calculate score
    if (q1 && q1.value === "a") {
        score++;
        console.log("pyt1")
    }
    if (q2 && q2.value === "c") {
        score++;
        console.log("pyt2")
    }
    if (q3 && q3.value === "c") {
        score++;
        console.log("pyt3")
    }
    if (q4 && q4.value === "a") {
        score++;
        console.log("pyt4")
    }
    if (q5 && q5.value === "c" || "b") {
        score++;
        console.log("pyt5")
    }


    if (score === totalQuestions) {
        document.getElementById("yesbitches").style.display = "block";
    } else {
        document.getElementById("nobitches").style.display = "block";
    }
}
