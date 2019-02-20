function agree(){
	chosenAnswer[currentQuestion] = "pro";
	newCurrentQuestion();
	showQuestion();
}

function neither(){
	newCurrentQuestion();
	showQuestion();
}

function disagree(){
	chosenAnswer[currentQuestion] = "contra";
	newCurrentQuestion();
	showQuestion();
}

function newCurrentQuestion(){
	if (currentQuestion < totalAmountOfQuestions) {
		currentQuestion++;
	}
}

function showQuestion(){
	document.getElementById("h1").innerHTML = subjects[currentQuestion].title;
	document.getElementById("p1").innerHTML = subjects[currentQuestion].statement;
}

function previousQuestion(){
	currentQuestion--;
	chosenAnswer[currentQuestion] = 0;
	if (currentQuestion <= totalAmountOfQuestions) {
		
		if (currentQuestion < 0) {
		document.getElementById("agreeButton").style.display="none";
		document.getElementById("neitherButton").style.display="none";
		document.getElementById("disagreeButton").style.display="none";
		document.getElementById("backArrow").style.display="none";
		document.getElementById("startButton").style.display="inherit";
		document.getElementById("h1").innerHTML="Test uw politieke voorkeur aan de hand van 30 stellingen";
		document.getElementById("p1").innerHTML="";
	}
	else {
		showQuestion();
	}
	}

	
}

function start(){
	currentQuestion = 0;
	document.getElementById("agreeButton").style.display="inline";
	document.getElementById("neitherButton").style.display="inline";
	document.getElementById("disagreeButton").style.display="inline";
	document.getElementById("backArrow").style.display="inherit";
	document.getElementById("startButton").style.display="none";
	showQuestion()
}
