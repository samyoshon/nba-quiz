//Create Questions
var questions = [
    new Question("Who was drafted earliest in the 1996 NBA draft? ", [ "Antoine Walker", "Kobe Bryant", "Steve Nash", "Ray Allen" ], "Ray Allen"),
	new Question("Who was the NBA All-Star Game MVP in 2004", [ "Allen Iverson", "Shaquille O'neal", "Kobe Bryant", "Tim Duncan" ], "Shaquille O'neal"),
	new Question("Who was the leader in Assists Per Game in the 08-09 season?", [ "Allen Iverson", "Steven Nash", "Deron Williams", "Chris Paul" ], "Chris Paul"),
	new Question("Who was the Rookie of the Year in the 11-12 season?", [ "Blake Griffin", "Derrick Rose", "John Wall", "Landry Fields" ], "Blake Griffin")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz - Starts the Game
QuizUI.displayNext();