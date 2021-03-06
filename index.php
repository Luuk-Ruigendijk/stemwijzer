<!DOCTYPE html>
<html>
	<head>
		<title>Stemwijzer</title>
		<link rel="stylesheet" type="text/css" href="main.css">
	</head>
	<body>
		<button style="display: none" id="backArrow" onclick="previousQuestion()">&larr;</button>
		<div id="menu">

			<h1 id="h1">Test uw politieke voorkeur aan de hand van 30 stellingen</h1>
			<p id="p1"></p>
			<button style="display: none;" id="agreeButton" onclick="agree()">Eens</button>
			<button style="display: none;" id="neitherButton" onclick="neither()">Geen van beide</button>
			<button style="display: none;" id="disagreeButton" onclick="disagree()">Oneens</button>
			<button id="startButton" onclick="start()">Start</button>
			<table style="display: none;" id="topThree"></table>
			<table id="partyResults" style="display: none;">
			</table>
			<div style="display: none;" id="partijenMeeningVraag">
				<p>Wat vinden de partijen?</p>
				<table id="partijenMeening"></table>

			</div>

			
		</div>
		<script type="text/javascript" src="objects.js"></script>
		<script type="text/javascript" src="script.js"></script>
	</body>
</html>