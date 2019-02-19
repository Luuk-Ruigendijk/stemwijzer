function agree(){
	chosenAnswer[currentQuestion] = pro;

	currentQuestion++;
	showQuestion();
}

function neither(){
	currentQuestion++;
	showQuestion();
}

function disagree(){
	chosenAnswer[currentQuestion] = contra;

	currentQuestion++;
	showQuestion();
}

function showQuestion(){
	document.getElementById("h1").innerHTML = subjects[currentQuestion].title;
	document.getElementById("p1").innerHTML = subjects[currentQuestion].statement;
}

function previousQuestion(){
	currentQuestion--;
	chosenAnswer[currentQuestion] = 0;
	if (currentQuestion >= 0) {
		showQuestion();
	}

	if (currentQuestion < 0) {
		document.getElementById("agreeButton").style.display="none";
		document.getElementById("neitherButton").style.display="none";
		document.getElementById("disagreeButton").style.display="none";
		document.getElementById("backArrow").style.display="none";
		document.getElementById("startButton").style.display="inherit";
		document.getElementById("h1").innerHTML="Test uw politieke voorkeur aan de hand van 30 stellingen";
		document.getElementById("p1").innerHTML="";
	}
}

function start(){
	document.getElementById("agreeButton").style.display="inline";
	document.getElementById("neitherButton").style.display="inline";
	document.getElementById("disagreeButton").style.display="inline";
	document.getElementById("backArrow").style.display="inherit";
	document.getElementById("startButton").style.display="none";
	document.getElementById("h1").innerHTML = subjects[currentQuestion].title;
	document.getElementById("p1").innerHTML = subjects[currentQuestion].statement;
	currentQuestion = 0;
}