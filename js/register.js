var oUserBox = document.querySelector('.user-up');
var oPwdBox = document.querySelector('.user-down');
var aInput = document.querySelectorAll('input');
console.log(oUserBox);
console.log(oPwdBox);
console.log(aInput[0]);
oUser();
function oUser(){
	oUserBox.style.borderColor = '#dfdfdf';
	aInput[0].focus();
	aInput[0].onfocus = function(){
		oUserBox.style.borderColor = '#6999e5';
	}
	aInput[0].onblur = function(){
		oUserBox.style.borderColor = '#dfdfdf';
	}
}

aInput[1].onfocus = function(){
	oPwdBox.style.borderColor = '#6999e5';
}
aInput[1].onblur = function(){
	oPwdBox.style.borderColor = '#dfdfdf';
}