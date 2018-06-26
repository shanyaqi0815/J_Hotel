

window.onload=function(){ 
           
      
		var Css=document.getElementsByTagName("link");
		var Width=window.screen.availWidth;
		
		if(Width<640){ 
			Css[0].href="css/moblie-index.css";
			Css[1].href='css/moblie-commonality.css';
			Css[2].href="";
			Css[3].href=""
			
		}else{
			Css[0].href="css/pc-commonality.css"
			Css[1].href='css/pc-index.css';
			Css[2].href="";
			Css[3].href=""
		}
		
		var Banner=document.getElementById("banner");
		var Img=Banner.getElementsByTagName("img");
			
		function banner(){
	    	var  i=1;y=-1
			setInterval(function(){
				Img[i].style.display='block';
				i++;
				
				if(i>4){
					i=0
				}
	
			},3000)
			setInterval(function(){
				y++;
				
				if(y>4){
					y=0
				}
				Img[y].style.display='';	
			},3000)
			
		
		
			
		}
		banner()



		function Height() {
			var Left=document.getElementById("left");
			var Rigth=document.getElementById("rigth");
			var x = Rigth.offsetHeight;
			var y = Left.offsetHeight;
			if(Left.offsetHeight<Rigth.offsetHeight){
				Left.style.height=+x+'px'
			}else{
				
				Rigth.style.height=+y+'px'
			}
			
		}
		
		Height()
		
		
		
		
		
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(121.479119,31.240144);
		var marker = new BMap.Marker(point);  // 创建标注
		map.addOverlay(marker);              // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		map.centerAndZoom(point, 15);
		
		
	 var navigationControl = new BMap.NavigationControl({
	    // 靠左上角位置
	    anchor: BMAP_ANCHOR_TOP_LEFT,
	    // LARGE类型
	    type: BMAP_NAVIGATION_CONTROL_LARGE,
	    // 启用显示定位
	    enableGeolocation: true
	  });
	  map.addControl(navigationControl);
		
};  		