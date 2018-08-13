<template>
	

	<div class="app-home">
		<!-- banner部分 -->
		<div class="banner">
			<Slider :swiper-data="banner"></Slider>
		</div>	

		<!-- product部分 -->
		<div class="product">
			<div class="proheader">
				<div class="left">推荐产品</div>
				<div class="right">首投加息</div>
			</div>
			<div class="probody">
				<div class="left">
					<p class="num">
						<span class="num6">6.00+</span><span class="num4">4.00<i>%</i></span>
					</p>
					<p class="word">预期年化结算利率</p>
				</div>
				<div class="right">
					<p class="lockTime">锁定期<span>3</span>个月</p>
					<p class="ret">万元预期出借回报<span>84.03</span>元/月</p>
				</div>
			</div>
			<div class="profooter">
				<button>立即投资</button>
			</div>
		</div>

		<!--  -->
		<div class="notice">
			<div class="noticeShow">
				<transition-group tag="ul" name="image">
					<li 
						v-for="(item, index) in noticeList" 
						v-show="index===mark" 
						:key="index"
						@touchmove="change(index, $event)" 					
						>
						<img :src='item.imgUrl'>
						<p>{{item.title}}</p>
					</li>
				</transition-group>
			</div>
		</div> 	
		<!-- <div class="notice">
			<ul class="noticeList">
				<li v-for="(item, index) in noticeList" :key="index">
					<img :src='item.imgUrl'>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div> -->
		<div class="tipsmsg">
			<div class="msgleft">
				<img src="image/serviceNotice.png" alt="">
			</div>
			<div class="msgright">
				<div class="msgword">
					<p>暂无未读消息哦~</p>
					<p>赞~您没有错过任何一条消息</p>					
				</div>
				<span class="arrow">
					<span class="arrow white"></span>
				</span>
			</div>
		</div>
		
		<div class="use">
			<div class="tipsheader">
				<div class="tipsleft">千万人都在用</div>
				<span class="tipsarrow">
					<span class="tipsarrow white"></span>
				</span>
			</div>
			<div class="img">
				<ul>
					<!-- <li 
						v-for="(item, index) in useList" 
						:key="index" 
						v-model='useList' 
						@touchstart="toggle(index, $event)"  
						:style="{ backgroundColor: bgcolor[0] }" 	
					>
						<p :style="{ color: colorp[0] }">{{item.msg}}</p>
						<p :style="{ color: colorspan[0] }"><span>{{item.data}}</span>{{item.unit}}</p>
						:class="{ checked: index === isIndex}"
					</li> -->
					<li 
						v-for="(item, index) in useList" 
						:key="index" 
						v-model='useList' 
						@click="toggle(item.index, $event)" 
							
					:class="[item.index === isIndex ? 'checked' : '']"
					>
						<p>{{item.msg}}</p>
						<p><span>{{item.data}}</span>{{item.unit}}</p>
					</li>
				</ul>
				<div class="img_num">
					<p></p>
					<!-- <template v-if="idx === 0">
						<p>{{togglemsg.source}}</p>
						<p>{{togglemsg.title}}</p>				
					</template>
					<template v-else>
						<p>{{useList[idx].source}}</p>
						<p>{{useList[idx].title}}</p>				
					</template> -->


					<template v-if="idx === 0">
						<div class="numOut">
							<div class="numList">
								<p 
								v-for="(value, idex) in togglemsg.source" 
								:key="idex" 
								:class="[value === ',' ? 'dot' : 'numcheck']"
								>{{value}}</p>
							</div>
						</div>
						
						<p class="word">{{togglemsg.title}}</p>				
					</template>
					<template v-else>
						<div class="numOut">
							<div class="numList" v-for="(val, ide) in numList[idx]" :key="ide">
								<p :class="[val === ',' ? 'dot' : 'numcheck']">{{val}}</p>
							</div>
						</div>
						<div class="word">{{useList[idx].title}}</div>				
					</template>
				</div>
			</div>
		</div>

		<div class="platform">
			<div class="tipsheader">
				<div class="tipsleft">靠谱的互联网金融平台</div>
				<span class="tipsarrow">
					<span class="tipsarrow white"></span>
				</span>
			</div>
			<div class="content">
				<!-- <ul>
					<li v-for="(item, index) in platformTopData" :key="index">
						<img :src="item.imgUrl" alt="">
						<p>{{item.title}}</p>
						<ul>
							<li v-for="(itm, idx) in platformlistData" :key="idx"></li>
						</ul>
					</li>
				</ul> -->
				<ul class="horizontal">
					<li class="horLi">
						<img src="image/platform1.png" alt="">
						<p>华夏银行资金存管</p>
						<ul class="vertica">
							<li  class="verLi">等保三级备案证明</li>
							<li  class="verLi">平台5亿元注册资本</li>
						</ul>
					</li>
					<li class="horLi">
						<img src="image/platform2.png" alt="">
						<p>网贷之家TOP10</p>
						<ul class="vertica">
							<li class="verLi">中国互联网金融协会成员</li>
							<li  class="verLi">企业AAA信用评级</li>
						</ul>
					</li>
				</ul>
				
			</div>
		</div>
		
		<div class="transparent">
			<div class="tipsheader">
				<div class="tipsleft">平台真实透明</div>
				<span class="tipsarrow">
					<span class="tipsarrow white"></span>
				</span>
			</div>

			<div class="img">
				<ul>
					<li v-for="(item, index) in transparentList" :key="index" v-model='togglemsg' @tap="toggle">
						<img :src="item.imgUrl" alt="">
						<p>{{item.title}}</p>
					</li>
				</ul>
				<div class="img_num">
					<div class="input">
						<img src="image/transparent.png" alt="">
						<span>迄今为止 如期履约</span>
					</div>
				</div>
			</div>
		</div>
	





	</div>

		
</template>

<style lang="scss" scoped>
	@import '../../base.scss';
	.banner {
		height: 132px;
	}
	.product {
		padding: 14px 10px 0px;
		background-color: #fff;
		height: 160px;
		.proheader {
			height: 30px;
			border-bottom: 1px solid #efefef;
			font-size: 18px;
			display: block;
			.left {
				float: left;
				padding-left: 5px;
				font-weight: bold;
				border-left: 2px solid orange;
				line-height: 1;
			}
			.right {
				float: left;
				border: 1px solid #457EE4;
				border-radius: 4px;
				transform: scale(.6);
				color: #457EE4;
				position: relative;
				top: -6px;
    			left: -11px;
    			padding: 3px;
			}
		}
		.probody {
			text-align: left;
			position: relative;
			top: 10px;
			height: 75px;
			.left {
				position: absolute;
				top: 0px;
				left: 0px;
				.num {
					font-size: 26px;
					.num6 {

					}
					.num4 {
						color: orange;
						i {
							font-style: normal;
							font-size: 16px;
						}
					}
				}
				.word {
					transform: scale(0.7);
					line-height: 1;
					text-align: left;
					margin-left: -22px;
				}
			}
			.right {
				position: absolute;
				top: 4px;
				right: -30px;
				/*padding-left: 20px;*/
				border-left: #efefef;
				transform: scale(.65);
				border-left: 1px solid #efefef;
				.lockTime {				
					span {
						color: orange;
					}
				}
				.ret {
					span {
						color: orange;
					}
				}
			}
		}
		.profooter {
			display: flex;
			button {
				flex: 1;
				border: none;
				border-radius: 3px;
				color: #fff;
				height: 40px;
				background: -webkit-linear-gradient(left, #FF9000 , #FF6A00); /* Safari 5.1 - 6.0 */
			}
		}
	} 
	/*notice部分*/
	.notice {
		background-color: #fff;
		margin: 10px 0px;
		/*height: 9999px;*/
		overflow: hidden;
		padding: 5px 10px;
		position: relative;
		height: 35px;

		.noticeList {
			padding-left: 10px;
			position: absolute;
			left: 0px;
			top: 7px;
			li {
				display: flex;
				margin-bottom: 10px;
				img {
					height: 30px;
					width: 30px;
					background-size: 30px;
					margin-right: 10px;
				}
				p {
					flex: 1;
					height: 30px;
					line-height: 30px;
					font-size: 12px;
				}
			}
		}
	}

	
	

	.notice {
		background-color: #fff;
		margin: 10px 0px;
		/*height: 9999px;*/
		overflow: hidden;
		padding: 5px 10px;
		position: relative;
		height: 35px;
		.noticeShow {
			padding-left: 10px;
			position: absolute;
			left: 0px;
			top: 7px;
			li {
				display: flex;
				margin-bottom: 10px;
				img {
					height: 30px;
					width: 30px;
					background-size: 30px;
					margin-right: 10px;
				}
				p {
					flex: 1;
					height: 30px;
					line-height: 30px;
					font-size: 12px;
				}
			}
		}
		
	}
	.image-enter-active {
		transform: translateY(0px);
		transition: all 1.5s linear;
	}
	.image-leave-active {
		transform: translateY(-35px);
		transition: all 1.5s linear;
	}
/*	.image-enter-to {
		top: 6px;
	}
	.image-leave-to {
		top: -300px;
	}*/
	.image-enter {
		transform: translateY(35px);
	}
	.image-leave {
		transform: translateY(0px);
	}
	



	

	.tipsmsg {
		background-color: #fff;
		display: flex;
		height: 45px;
		padding: 10px 10px 0;
		margin-bottom: 10px;
		.msgleft {
			width: 25%;
			/*background-color: red;*/
			margin-right: 10px;
			position: relative;
			img {
				width: 43px;
				height: 45px;
				position: absolute;
				top: -5px;
    			left: 25px;
			}
		}
		.msgright {
			flex: 1;
			display: block;
			.msgword {
				float: left;
				p {
					font-size: 12px;
					&:first-child {
					/*padding: 5px 0 5px; */
					font-weight: bold;
					}
				}
			}
			.arrow {
				float: right;
				width: 50px;
				@include arrow(10px, $arrowColor, left);
				position: relative;
				top: 9px;
				right: 0px;
				.white {
					@include arrow(10px, white, left);
					position: absolute;
					top: -10px;
					right: -7px;
				}
			}
		}

	}
	
	.tipsheader {
		@extend %tipsheader;
	}
	
	.use {
		background-color: #fff;
		.tipsheader {
			border-bottom: 1px solid $arrowColor;
		}
		.img {
			padding: 20px 20px;
			ul {
				display: flex;
				li {
					flex: 3.33;
					/*width: 100vw;*/
    				height: 20vw;
					background-color: #fff;
					/*border:1px solid #ccc;*/
					box-shadow: 0px 0px 5px #cac6c6;
					/*background-color: red;*/
					margin-right: 10px;
					text-align: center;
					border-radius: 3px;
					&:first-child {
						margin-right: none;
					}
					p {
						font-size: 13px;
    					line-height: 14vw;
						&:first-child {
							height: 22px;
						}
						&:nth-child(1) {
							color: #B7B7BE;
						}
						&:nth-child(2) {
							span {
								font-size: 14px;
							}
						}
					}
				}
			}
			.img_num {
				padding-top: 10px;
				display: block;
				.numOut {
					width: 100%;
					text-align: center;
					.numList {
						text-align: center;
						display: inline-block;
						/*margin: 0 auto;*/
					}
				}
				.word {
					text-align: center;
				}
			}
		}
	}
	.checked {
		background-color: #4A4B5C !important;
		color: white !important;
		p {
			color: white !important;
		}
	}
	.numcheck {
		float: left;
		display: inline-block;
		width: 15px;
		border: 1px solid #666;
		border-radius: 4px;
		margin-right: 3px;
	}
	.dot {
		float: left;
	}

	.platform {
		background-color: #fff;
		margin: 10px 0 0;
		padding-bottom: 10px;
		.tipsheader {

		}
		.content {
			.horizontal {
				display: flex;
				.horLi {
					/*margin-right: 10px;*/
					background-color: #F8F8F9;
					flex: 1;
					text-align: center;
					margin-left: 6px;
					border-radius: 5px;
					padding-top: 20px;
					&:last-child {
						margin-right: 6px;
					}
					img {
						width: 20%;
					}
					p {
						height: 50px;
						line-height: 30px;
					}
					.vertica {
						list-style: normal;
						.verLi {
							background-color: #fff;
							font-size: 14px;
							text-align: left;
							padding-left: 8px;
						}
					}
				}
			}
		}
	}

	.transparent {
		background-color: #fff;
		margin-top: 10px;
		height: 300px;
		.tipsheader {

		}
		.img {
			ul {
				display: flex;
				padding-left: 35px;
				li {
					flex: 1;
					margin-right: 10px;
					&:last-child {
						margin-right: 0px;
					}
					img {
						width: 73.5px;
						height: 73.5px;
					}
					p {

					}
				}
			}
			.img_num {
				padding: 20px 80px;
				display: flex;
				.input {
					flex: 1;
					border: 1px solid #F6F7FB;
					border-radius: 21px;
					box-shadow: 2px 2px 3px #F6F7FB;
					padding-left: 50px;
					height: 40px;
					line-height: 40px;
					position: relative;
					img {
						position: absolute;
						top: 11px;
    					left: 24px;
						width: 14.5px;
						height: 18px;
						padding-right: 20px;
						vertical-align: middle;
						span {
							font-size: 18px;
						}
					}					
				}
			}
		}		
	}
</style>

<script>
	import Slider from '../../components/slider.vue'
	export default {
		data() {
			return {
				banner: [],
				noticeList: [],
				useList: [],
				togglemsg: {
					source: ['1', '4', ',', '1', '8', '8', ',', '4', '5', '1'],
					title: '平台稳定运营4年 累计服务用户数（人）'
				},
				numList: [],
				idx: 0,//切换背景记录索引值
				bgcolor: [],
				colorp: [],
				colorspan: [],
				platform: null,
				transparentList: [],
				timer: null,//定时器
				mark: 0,//比对图片索引的变量
				isIndex: 0
			

			}
		},
		components: {
			Slider
		},
		methods: {
			autoPlay () {
				this.mark++;
				if (this.mark === 4) {
					this.mark = 0
				}
				console.log(this.mark)
			},
			play () {
				this.timer = setInterval(this.autoPlay, 2500)
			},
			change (i, e) {
				this.mark = i;
				// console.log(i, e)
			},
			
			toggle(index, e) {
				console.log(index);
				console.log(e);
				console.log(e.target);
				console.log(e.path[1]);
				
				this.idx = index;
				// this.ide = index;
				this.isIndex = index;
			}
		},
		created() {

			this.$http.get('data/home.json')
			.then(({data}) => {
				console.log('data', data);
				this.banner = data.body.banner;
				this.noticeList = data.body.notice.list;
				this.useList = data.body.use.list;

				//遍历list每一项 得到source 组成数据 放到numList中
				for(let i = 0; i < this.useList.length; i++) {
					let listArr = [];
					for(let j = 0; j < this.useList[i].source.length; j++) {
						listArr = this.useList[i].source.split('')
					}
					this.numList.push(listArr)
				}
				console.log("numList", this.numList)
				// this.platform = data.body.platform;
				// console.log("platform", this.platform)
				this.transparentList = data.body.transparent.list;
				console.log(">>>>>>", this.useList)
				console.log('banner', this.banner)
			})
			this.play()			
		},
		mounted() {
			let lis = document.getElementsByClassName('bg')
			console.log(lis);
			let lisArr = Array.from(lis);
			console.log("lisArr",lisArr);
			// lisArr[0].classList.remove('checked');
			// lisArr[0].classList.add("checked");
		}
	




	}
</script>

