

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
		
		
		
		
		

		
};  		