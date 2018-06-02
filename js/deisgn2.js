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
			console.log(l)
			// console.log(l)
			if(l<632){
				now++;
				if(now<3){
					animation(oImgBox,{marginLeft:now*316});
					console.log('now',now)
					console.log('marginLeft',oImgBox.style.marginLeft)
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

				console.log(l)
		}
	}
	w.wyyshow=wyyshow;
})(window)
wyyshow();