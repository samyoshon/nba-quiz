//Object literal for QuizUI

var QuizUI = {
    displayNext: function () {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },

    //Passes in value from 'question.text' key
    displayQuestion: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },

    //Retrieves all choices per question, runs through loop
    displayChoices: function() {
        var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i < choices.length; i++) {
            this.populateOptions(i, choices[i]);
            // this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },

    //Shows score after game has ended
    displayScore: function() {
        var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
        this.populateIdWithHTML("quiz", gameOverHTML);
    },
    
    //Method used to manipulate different parts of the DOM
    populateIdWithHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },

    //Method used to call the guess method (which keeps score and moves question foward) after click
    guessHandler: function(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
                //Clears all appended options
            $('#options').empty();
            QuizUI.displayNext();
        };
    },
    
    //Shows progress as question moves foward
    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    },

    populateOptions: function(id, text) {
        var questionChoices = "<p id='choice" + id + "'>" + text + "</p>";
        var questionButtons = "<button id='guess" + id + "' class='btn--default'>Select Answer</button>";
        $('#options').append(questionChoices);
        $('#options').append(questionButtons);
    }
};