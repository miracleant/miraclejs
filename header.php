<!DOCTYPE html>
<html>
<head>
	<title>miraclejs</title>
	<link rel="stylesheet" type="text/css" href="css/header.css">
</head>
<body>
	<header>
		<div class="mj-header-logo">miraclejs</div>
		<ul>
			<li><a href="">header</a></li>
			<li><a href="">sidebar</a></li>
			<li onmouseover="menushow(this)" onmouseout="menuhidden(this)"><a href="">content</a>
				<ul>
					<li><a href="">circleplay</a></li>
					<li><a href="">marquee</a></li>
					<li><a href="">listmenu</a></li>
				</ul>
			</li>
			<li><a href="">footer</a></li>
		</ul>
		<div class="mj-header-login" onclick="loginshow()">login</div>
	</header>
		<div class="mj-login" id="mj-login">
			<center><div class="mj-login-tilte">welcom login</div></center><span onclick="loginclose()">X</span>
			<div class="mj-login-content">
				<div class="mj-login-input">
					<label for="userName">username: <input type="userName" name="userName" id="mj-login-user"></label>
				</div>
				<div class="mj-login-input">
					<label for="userPasw">password: <input type="userPasw" name="userPasw" id="mj-login-pasw"></label>
				</div>
			</div>
			<div class="mj-login-button">
				<button onclick="check()">submit</button><button onclick="pagechange()">register</button>
			</div>
		</div>
		<div id="mj-hidden"></div>





