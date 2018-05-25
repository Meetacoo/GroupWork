/*window.onscroll=function(){
	var oBox=document.querySelector('.ftop');
	var iHeight = window.innerHeight;
	var iTop = document.body.scrollTop || 
		document.documentElement.scrollTop;
		if(iTop>=100){
			animation(oBox,{opacity:100});
		}

}*/

window.onload=function(){
	var oCat=document.getElementById('carrt');
	var oCartBox=document.querySelector('.top .use .cart .cartbox');
	var oScartBox=document.querySelector('.top .use .cart .scartbox');
	/*console.log(oCartBox)*/
	oCat.onmouseenter=function(){
		animation(oCartBox,{opacity:100})
		animation(oScartBox,{opacity:100})
	}
	oCat.onmouseleave=function(){
		animation(oCartBox,{opacity:0})
		animation(oScartBox,{opacity:0})
	}
}
