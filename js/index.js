hjfScroll();
hjfTopNav();
hjfCarousel();
function hjfScroll(){
	var show = false;
	window.onscroll = window.onload = function(){
		var oUpNav = document.querySelector('.s-nav');
		var oDownNav = document.querySelector('.s-nav2');
		// var oDownNavA = document.querySelector('.s-nav2 .content ul li a');
		var oCenterad = document.getElementById('carousel');
		var iHeight = window.innerHeight;
		var iScroll = document.documentElement.scrollTop || document.body.scrollTop;
		var iTarget = document.documentElement.scrollTop;
		console.log(oUpNav);
		if (iScroll >= 100) {
			if(!show){
				animation(oDownNav,{height:60},false,function(){
					animation(oUpNav,{height:0})
				});
				show = true;
				oUpNav.style.height = 0+'px';
				// console.log(oUpNav.offsetTop);
			}
		} else if(iScroll <= 100) {
			if(show){
				// oDownNav.style.height = '0px';
				oCenterad.style.marginTop = '0px';
				show = false;
				// animation(oUpNav,{height:100});
				animation(oDownNav,{height:0},false);
				animation(oUpNav,{height:90})
			}
		}
	}
}
function hjfTopNav(){
	var oCarfNum = document.querySelector('.top .carf a span');
	var oCarfA = document.querySelectorAll('.top .carf a');
	var oCarf = document.querySelector('.top .carf a .fa-shopping-cart');
	var oCarfBox = document.querySelector('.top .carf .carf-box');
	var timer = null;
	console.log(oCarfA);
	oCarfNum.onmouseenter = function(){
		// oCarf.className = 'active';
		// oCarf.style.color = '#fff';
		show();
	}
	oCarfNum.onmouseleave = function(){
		blank();
	}
	oCarf.onmouseenter = function(){
		// oCarf.style.color = '#fff';
		show();
	}
	oCarf.onmouseleave = function(){
		blank();
	}
	function show(){
		clearTimeout(timer);
		oCarf.style.color = '#fff';
		oCarfBox.style.display = 'block';	
		// animation(oCarfBox,{display:'block'});
	}
	function blank(){
		// clearTimeout(timer);
		timer = setTimeout(function(){
			oCarf.style.color = '#9a9a9a';
			oCarfBox.style.display = 'none';	
		},500);
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
