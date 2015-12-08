//Constructor function for quiz

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

//Methods for quiz

	//Method 'guess' adds to score and moves questions along via index

Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

	//Method 'getCurrentQuestion' retrieves current question from question array

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

	//Method 'hasEnded' ends game is question index is greater than question array

Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};