;(function(w){
	function wyynav(){
	var show=false;  
window.onscroll=function(){
	var oBox=document.querySelector('.ftop');
	var oNav=document.querySelector('.mid .nav');

	var oMid=document.querySelector('.mid');
	var iHeight = window.innerHeight;
	// var timer=null;
	var iTop = document.body.scrollTop || 
		document.documentElement.scrollTop;
		// console.log(iTop)
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
w.wyynav=wyynav;
wyynav();
})(window);
(function(w){
	function wyyrightlist(){
	var oRightBox=document.querySelector('.rightlist');
	var iHeight= window.innerHeight;
	var iTop=document.body.scrollTop ||document.documentElement.scrollTop;

	// console.log(oRightBox);
	oRightBox.onmouseenter=function(){
		animation(oRightBox,{opacity:100});

	}
	oRightBox.onclick=function(){
		// animation(iTop,)
		// iTop = innerHeight;
		// oRightBox.offsetTop = oRightBox.offsetTop - iTop + "px";
		//console.log(oRightBox.offsetTop);
		// console.log(document.documentElement.scrollTop == window.scrollY);
		//document.documentElement.scrollTop = 0;
		//console.log($('window'));
		// $('window').animate({
		// 	scrollY:'0',
		// })


	}
	oRightBox.onmouseleave=function(){
		animation(oRightBox,{opacity:70});
	}

}
w.wyyrightlist=wyyrightlist
})(window);

// function mag(){
// 	var oImgBox=document.querySelector('.mid .ft .p2top .p2topimg');
// 	var oLeftSpan=document.querySelector('.mid .ft .p2bottom .pp1 span');
// 	var oRightSpan=document.querySelector('.mid .ft .p2bottom .pp2 span');
// 	var aLi=oImgBox.getElementsByTagName('li');
// 	var timer=null;
// 	// var now=0;
// 		// // console.log(aLi);
// 		// oLeftSpan.onclick=function(){
// 		// 		now++;
// 		// 		if(now<=2){
// 		// 			animation(oImgBox,{marginLeft:316*now});
// 		// 		}
// 		// }
// 		// for(var i=0;i<aLi.length;i++){

// 		// }
// 		// console.log(oImgBox.offsetLeft)
// }

(function(w){
	function wyynulbox(){
	var oCat=document.querySelector('.top .use .cart');
	var oCartBox=document.querySelector('.top .use .cartbox');
	// var oShopBox=document.querySelector('.top .use .cartbox')
	var timer=null;
	oCat.onmouseenter=function(){
		// clearTimeout(timer);
		oCartBox.style.display='block';
		animation(oCartBox,{opacity:100})
		
	}
	
	// oCat.onmouseleave=function(){
	// 	clearTimeout(timer);
	// 	timer=setTimeout(function(){
	// 		oCartBox.style.opacity=0;
	// 	},300);

	// }
	oCartBox.onmouseleave=function(){
		// timer=setTimeout(function(){
		oCartBox.style.opacity=0;
		oCartBox.style.display='none';
	// },500)
	}
	// oCat.onmouseleave=function(){
	// 	clearTimeout(timer)
	// 	timer=setTimeout(function(){
	// 		oCartBox.style.opacity=0;
	// 		// oCartBox.style.display='none';
	// 	},300)
	// }
	oCartBox.onmouseenter=function(){
		clearTimeout(timer);
		oCartBox.style.opacity=100;
		oCartBox.style.display='block';
	}
	oCat.onmouseleave=function(){
		// timer=setTimeout(function(){
		timer=setTimeout(function(){
		oCartBox.style.opacity=0;
		oCartBox.style.display='none';
	},500)
	// },300)

	}
}
	w.wyynulbox=wyynulbox;
})(window);
(function(w){
	function wyyshow(){
		var oImgBox=document.querySelector('.mid .ft .p2top .p2topimg');
		var oLeftSpan=document.querySelectorAll('.mid .ft .p2bottom .pp1 span');
		// var oRightSpan=document.querySelector('.mid .ft .p2bottom .pp1 span');
		var aLi=oImgBox.getElementsByTagName('li');
		// console.log(oRightSpan);
		var now=0;
		var l=oImgBox.offsetLeft;
		var r = oImgBox.left;
		

		oLeftSpan[0].onclick=function(){
			// console.log(l)
			// console.log(l)
			if(l<632){
				now++;
				if(now<3){
					animation(oImgBox,{marginLeft:now*316});
					// console.log('now',now)
					// console.log('marginLeft',oImgBox.style.marginLeft)
				}
				
			}
		}
		oLeftSpan[1].onclick=function(){
		// 	if(l>0){
		// 		now++;
		// 		if(now>6){
		// 			animation(oImgBox,{marginRight:now*-316})
		// 		}
		// 	}
		// }
		if(l<632){
				
				if(now>-5){
					now--;
					animation(oImgBox,{marginLeft:now*316})
					// console.log('now',now)
					// console.log('marginLeft',oImgBox.style.marginLeft)
				}

				// else if(now=-5){
				// 	animation(oImgBox,{marginLeft:-1263})
				// }
				// else{
				// 	oImgBox.style.marginLeft = '-1579px';
				// }
			}

				// console.log(l)
		}
	}
	w.wyyshow=wyyshow;
})(window);
wyyshow();
wyynulbox();
wyynav();
wyyrightlist()
