var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/t1.jpg') {
      myImage.setAttribute('src', 'images/t2.jpg');
    } else {
      myImage.setAttribute('src', 'images/t1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'A good boy, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContennt = 'Mozilla is cool,' + storeName;
}

myButton.onclick = function(){
	setUserName();
}
