/*window.onscroll=function(){
	var oBox=document.querySelector('.ftop');
	var iHeight = window.innerHeight;
	var iTop = document.body.scrollTop || 
		document.documentElement.scrollTop;
		if(iTop>=100){
			animation(oBox,{opacity:100});
		}

}*/
function mag(){
	var oImgBox=document.querySelector('.mid .ft .p2top .p2topimg');
	var oLeftSpan=document.querySelector('.mid .ft .p2bottom .pp1 span');
	var oRightSpan=document.querySelector('.mid .ft .p2bottom .pp2 span');
	var aLi=oImgBox.getElementsByTagName('li');
	var now=0;
	// console.log(aLi);
		oLeftSpan.onclick=function(){
			animation(oImgBox,{marginLeft:316});
		}
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
}
