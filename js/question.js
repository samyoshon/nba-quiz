//Constructor function for questions

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Method for questions

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};