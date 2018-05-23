var show = false;
window.onscroll = window.onload = function(){
	var oDownNav = document.querySelector('.s-nav .content .down');
	var oDownNavAfter = document.querySelectorAll('.s-nav .content .down .after li');
	var oUpNav = document.querySelector('.s-nav .content .up');
	var oCenterad = document.getElementById('centerad');
	var iHeight = window.innerHeight;
	var iScroll = document.documentElement.scrollTop || document.body.scrollTop;
	var iTarget = document.documentElement.scrollTop;
	console.log(oDownNavAfter);
	if (iScroll >= 100) {
		if(!show){
			animation(oUpNav,{height:0});
			animation(oDownNav,{height:60},false,function(){
				for (var i = 0; i < oDownNavAfter.length; i++) {
					animation(oDownNavAfter[i],{display:'block'},false)
				}
				
			});
			
			show = true;
			oUpNav.style.height = 0+'px';
			// console.log(oUpNav.offsetTop);
		}
	} else {
		if(show){
			oDownNav.style.height = '0px';
			oCenterad.style.marginTop = '0px';
			show = false;
			animation(oUpNav,{height:100});
		}
	}
}