var currentTemp = 71;
var button = document.getElementById('setTemperature'); // set button variable to element which is the Set Temperature Button

button.onclick = function () { // when the button is clicked run this function
	var newTemp = document.getElementById('newTemp').value; // get the new temp value
	console.log(newTemp); // logging the new temp value
	var currentTemp = document.getElementById('currentTemp'); // get the curret Temp Element
	currentTemp.innerHTML = newTemp; // updating the current temp element inner html to the new temp

	if(newTemp <= 65) {
		console.log('new temp is less than or equal to 65');
		document.body.style.backgroundColor = 'blue';
    }
	if(newTemp > 65 && newTemp < 85) {
		console.log('new temp is greater than 65 and less than 85');
		document.body.style.backgroundColor = 'yellow';
    }
	if(newTemp >= 85 && newTemp < 95) {
		console.log('new temp is greater than or equal to 85 and less than 95');
		document.body.style.backgroundColor = 'orange';
    }
}                                        
  