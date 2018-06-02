// 张燕的js
(function(w){
	function gouwuche(){
		var oChe = document.querySelector('.tops .gouwu i');
		var oA = document.querySelector('.tops .gouwu a');
		var oKong = document.querySelector('.tops .konggouwu');
		console.log(oChe);
		console.log(oA);
		console.log(oKong);
		var timer = null;
		oChe.onmouseenter = function(){
			clearTimeout(timer);
			oKong.style.display = 'block';
			oA.className = 'active';
		}
		oChe.onmouseleave = function(){
			timer=setTimeout(function(){
				oKong.style.display = 'none';
				oA.className = '';				
			},300)
		}
		oKong.onmouseenter = function(){
			clearTimeout(timer);
			oKong.style.display = 'block';
			oA.className = 'active';
		}
		oKong.onmouseleave = function(){
			timer=setTimeout(function(){
				oKong.style.display = 'none';
				oA.className = '';
			},300)			
		}
	}
	w.gouwuche = gouwuche;
})(window);
gouwuche();