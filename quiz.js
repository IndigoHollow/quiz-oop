function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.currentQuestionIndex = 0;
}

Quiz.prototype.getQuestion = function() {
	return this.questions[this.currentQuestionIndex];
}

Quiz.prototype.isFinished = function() {
	return this.questions.length === this.currentQuestionIndex;
}

Quiz.prototype.incrementQuestionNumber = function() {
	this.currentQuestionIndex++;
}

Quiz.prototype.questionsInfo = function() {
	return `Вопрос ${this.currentQuestionIndex+1} из ${this.questions.length}`;
}

Quiz.prototype.resetData = function() {
	quiz.score = 0;
	quiz.currentQuestionIndex = 0;
}

Quiz.prototype.incrementScore = function(value) {
	this.score += parseInt(value);
}
