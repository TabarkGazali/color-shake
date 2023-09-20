
"use strict";

var buttonNode		// listen for clicks
var rgbNode			// the element in the DOM we will set to "rgb(10,23,45);"
var shakeNode;		// if on mobile, show user shaking is an option

document.addEventListener("deviceready", onDeviceReady, false);

function initialize() {

	console.log("in initialize")

	buttonNode			= document.getElementById('buttonId')
	rgbNode 			= document.getElementById('rgbId')

	buttonNode.addEventListener('click', changeColor, false)

	changeColor()
}
function onDeviceReady() {
	shakeNode = document.getElementById('shakeId');
	if (typeof shake !== 'undefined') {
		shakeNode.innerHTML = "or you can shake me!"
		shake.startWatch(onShake, 30, onShakeError);
	}
}
function changeColor() {
	var r = randomColorComponent()
	var g = randomColorComponent()
	var b = randomColorComponent()

	var rgbString = "rgb(" + r + "," + g + "," + b + ")"
	console.log(rgbString)

	rgbNode.innerHTML = rgbString
	document.body.style.backgroundColor = rgbString
}

function randomColorComponent() {
	return Math.floor(Math.random() * 256) //make a random int from 0 - 255
}


var onShake = function() {
	changeColor();
}

var onShakeError = function() {
	alert("onShakeError occurred");
}