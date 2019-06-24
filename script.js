var parties;

var subjectAndParty = 0;

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

function agree(){
	chosenAnswer[currentQuestion] = "pro";
	newCurrentQuestion();
}

function neither(){
	chosenAnswer[currentQuestion] = "neither";
	newCurrentQuestion();
}

function disagree(){
	chosenAnswer[currentQuestion] = "contra";
	newCurrentQuestion();
}

function newCurrentQuestion(){
	if (currentQuestion < totalAmountOfQuestions) {
		currentQuestion++;
		showQuestion();
	}
	else if (currentQuestion = totalAmountOfQuestions) {
		currentQuestion++;
		showResults();
	}
}

function showQuestion(){
	document.getElementById("h1").innerHTML = subjects[currentQuestion].title;
	document.getElementById("p1").innerHTML = subjects[currentQuestion].statement;
	showOpinions();
}

function showOpinions(){

	subjectAndParty = subjects[currentQuestion].parties;

	document.getElementById("partijenMeening").innerHTML = "";

	for (var partie = 0; partie < subjectAndParty.length; partie++) {
		var createTableSlide = document.createElement("tr");
		var createTablePartyName = document.createElement("td");
		var createTablePosition = document.createElement("td");
		var createTableExplanation = document.createElement("td");
		createTablePartyName.innerHTML = subjects[currentQuestion].parties[partie].name;
		createTablePosition.innerHTML = subjects[currentQuestion].parties[partie].position;
		createTableExplanation.innerHTML = subjects[currentQuestion].parties[partie].explanation;
		document.getElementById("partijenMeening").appendChild(createTableSlide);
		createTableSlide.appendChild(createTablePartyName);
		createTableSlide.appendChild(createTablePosition);
		createTableSlide.appendChild(createTableExplanation);
		//partiesOrdered.push(parties[partie].name);
	};
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
			document.getElementById("partijenMeeningVraag").style.display="none";
			document.getElementById("startButton").style.display="inherit";
			document.getElementById("h1").innerHTML="Test uw politieke voorkeur aan de hand van 30 stellingen";
			document.getElementById("p1").innerHTML="";

		}
		else {
			document.getElementById("agreeButton").style.display="inline";
			document.getElementById("neitherButton").style.display="inline";
			document.getElementById("disagreeButton").style.display="inline";
			document.getElementById("partijenMeeningVraag").style.display="inline";
			document.getElementById("partyResults").innerHTML = "";
			showQuestion();
		}
	}
}

function start(){
	currentQuestion = 0;
	document.getElementById("agreeButton").style.display="inline";
	document.getElementById("neitherButton").style.display="inline";
	document.getElementById("disagreeButton").style.display="inline";
	document.getElementById("partijenMeeningVraag").style.display="inline";
	document.getElementById("backArrow").style.display="inherit";
	document.getElementById("startButton").style.display="none";
	showQuestion()
}

function openPartyList(){

}

function addPartyVotes(){
	for (let partie = 0; partie < parties.length; partie++) {
				parties[partie].howMuchAgreed = 0;
	}
	for (var subject = 0; subject < subjects.length; subject++) {
		for (var subjectParty = 0; subjectParty < subjects[subject].parties.length; subjectParty++) {
			if (subjects[subject].parties[subjectParty].position === chosenAnswer[subject]) {
				/*let matchedParty = parties.find(function(element){
					console.log('match nu het volgende:');
					console.log (element.name + ' is dat gelijk aan: '+subjects[subject].parties[subjectParty].name);
					return element.name === subjects[subject].parties[subjectParty].name;
				})

				if (matchedParty){
					matchedParty.howMuchAgreed++;
				}*/
				for (var i = 0; i < parties.length; i++) {
					if (parties[i].name === subjects[subject].parties[subjectParty].name) {parties[i].howMuchAgreed++}
				}

			}
		}
	}
	console.log(parties)
	parties.sort(function (a, b) {
		return b.howMuchAgreed - a.howMuchAgreed;
	});
}

var partiesOrdered = [];

var pushedPartyName;

function showResults(){
	addPartyVotes();
	
	document.getElementById("agreeButton").style.display="none";
	document.getElementById("neitherButton").style.display="none";
	document.getElementById("disagreeButton").style.display="none";
	document.getElementById("partijenMeeningVraag").style.display="none";
	document.getElementById("partyResults").style.display="block";
	document.getElementById("h1").innerHTML = "Hier zijn de resultaten van uw keuzes:";
	for (var partie = 0; partie < parties.length; partie++) {
		var createTableSlide = document.createElement("tr");
		var createTableData = document.createElement("td");
		var createTableNumbers = document.createElement("td");
		createTableData.innerHTML = parties[partie].name;
		createTableNumbers.innerHTML = parties[partie].howMuchAgreed;
		document.getElementById("partyResults").appendChild(createTableSlide);
		createTableSlide.appendChild(createTableData);
		createTableSlide.appendChild(createTableNumbers);
		//partiesOrdered.push(parties[partie].name);
	};
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

