 /*img preview*/
function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}
 var x=20;
 var y=20;
 var imgs=$('mj-page-review').getElementsByTagName('li');
 console.log(imgs.length);
 for(var i=0;i<imgs.length;i++){
 		imgs[i].id=i;
	      imgs[i].onmouseover=function(){
	      	imgchange(this.id);
	      }
	      imgs[i].onmouseout=function(){
	      	reviewcancle();
	      }
      }
      imgchange=function(curIndex){
      	var e;
          e=e||window.event;
          var mousePos=mouseCoords(e);
          console.log(e.pageX);
          console.log(e.pageY);
          console.log(curIndex);
          var parent=document.getElementById('mj-page-review');
          var div=document.createElement('div');
          div.setAttribute("id","mj-img-tip");
          parent.appendChild(div);
          var img=document.createElement('img');
          img.setAttribute("src","pimages/P_0"+curIndex+".jpg");
          div.appendChild(img);
           document.getElementById('mj-img-tip').style.position="absolute";
           document.getElementById('mj-img-tip').style.width="200px";
           document.getElementById('mj-img-tip').style.height="200px";
           document.getElementById('mj-img-tip').style.left=(e.pageX-450)+"px";
           document.getElementById('mj-img-tip').style.top=(e.pageY)+"px";
           document.getElementById('mj-img-tip').style.display="block";
      }
        reviewcancle=function(){
        	var parent=document.getElementById('mj-page-review');
        	var div=document.getElementById('mj-img-tip');
        	parent.removeChild(div);

        
 }
function mouseCoords(e){
    if(e.pageX||e.pageY){
        return {
            x:e.clientX+document.body.scrollLeft-document.body.clientLeft,
            y:e.clientX+document.body.scrollTop-document.body.clientTop
        };
    }
}
