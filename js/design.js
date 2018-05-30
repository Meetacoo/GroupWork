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
		if(iTop>1100 || iTop<2000){
			animation(oBox,{backgroundColor:'#450716'})
		}
	}
}
function mag(){
	var oImgBox=document.querySelector('.mid .ft .p2top .p2topimg');
	var oLeftSpan=document.querySelector('.mid .ft .p2bottom .pp1 span');
	var oRightSpan=document.querySelector('.mid .ft .p2bottom .pp2 span');
	var aLi=oImgBox.getElementsByTagName('li');
	// var now=0;
		// // console.log(aLi);
		// oLeftSpan.onclick=function(){
		// 		now++;
		// 		if(now<=2){
		// 			animation(oImgBox,{marginLeft:316*now});
		// 		}
		// }
}
function nulbox(){
	var oCat=document.querySelector('.top .use .cart');
	var oCartBox=document.querySelector('.top .use .cart .cartbox');
		oCat.onmouseenter=function(){
		animation(oCartBox,{opacity:100})
	}
	oCat.onmouseleave=function(){
		animation(oCartBox,{opacity:0})
	}
}
window.onload=function(){
	mag();
	nulbox();
	nav();
}
