var fjmap = document.querySelector("#feiji").getContext("2d");
	(function(){
		var loaded = 0;
		var jpg = {};
		var bullets = {};
		var enemys = {};
		function load(pic,callback){
			var img = new Image()
				img.src = pic;
				img.onload=function(){
					loaded++;
					jpg[pic]=img;
					callback();
				};
		}
		load("images/self.png",init);
		load("images/enemy.png",init);

		function init(){
			if(loaded==2){//资源总数,资源加载完毕后执行
				//我方战机
				var myfig = new fighter();
				//持续出现敌机
				setInterval(function(){
					var n = Math.random();
					enemys[n] = new enemy();
					enemys[n].name = n;
				},500)
				//持续发射子弹
				setInterval(function(){
					var n = Math.random();
					bullets[n] = new bullet(myfig.x+20,myfig.y-10);
					bullets[n].name = n;
				},200);
			}else{
				//这里可以做一些loading之类的事情
			}
		}
		//我方战机
		function fighter(){
			this.x = 130
			this.y = 350
			this.w = jpg["images/self.png"].width
			this.h = jpg["images/self.png"].height
			var rs = this;
			fjmap.drawImage(jpg["images/self.png"],this.x,this.y);
			window.addEventListener('keydown', function(e){
				if(e.keyCode == 37){
					rs.left();
				}else{
					rs.right();
				}
			}, true);
		}
		fighter.prototype.move = function(x){
			fjmap.clearRect(this.x,this.y,this.w,this.y);
			fjmap.drawImage(jpg["images/self.png"],this.x+=x,this.y);
		}
		//向左移动
		fighter.prototype.left = function(){
			this.move(-4);
		}
		//向右移动
		fighter.prototype.right = function(){
			this.move(4);
		}
		//子弹对象
		function bullet(x,y){
			this.x = x;
			this.y = y;
			//接受一个x,y发射点坐标
			var rs = this;
			this.timer = setInterval(function(){
				if(rs.y<0){
					rs.stop();
					enemys[rs.name]=null;
					return;
				}
				rs.fly();
			},100);
			fjmap.fillStyle="#0000ff";
			fjmap.fillRect(x,y,2,4);
		}
		bullet.prototype.stop = function(){
			clearInterval(this.timer);
			bullets[this.name]=null;
		};
		bullet.prototype.fly = function(){
			this.check();//碰撞检测
			fjmap.clearRect(this.x,this.y,2,4);//擦除旧子弹
			fjmap.fillRect(this.x,this.y-=50,2,4);//绘制新子弹
		};
		bullet.prototype.check = function(){
			var x1 = this.x;
			var y1 = this.y;
			var w1 = 2,h1 = 4;
			for(var em in enemys){
				var e = enemys[em];
				if(!e) continue;
				var x2 = e.x,y2=e.y,w2=e.w,h2=e.h;
				if(x1 + w1 > x2 && x1 < x2 + w2 && y1 + h1 > y2 && y1 < y2 + h2){
					enemys[e.name].clear();
					enemys[e.name].stop();
				}
			}
		}
		//敌机对象
		function enemy(){
			this.w = jpg["images/enemy.png"].width
			this.h = jpg["images/enemy.png"].height
			this.x = parseInt(Math.random()*(300-this.w));
			this.y = 0;
			var rs = this;
			fjmap.drawImage(jpg["images/enemy.png"],this.x,this.y);//显示敌机
			this.timer = setInterval(function(){
				if(rs.y>400){
					rs.stop();
					return;
				}
				rs.clear();//旧飞机位置
				fjmap.drawImage(jpg["images/enemy.png"],rs.x,rs.y+=3);
			},20)
		}
		//擦除敌机
		enemy.prototype.clear = function(){
			fjmap.clearRect(this.x,this.y,this.w,this.h);
		}
		enemy.prototype.stop = function(){
			clearInterval(this.timer)
			enemys[this.name]=null;
			delete enemys[this.name];
		};
	})();