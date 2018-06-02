function rightlist(){
	var oRightBox=document.querySelector('.rightlist');
	var iHeight= window.innerHeight;
	var iTop=document.body.scrollTop ||document.documentElement.scrollTop;
	// console.log(oRightBox);
	oRightBox.onmouseenter=function(){
		animation(oRightBox,{opacity:100});

	}
	// oRightBox.onclick=function(){
		

	// }
	oRightBox.onmouseleave=function(){
		animation(oRightBox,{opacity:70});
	}

}
function nav(){
	var show=false;
window.onscroll=function(){
	var oBox=document.querySelector('.ftop');
	var oNav=document.querySelector('.mid .nav');

	var oMid=document.querySelector('.mid');
	var iHeight = window.innerHeight;
	// var timer=null;
	var iTop = document.body.scrollTop || 
		document.documentElement.scrollTop;
		console.log(iTop)
		if(iTop>=100){
			if(!show){
				animation(oBox,{height:60});
				// animation(oNav,{opacity:50})
				// oMid.style.marginTop='140px';
				show=true;
			}
				
		}else{
			if(show){
				animation(oBox,{height:0});
				// oBox.style.height=0;
				// oMid.style.marginTop='0px'
				// animation(oNav,{opacity:100})
				show=false;
			}
		}
	}
}
nav();
function nulbox(){
	var oCat=document.querySelector('.top .use .cart');
	var oCartBox=document.querySelector('.top .use .cartbox');
		oCat.onmouseenter=function(){
		animation(oCartBox,{opacity:100},false,function(){
			oCartBox.style.display=100;
		})
	}
	
	oCat.onmouseleave=function(){
		animation(oCartBox,{opacity:0})
	}
}
window.onload=function(){
	rightlist();
	nav();
	nulbox()
}
