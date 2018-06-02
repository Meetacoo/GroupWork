(function(w){
	var oUserBox = document.querySelector('.user-up');
	var oUserBoxA = document.querySelector('.main .user-up a');
	var oPwdBox = document.querySelector('.user-down');
	var oPwdBoxA = document.querySelector('.main .user-down a');
	var aInput = document.querySelectorAll('input');
	var oCheckPhone = document.querySelector('.main .user-up .checkphone');
	var oCheckPwd = document.querySelector('.main .user-down .checkpwd');
	var oMask = document.querySelector('.mask');
	var oEnter = document.querySelector('.enter');
	var oEnterI = document.querySelector('.check a span i');
	console.log(oCheckPhone);
	console.log(oCheckPwd);
	console.log(aInput[0]);

	var checkUser = false;
	var checkPwd = false;
	
	function oUser(){
		oUserBox.style.borderColor = '#dfdfdf';
		aInput[0].focus();
		aInput[0].onfocus = function(){
			oUserBox.style.borderColor = '#6999e5';
			oUserBoxA.className = 'active';
		}
		aInput[0].onblur = function(){
			oUserBox.style.borderColor = '#dfdfdf';
			oCheckPhone.style.display = 'none';
			oUserBoxA.className = '';
			var sVal = aInput[0].value;
			var reg1 = /^\s+$/;
			var reg2 = /^1[35789]\d{9}$/;
			if(sVal == ''){
				oCheckPhone.style.display = 'none';
				animation(oCheckPhone,{opacity:0});
				checkUser = false;
			}
			else if(reg1.test(sVal)|| !reg2.test(sVal)){
				oCheckPhone.style.display = 'block';
				oUserBox.style.borderColor = '#d16d62';
				animation(oCheckPhone,{opacity:100});
				checkUser = false;
			}
			else{
				oCheckPhone.style.display = 'none';
				animation(oCheckPhone,{opacity:0});
				checkUser = true;
			}
		}
	}
	function oPwd(){
		aInput[1].onfocus = function(){
			oPwdBox.style.borderColor = '#6999e5';
			oPwdBoxA.className = 'active';
			oCheckPwd.style.display = 'none';
			checkPwd = false;
		}
		aInput[1].onblur = function(){
			oPwdBox.style.borderColor = '#dfdfdf';
			oPwdBoxA.className = '';
			var sVal = aInput[1].value;
			var reg1 = /^.{6,14}$/;
			/*
			if(reg1.test(sVal)){
				oCheckPwd.style.display = 'none';
				animation(oCheckPwd,{opacity:0});
				checkPwd = true;
			}
			else{
				oPwdBox.style.borderColor = '#d16d62';
				oCheckPwd.style.display = 'block';
				animation(oPwdBox,{opacity:100,left:10},false,function(){
					animation(oPwdBox,{opacity:100,left:-10},false,function(){
						animation(oPwdBox,{opacity:100,left:10},false,function(){
							animation(oPwdBox,{opacity:100,left:0})
						});
					});
				});
				checkPwd = false;
			}
			if(sVal == ''){
				oCheckPwd.style.display = 'block';
				animation(oCheckPwd,{opacity:100});
				checkPwd = false;
			}else{
				oCheckPwd.style.display = 'none';
				animation(oCheckPwd,{opacity:0});
				animation(oPwdBox,{borderColor:'#'});
				checkPwd = true;
			}
			*/
			/*
			if(sVal == ''){
				// oCheckPwd.style.display = 'block';
				animation(oCheckPwd,{opacity:100});
				checkPwd = false;
			}
			else if(reg1.test(sVal)){
				oCheckPwd.style.display = 'none';
				animation(oCheckPwd,{opacity:0});
				checkPwd = true;
			}
			else{
				oPwdBox.style.borderColor = '#d16d62';
				oCheckPwd.style.display = 'block';
				animation(oPwdBox,{opacity:100,left:10},false,function(){
					animation(oPwdBox,{opacity:100,left:-10},false,function(){
						animation(oPwdBox,{opacity:100,left:10},false,function(){
							animation(oPwdBox,{opacity:100,left:0})
						});
					});
				});
				checkPwd = false;
			}
			*/
			if(sVal == ''){
				// oCheckPwd.style.display = 'block';
				animation(oCheckPwd,{opacity:100});
				checkPwd = false;
			}
			else if(!reg1.test(sVal)){
				oCheckPwd.style.display = 'block';
				oPwdBox.style.borderColor = '#d16d62';
				animation(oPwdBox,{opacity:100,left:10},false,function(){
					animation(oPwdBox,{opacity:100,left:-10},false,function(){
						animation(oPwdBox,{opacity:100,left:10},false,function(){
							animation(oPwdBox,{opacity:100,left:0})
						});
					});
				});
				checkPwd = false;
			}
			else{
				oCheckPwd.style.display = 'none';
				animation(oCheckPwd,{opacity:0});
				checkPwd = true;
				oMask.style.display = 'none';
			}
		}
	}
	// oMask.onclick = function(){
	// 	if(checkPwd&&checkUser){
	// 		// oEnter.style.display = 'block';
	// 		oMask.style.display = 'none';
	// 	}
	// }
	
	function oEnI(){
		oEnterI.onclick = function(){
			if (oEnterI.className == 'fas fa-check-circle') {
				oEnterI.className = 'fas fa-check-circle active';
			}else{
				oEnterI.className = 'fas fa-check-circle';
			}
			
		}
	}
	w.oUser = oUser;
	w.oPwd = oPwd;
	w.oEnI = oEnI;
})(window)
oUser();
oPwd();
oEnI();