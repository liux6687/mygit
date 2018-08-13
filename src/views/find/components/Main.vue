<template>
	<div id="app">
		<Carousel></Carousel>
		<div class="header">
			<div class="item" v-for="(item, index) in headerList" :key="index">
				<img :src="item.imageUrl" alt="">
				<p class="text">{{item.title}}</p>
			</div>
		</div>
		<div class="content">
			<div class="nav">
				<p name="txt" @click="showPage('Luntan', $event, 0)">{{bbs.title}}<span></span></p>
				<p name="txt" @click="showPage('Shengcai', $event, 1)">{{specialBbs.title}}<span></span></p>
				<p name="txt" @click="showPage('Pingtai',$event, 2)">{{news.title}}<span class="active" id="active"></span></p>
			</div>
		</div>
		<!-- keep-alive组件的作用是：当组件移除的时候，并不会销毁，而是放在缓存中，当下次时候的之后，不会再创建，而是直接使用 -->
		<keep-alive>
			<!-- component是一个万能的组件，通过is属性定义渲染的组件类 -->
			<!-- 通过我们动态的绑定is属性，就可以动态的渲染组件了 -->
			<component :is="view"></component>
		</keep-alive>
	</div>
</template>

<style lang="scss">
@import './findbase.scss';
::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}
 	.header {
 		display: flex;
 		padding: 20px 0;
 		border-bottom: 10px solid $color;
	    justify-content: space-around;
 		.item {
 			flex: 1;
 			font-size: 12px;
 			text-align: center;
 		}
 		img {
 			width: 45px;
 			height: 45px;
 		}
 		.text {
 			margin-top: -4px;
 		}
 	}
 	.content {
		.nav {
			display: flex;
			padding: 14px 0;
			text-align: center;
			color: #999;
			font-size: 15px;
			border-bottom: 1px solid $color;
			justify-content: space-around;
			p {
				flex: 1;
				position: relative;
			}
			.active {
  				position: absolute;
  				top: 23px;
				left: 30px;
				display: inline-block;
				margin-top: 10px;
				width: 70px;
				height: 2.2px;
				border-radius: 1.5px;
				background-color: #000;
			}
		}


	}
</style>

<script>
// 引入carousel组件
import Carousel from './Carousel.vue';
import Pingtai from './Pingtai.vue';
import Luntan from './Luntan.vue';
import Shengcai from './Shengcai.vue';

  	export default {
  		data() {
  			return {
  				view: 'pingtai',
  				headerList: [],
  				news: {},
  				bbs: {},
  				specialBbs: {}

  			}
  		},

  		created() {
  			 this.$http.get('/data/list.json')
                .then(({ data }) => {
                    console.log(data);
                    this.headerList = data.body.top;
                    this.news = data.body.news;
                    this.bbs = data.body.bbs;
                    this.specialBbs = data.body.specialBbs;
                })
  		},

  		methods: {
  			showPage(msg, e, num) {
  				console.log(msg);
  				this.view = msg;
  				let txtp = document.getElementsByName('txt');
  				console.log(num);
  				let active = document.getElementById('active');
  				active.className = " ";
  				// console.log(txtp);
  				for (let i = 0; i < txtp.length; i++) {
  					txtp[i].style = '';
  					txtp[i].lastChild.style = '';
  				}

  				e.target.style = 'color: #000;';
  				e.target.lastChild.style = `
  				display: block;
  				position: absolute;
  				top: 23px;
				left: 30px;
				display: inline-block;
				margin-top: 10px;
				width: 70px;
				height: 2.2px;
				border-radius: 1.5px;
				background-color: #000;
  				`


  			}
  		},

  		components: {
  			Carousel,
  			Pingtai,
  			Luntan,
  			Shengcai

  		}

  	}
</script>