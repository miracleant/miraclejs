/*marquee set*/
// window.onload(){}
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
     var play=setTimeout("change()",1000);
    function left(){
    		clearTimeout(play);
    		if(i==0){
    			i=3;
    		}else{
    			i--;
    		}
    		// console.log(i);
    		document.getElementById('image').src=imgArr[i].src;
    		var t=setTimeout("change()",5000);
    }
    function right(){
    		clearTimeout(play);
    		if(i==3){
    			i=0;
    		}else{
    			i++;
    		}
    		// console.log(i);
    		document.getElementById('image').src=imgArr[i].src;
    		var t=setTimeout("change()",5000);
    }
    function change(){
    		if(i==3){
    			i=0;
    		}else{
    			i++;
    		}
    		// console.log(i);
    		document.getElementById('image').src=imgArr[i].src;
    		play=setTimeout("change()",1000);
    }
   /*circle play end*/


/*list-menu set*/
function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}
var index=0;
var timer=null;
var lis=document.getElementById('mj-list-tit');
var divs=document.getElementById('mj-list-con');
    if(lis.length!==divs.length) return;
    for(var i=0;i<lis.length;i++){
        lis[i].id=i;
        lis[i].onmouseover=function{
            if(timer){
                clearTimeout(timer);
                timer=null;
            }
            timer=window.setTimeout(function{
                for(var j=0;j<lis.length;j++){
                    lis[j].className='';
                    divs[j].style.display="none";
                }
                lis[this.id].className='select';
                divs[this.id].style.display='block';
            },500);
        }
    }


     // 遍历所有的页签
  /*for(var i=0;i<lis.length;i++){
    lis[i].id=i;
    lis[i].onmouseover=function(){
      // 用that这个变量来引用当前滑过的li
      var that=this;
      // 如果存在准备执行的定时器，立刻清除，只有当前停留时间大于500ms时才开始执行
      if(timer){
        clearTimeout(timer);
        timer=null;
      }
      // 延迟半秒执行
      timer=window.setTimeout(function(){
        for(var j=0;j<lis.length;j++){
          lis[j].className='';
          divs[j].style.display='none';
        }
        lis[that.id].className='select';
        divs[that.id].style.display='block';
      },500);
    }
  }*/