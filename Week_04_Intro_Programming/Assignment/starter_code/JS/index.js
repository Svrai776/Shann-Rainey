var linkElements = document.getElementsByTagName('a');

for (var i=0; i<linkElements.length; i++){
	linkElements[i].onclick = function(event){
	event.preventdefault();

	}
}

//toggle between readmore and readless
var readMoreElement = document.getElementsByClassName('readmore');
var readLessElement = document.getElementsByClassName('readless');
var showThisElement = document.getElementById('show-this-on-click');



readMoreElement[0].onclick = function() { //Array
	readMoreElement[0].style.display = 'none'; //array
	readLessElement[0].style.display = 'block'; //object

};

readMoreElement[0].onclick = function() {
	readMoreElement[0].style.display = "none";

}

readLess[0].onclick = function() {
	readMoreElement[0].style.display = 'block';
	readMoreElement[0].style.display = 'none';
	showThisElement.style.display = 'none';
}

//show learn more text

var learnMoreElement = document.getElementsByClassName("learnmore");
var learnMoreTextElement = document.getElementById("learnmoretext");

learnMoreElement[0].onclick = function(event){
	learnMoreElement[0].style.display= "none";
	learnMoreTextElement.style.display = "block";
	event.preventDefault();
}






