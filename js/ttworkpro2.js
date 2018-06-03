
;(function(w){
	function wyyrightlist(){
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
w.wyyrightlist=wyyrightlist;
})(window);
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
};

(function(w){
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
w.wyynav=wyynav;
wyynav();
})(window);
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

wyyrightlist();
wyynav();
wyynulbox()