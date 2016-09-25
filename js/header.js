
function menushow(li){
	var subMenu=li.getElementsByTagName('ul')[0];
	subMenu.style.display="block";
}

function menuhidden(li){
	var subMenu=li.getElementsByTagName('ul')[0];
	subMenu.style.display="none";
}

function loginshow(){
	document.getElementById('mj-login').style.display="block";
	document.getElementById('mj-hidden').style.display="block";
}

function loginclose(){
	document.getElementById('mj-login').style.display="none";
	document.getElementById('mj-hidden').style.display="none";
}

function check(){
	var user=document.getElementById("mj-login-user");
	var pasw=document.getElementById("mj-login-pasw");
	if(user.value==""){
		alert("username or password error!");
		user.focus();
		return false;
	}
	else if(pasw.value.lenght<6){
		alert("username or password error!");	
		pasw.focus();
		return false;
	}else{
		document.getElementById('mj-login').style.display="none";
		document.getElementById('mj-hidden').style.display="none";
		alert("login success!");
		return true;
	}
}

function pagechange(){
	self.location='register.html';
}

