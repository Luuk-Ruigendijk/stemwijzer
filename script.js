function agree(){
	nextQuestion();
}

function neither(){
	nextQuestion();
}

function disagree(){
	nextQuestion();
}

function nextQuestion(){
	currentQuestion++;
	document.getElementById("h1").innerHTML = subjects[currentQuestion].title;
	document.getElementById("p1").innerHTML = subjects[currentQuestion].statement;
}

function previousQuestion(){
	if (currentQuestion >= 1) {
		currentQuestion--;
		document.getElementById("h1").innerHTML = subjects[currentQuestion].title;
		document.getElementById("p1").innerHTML = subjects[currentQuestion].statement;
	}
	if (currentQuestion <= 0) {
		
	}
}

function start(){
	document.getElementById("agreeButton").innerHTML = "Eens";
	document.getElementById("agreeButton").style.display="inline";
	document.getElementById("neitherButton").innerHTML = "Geen van beide";
	document.getElementById("neitherButton").style.display="inline";
	document.getElementById("disagreeButton").innerHTML = "Oneens";
	document.getElementById("disagreeButton").style.display="inline";
	document.getElementById("backArrow").style.display="inherit";
	document.getElementById("startButton").style.display="none";
	document.getElementById("h1").innerHTML = subjects[currentQuestion].title;
	document.getElementById("p1").innerHTML = subjects[currentQuestion].statement;

}