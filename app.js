let quiz = new Quiz(quizData),
		restartButton = document.getElementById('next1'),
		quizBlock = document.getElementById('block'),
		resultsBlock = document.getElementById('result'),
		results = document.getElementById('wording'),
		resultsFullTextBlock = document.getElementById('resultsFullText'),
		question = document.getElementById('question'),
		answersBlock = document.getElementById('answers'),
		progress = document.getElementById('progress'),
		resultsFullText = getResultsFullText(quiz.score),
		answerScore = quiz.getQuestion().scores;

// switch between quiz and result blocks
function showHideBlock(quiz, result) {
		quizBlock.style.display = quiz;
		resultsBlock.style.display = result;
}

function redoQuiz() {
	quiz.resetData();
	showHideBlock('block', 'none');
	populate();
}

// increment score and show new question
function incrementScore(element) {
	let getAnswerIndex = element.getAttribute('data-question');

	quiz.incrementScore(getAnswerIndex);
	quiz.incrementQuestionNumber();

	populate();
}

// get the full text of results
function getResultsFullText(score) {
	let result = 0;

	if( score <= scoreRate[0] ) {
		result = quizResults[0][0];
	} else if( score <= scoreRate[1]) {
		result = quizResults[1][0];
	} else if( score <= scoreRate[2]) {
		result = quizResults[2][0];
	} else {
		result = quizResults[3][0];
	}

	return result;
}

function showResults() {
	showHideBlock('none', 'block');

	results.innerHTML = `Ваш результат: ${quiz.score}`;
	resultsFullTextBlock.innerHTML = resultsFullText;
}

//set question and answers for the new question or results
function populate() {
	if(quiz.isFinished()) {
		showResults();
	} else {
		let answers = quiz.getQuestion().answers;

		// set question
		question.innerHTML = quiz.getQuestion().question;

		// clear answers array
		answersBlock.innerHTML = '';

		// show quiz progress
		progress.innerHTML = quiz.questionsInfo();

		// set answers
		answers.forEach((value, key) => {
			answersBlock.innerHTML += `<div class="question-button" data-question="${answerScore[key]}" onclick="incrementScore(this)">${value}</div>`;
		});
	}
}

restartButton.onclick = redoQuiz;

populate();
