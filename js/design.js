window.onscroll=function(){
	var oBox=document.querySelector('.ftop');
	var iHeight = window.innerHeight;
	var iTop = document.body.scrollTop || 
		document.documentElement.scrollTop;
		if(iTop>100){
			animation(oBox,{height:60});
		}

}