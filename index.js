$(document).ready(function() {

	var planets = [
	  ['Pluto', 0.06],
	  ['Neptune', 1.148],
	  ['Uranus', 0.917],
	  ['Saturn', 1.139],
	  ['Jupiter', 2.640],
	  ['Mars', 0.3895],
	  ['Moon', 0.1655],
	  ['Earth', 1],
	  ['Venus', 0.9032],
	  ['Mercury', 0.377],
	  ['Sun', 27.9]
	  ];


planets.reverse();

$.each(planets, function(index,weightPlanet) {

	$('<option>').val(weightPlanet[1]).text(weightPlanet[0]).appendTo('#selectbasic');

});
function doesAllTheMath() {
var select = $('#selectbasic');
var weightBox = $('#Weight').val();

var selectElement = document.getElementById('selectbasic');

var weightSelected = selectElement.options[selectElement.selectedIndex].value;
var planetSelected = selectElement.options[selectElement.selectedIndex].text;
var finalWeight = weightSelected * weightBox;
var lastMessage = $('#answer');
var answer = "On planet  " + planetSelected +", your weight is " + finalWeight + ".";
$('#answer').html(answer);
}


$('#Bang').on("click" , function(){
doesAllTheMath();


});

});
