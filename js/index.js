hjfScroll();
hjfTopNav();
hjfCarousel();
hjfPhoneContent();
function hjfScroll(){
	var show = false;
	window.onscroll = window.onload = function(){
		var oUpNav = document.querySelector('.s-nav');
		var oDownNav = document.querySelector('.s-nav2');
		// var oDownNavA = document.querySelector('.s-nav2 .content ul li a');
		var oCenterad = document.getElementById('carousel');
		var oPhoneBox = document.querySelector('.phone-content');
		var iHeight = window.innerHeight;
		var iScroll = document.documentElement.scrollTop || document.body.scrollTop;
		var iTarget = document.documentElement.scrollTop;
		oPhoneBox.offsetTop = oPhoneBox.offsetTop - iTarget;
		// console.log(oPhoneBox.offsetTop);
		var timer = null;
		if (iScroll >= 100) {
			if(!show){
				/*animation(oDownNav,{height:60},false,function(){
					animation(oUpNav,{height:0},false);	
				});*/
				timer = setTimeout(function(){
					animation(oUpNav,{height:0},false);
				},100); 
					oPhoneBox.style.top = '0px';
					animation(oDownNav,{height:60},false);
				// oUpNav.style.height = '0px';	
				animation(oPhoneBox,{top:60,position:'fixed'})
				// animation(oPhoneBox,{top:20,position:'fixed'},false,function(){
				// 	animation(oPhoneBox,{top:60,position:'fixed'})
				// });
				show = true;
				oUpNav.style.height = 0+'px';
			}
		} else if(iScroll <= 100) {
			if(show){
				oCenterad.style.marginTop = '0px';
				show = false;
				// animation(oDownNav,{height:0},false);
				oDownNav.style.height = '0px';
				// animation(oUpNav,{height:90},false,function(){
				// 	animation(oPhoneBox,{top:190,position:'relative'});
				// });
				// animation(oUpNav,{height:90},false);
				oUpNav.style.height = '90px';
				animation(oPhoneBox,{top:190,position:'relative'});
				// oPhoneBox.style.top = '190px';
				
			}
		}
		
		
	}
}
function hjfTopNav(){
	var oCarfNum = document.querySelector('.top .carf a span');
	var oCarfNum2 = document.querySelector('.s-nav2 .carf a span');
	var oDownNav = document.querySelector('.s-nav2 .down .after');
	var oDownCarfBox = document.querySelector('.s-nav2 .carf');
	var oCarf = document.querySelector('.top .carf a .fa-shopping-cart');
	var oCarf2 = document.querySelector('.s-nav2 .carf a .fa-shopping-cart');
	var oCarfBox = document.querySelector('.top .carf .carf-box');
	var oCarfBox2 = document.querySelector('.s-nav2 .carf .carf-box');
	var timer = null;
	oCarfNum.onmouseenter = function(){
		show();
	}
	oCarfNum.onmouseleave = function(){
		blank();
	}
	oCarf.onmouseenter = function(){
		show();
	}
	oCarf.onmouseleave = function(){
		blank();
	}
	oCarfNum2.onmouseenter = function(){
		show2();
	}
	oCarfNum2.onmouseleave = function(){
		blank2();
	}
	oCarf2.onmouseenter = function(){
		show2();
	}
	oCarf2.onmouseleave = function(){
		blank2();
	}
	oCarfBox.onmouseenter = function(){
		clearTimeout(timer);
	}
	oCarfBox.onmouseleave = function(){
		blank();
	}
	oCarfBox2.onmouseenter = function(){
		clearTimeout(timer);
	}
	oCarfBox2.onmouseleave = function(){
		blank2();
	}
	function show(){
		clearTimeout(timer);
		oCarf.style.color = '#fff';
		oCarfBox.style.display = 'block';	
	}
	function blank(){
		timer = setTimeout(function(){
			oCarf.style.color = '#9a9a9a';
			oCarfBox.style.display = 'none';
		},200);
	}
	function show2(){
		clearTimeout(timer);
		oCarf2.style.color = '#666';
		oCarfBox2.style.display = 'block';
		oDownCarfBox.style.top = '-2px';
		oDownNav.style.paddingTop = '2px';
	}
	function blank2(){
		timer = setTimeout(function(){
			oCarf2.style.color = '#9a9a9a';
			oCarfBox2.style.display = 'none';
			oDownCarfBox.style.top = '0px';
			oDownNav.style.paddingTop = '0px';
		},200);
	}
}
function hjfPhoneContent(){
	var oPhone = document.querySelector('.s-nav .up .before .phone');
	var oPhone2 = document.querySelector('.s-nav2 .down .after .phone');
	var oPhoneBox = document.querySelector('.phone-content');
	var oPhoneUl = document.querySelector('.phone-content .after');
	var timer = null;
	// console.log(oPhoneBox);
	clearTimeout(timer);
	animation(oPhoneBox,{opacity:100},false,function(){

		oPhone.onmouseenter = function(){
			animation(oPhoneBox,{height:320},false);
			// oPhoneBox.style.display = 'block';
		}
	});
	oPhone.onmouseenter = function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			animation(oPhoneBox,{height:320,opacity:100},false);
		},400)
		console.log('aaa');
	}
	oPhone.onmouseleave = function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			animation(oPhoneBox,{height:0},false);
		},400);
	}
	oPhone2.onmouseenter = function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			animation(oPhoneBox,{height:320,opacity:100},false);
		},400)
		console.log('aaa');
	}
	oPhone2.onmouseleave = function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			animation(oPhoneBox,{height:0},false);
		},400);
	}
	oPhoneBox.onmouseenter = function(){
		clearTimeout(timer);
	}
	oPhoneBox.onmouseleave = function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			animation(oPhoneBox,{height:0},false);
		},400);
		// oDownNav.style.height = '0px';
		// animation(oUpNav,{height:0},false);
		// oUpNav.style.height = '90px';
		// oPhoneBox.style.top = '190px';
		console.log('aaa');
	}
	function loadData(index){
		oPhoneUl.innerHTML = '';
		var aDatas = hjfNavContent[index];
		if (!aDatas) {
			return;
		}
		for (var i = 0; i < aDatas.length; i++) {
			var oLi = document.createElement('li');
			var oImage = document.createElement('img');
			var oP = document.createElement('p');

			oLi.className = 'img-box';
			oImage.src = aDatas[i].img;
			oP.innerHTML = aDatas[i].name;
			oPhoneUl.appendChild(oLi);
			oLi.appendChild(oImage);
			oLi.appendChild(oP);
		}
	}
}
function hjfCarousel() {
	new Carousel({
		id:'carousel',
		aImg:['images/centerad.jpg',
			'images/centerad2.jpg',
			'images/centerad3.jpg'
		],
		width:1226,
		height:501,
		playDuration:3000
	});
}
