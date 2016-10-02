/*marquee set*/
var area=document.getElementById('mj-marquee');
var a=document.getElementById('mj-content-1');
var b=document.getElementById('mj-content-2');
var speed = 50;
area.scrollTop = 0;
	b.innerHTML=a.innerHTML;
	function scrollUp(){
		if(area.scrollTop>=a.scrollHeight){
			area.scrollTop=0
		}else{
			area.scrollTop++;
		}
	}
	var myScroll=setInterval("scrollUp()",speed);
area.onmouseover=function(){
	clearInterval(myScroll);
}
area.onmouseout=function(){
	 myScroll=setInterval("scrollUp()",speed);
}
/*	marquee set end*/


function showlist(list){
	if(document.getElementById('mj-list-show').style.display=="none"){
		document.getElementById('mj-list-show').style.display="block";
		list.getElementsByTagName('span')[0].innerText="-";
	}else{
		document.getElementById('mj-list-show').style.display="none";
		list.getElementsByTagName('span')[0].innerText="+";
	}
}	

/*circle play*/
var imgArr=new Array();
var objArr=new Array("images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg");
    for(var i=0;i<objArr.length;i++){
    		imgArr[i]=new Image();
    		imgArr[i].src=objArr[i];
    }
    	var i=0;
        var t=0;
     var play=setTimeout("change()",2000);
    function left(){
    		clearTimeout(play);
    		if(i==0){
    			i=3;
    		}else{
    			i--;
    		}
    		 

    		document.getElementById('image').src=imgArr[i].src;
    		if(t){

        }else{
          setTimeout("change()",8000);  
          t++;  
        }
        // console.log(i);
    }
    function right(){
    		clearTimeout(play);
    		if(i==3){
    			i=0;
    		}else{
    			i++;
    		}
    		document.getElementById('image').src=imgArr[i].src;
        if(t){

        }else{
          setTimeout("change()",8000);  
          t++;  
        }
    }
    function change(){
    		if(i==3){
    			i=0;
    		}else{
    			i++;
    		}
        document.getElementById('image').src=imgArr[i].src;
        play=setTimeout("change()",2000);
        t=0;
    }
   /*circle play end*/


