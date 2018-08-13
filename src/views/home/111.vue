<!-- <div class="notice" @touchstart="stop()" @touchstop="move()">
			<div class="noticeShow">
				<transition-group tag="ul" name="image">
					<li v-for="(img, index) in noticeList" v-show="index===mark" :key="index">
						<a href="#">
							<img :src='item.imgUrl'>
							<p>{{item.title}}</p>
						</a>
					</li>
				</transition-group>
			</div>
			<div class="bullet">
				<span v-for="(item, index) in noticeList" :class="{ 'active':index===mark }" @swiperright="changeright(index)" @swiperleft="changeleft(index)" :key="index"></span>
			</div>
</div> -->

v-for="(item, index) in useList" :key="index"

v-model='tapIdx' :style='{ background: tapIdx === index ? '#4A4B5C' : 'white'}'



	/*.slide {
		width: 1024px;
		height: 320px;
		margin: 0 auto;
		margin-top: 50px;
		overflow: hidden;
		position: relative;
	}
	.slideshow {
		width: 1024px;
		height: 320px;
	}
	li {
		position: absolute;
	}
	img {
		width: 1024px;
		height: 320px;
	}
	.bar {
		position: absolute;
		width: 100%;
		bottom: 10px;
		margin: 0 auto;
		z-index: 10;
		text-align: center;
	}
	.bar span {
		width: 20px;
		height: 5px;
		border: 1px solid;
		background: white;
		display: inline-block;
		margin-right: 10px;
	}
	.active {
		background: red !important;
	}
	.image-enter-active {
		transform: translateX(0);
		transition: all 1.5s ease;
	}
	.image-leave-active {
		transform: translateX(-100%);
		transition: all 1.5s ease;
	}
	.image-enter {
		transform: translateX(100%);
	}
	.image-leave {
		transform: translateX(0);
	}
*/




		// 	autoPlay () {
		// 		this.mark++;
		// 		if (this.mark === 4) {
		// 			this.mark = 0
		// 		}
		// 	},
		// 	play () {
		// 		this.timer = setInterval(this.autoPlay, 2500)
		// 	},
		// 	change (i) {
		// 		this.mark = i
		// 	},
		// 	stop () {
		// 		clearInterval(this.timer)
		// 	},
		// 	move () {
		// 		this.timer = setInterval(this.autoPlay, 2500)
		// 	}
		//
		// 	
		// 	 	// this.play() 	



			{/*	timer: null, //定时器
      			mark: 0, //比对图片索引的变量
      			imgArray: [
   		    		'../static/timg1.jpg',
   					 '../static/timg2.jpg',
   					 '../static/timg3.jpg',
   					 '../static/timg4.jpg'
      			]*/}