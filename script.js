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
	else if (currentQuestion = totalAmountOfQuestions) {
		currentQuestion++;
		showResults()
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
			document.getElementById("partijenMeening").style.display="none";
			document.getElementById("startButton").style.display="inherit";
			document.getElementById("h1").innerHTML="Test uw politieke voorkeur aan de hand van 30 stellingen";
			document.getElementById("p1").innerHTML="";
		}
		else {
			document.getElementById("agreeButton").style.display="inline";
			document.getElementById("neitherButton").style.display="inline";
			document.getElementById("disagreeButton").style.display="inline";
			document.getElementById("partijenMeening").style.display="inline";
			showQuestion();
		}
	}
}

function start(){
	currentQuestion = 0;
	document.getElementById("agreeButton").style.display="inline";
	document.getElementById("neitherButton").style.display="inline";
	document.getElementById("disagreeButton").style.display="inline";
	document.getElementById("partijenMeening").style.display="inline";
	document.getElementById("backArrow").style.display="inherit";
	document.getElementById("startButton").style.display="none";
	showQuestion()
}

function openPartyList(){

}

function showResults(){
	document.getElementById("agreeButton").style.display="none";
	document.getElementById("neitherButton").style.display="none";
	document.getElementById("disagreeButton").style.display="none";
	document.getElementById("partijenMeening").style.display="none";
}

//unfinished code to show all the parties opinions

/*<span onclick="openPartyList()">Wat vinden de partijen?</span>
		<div id="partyList">
			<script type="text/javascript">
				for (var i = 0; i < subjects[currentQuestion].parties.length; i++) {
					var parties = document.getElementById("parties"+[i]);
					parties[i].innerHTML = subjects[currentQuestion].parties[i].explanation;
				}
			</script>
		</div>
*/

var parties;

function collectData(){
		function reqListener () {
			parties = JSON.parse(this.response);
			console.dir(parties);
	  //console.log(this.responseText);
	}

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", "http://localhost/stemwijzer/yo.php");
	oReq.send();
}

collectData();