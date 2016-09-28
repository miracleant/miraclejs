<div id="mj-content">
	<div class="mj-content-left">
		<div class="mj-list">
			<ul>
				<li><a href="">pulldown-menu</a></li>
				<li><a href="">popup-login</a></li>
				<li onclick="showlist(this)" >play<span>+</span>
					<ul id="mj-list-show" >
						<li><a href="">circle-play</a></li>
						<li><a href="">list-play</a></li>
						<li><a href="">video-play</a></li>
					</ul>
				</li>
				<li><a href="">marquee</a></li>
				<li><a href="">waterfall</a></li>
				<li><a href="">animation</a></li>
				<li><a href="">page-reviwe</a></li>
			</ul>
		</div>


		<div class="mj-marquee" id="mj-marquee" ><a name="mj-mqrquee" />
			<!-- <marquee direction="up" > -->
			<ul id="mj-content-1">
				<li class="mj-marquee-cont">
					<p>1</p>
					<hr />
					good news
				</li>
				<li class="mj-marquee-cont">
					<p>2</p>
					<hr />
					good news
				</li>
				<li class="mj-marquee-cont">
					<p>3</p>
					<hr />
					good news
				</li>
				<li class="mj-marquee-cont">
					<p>4</p>
					<hr />
					good news
				</li>
				<li class="mj-marquee-cont">
					<p>5</p>
					<hr />
					good news
				</li>
				<li class="mj-marquee-cont">
					<p>6</p>
					<hr />
					good news
				</li>
			</ul>
			<ul id="mj-content-2">
			</ul>
			<!-- </marquee> -->
		</div>	
	</div>
	


	<div class="mj-content-right">
		<div class="mj-circle-play"><a name="mj-circle-play" />
			<img id="image" src="images/01.jpg" />
			<button id="left" class="left" onclick="left()"><img src="images/left.png"></button>
			<button id="right" class="right" onclick="right()"><img src="images/right.png"></button>
		</div>

		<div class="mj-list-menu">
			<div id="mj-list-tit" class="mj-list-tit">
				<ul>
					<li class="select"><a href="#">sina</a></li>
					<li><a href="#">wangyi</a></li>
					<li><a href="#">yahoo</a></li>
					<li><a hrf="#">taobao</a></li>
					<li ><a href="#">baidu</a></li>
				</ul>
			</div>
			<div id="mj-list-con" class="mj-list-con">
				<div class="mj-list-mod" id="mj-list-mod" style="display: block;">
					<ul>
						<li><a href="#">1:new product</a></li>
						<li><a href="#">2:sales promotion</a></li>
						<li><a href="#">3:old for new</a></li>
						<li><a href="#">4:service after sale</a></li>
					</ul>
				</div>
				<div class="mj-list-mod" id="mj-list-mod" style="display: none;">
					<ul>
						<li><a href="#">4:new product</a></li>
						<li><a href="#">sales promotion</a></li>
						<li><a href="#">old for new</a></li>
						<li><a href="#">service after sale</a></li>
					</ul>
				</div>
				<div class="mj-list-mod" id="mj-list-mod" style="display: none;">
					<ul>
						<li><a href="#">new product</a></li>
						<li><a href="#">5:sales promotion</a></li>
						<li><a href="#">old for new</a></li>
						<li><a href="#">service after sale</a></li>
					</ul>
				</div>
				<div class="mj-list-mod" id="mj-list-mod" style="display: none;">
					<ul>
						<li><a href="#">new product</a></li>
						<li><a href="#">sales promotion</a></li>
						<li><a href="#">6:old for new</a></li>
						<li><a href="#">service after sale</a></li>
					</ul>
				</div>
				<div class="mj-list-mod" id="mj-list-mod" style="display: none;">
					<ul>
						<li><a href="#">new product</a></li>
						<li><a href="#">sales promotion</a></li>
						<li><a href="#">old for new</a></li>
						<li><a href="#">7:service after sale</a></li>
					</ul>
				</div>
			</div>
		</div>


		<div class="mj-page-review" id="mj-page-review">
			<li value="pimages/P_00.jpg"><img src="pimages/P_00.jpg" /></li>
			<li value="pimages/P_01.jpg"><img src="pimages/P_01.jpg" /></li>
			<li value="pimages/P_02.jpg"><img src="pimages/P_02.jpg" /></li>
			<li value="pimages/P_03.jpg"><img src="pimages/P_03.jpg" /></li>
			<li value="pimages/P_04.jpg"><img src="pimages/P_04.jpg" /></li>
			<li value="pimages/P_05.jpg"><img src="pimages/P_05.jpg" /></li>
			<li value="pimages/P_06.jpg"><img src="pimages/P_06.jpg" /></li>
			<li value="pimages/P_07.jpg"><img src="pimages/P_07.jpg" /></li>
			<li value="pimages/P_08.jpg"><img src="pimages/P_08.jpg" /></li>
			<li value="pimages/P_09.jpg"><img src="pimages/P_09.jpg" /></li>
			<li value="pimages/P_010.jpg"><img src="pimages/P_010.jpg" /></li>
			<li value="pimages/P_011.jpg"><img src="pimages/P_011.jpg" /></li>
		</div>
	</div>

	<div class="mj-content-bottom">
		<div class="mj-video-play" id="mj-video-play">
			<div>
				<video controls>
					<source src="video/1.avi">
				</video>
			<div class="mj-ui-plya"><span></span></div>
			</div>
		</div>
		<div class="mj-canvas"></div>
	</div>



</div>
