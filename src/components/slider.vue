<template>
		<!-- <ul>
			<router-link  v-for="(item, index) in swiperData" :key="index" :to="item.url" tag="li" @touch="toggleImg">
				<img :src="item.imgUrl" alt="">
			</router-link>
		</ul> -->
		<slider :pages="pagesData" :sliderinit="sliderinit" @tap='changePage'>
    		<!-- slot  -->
  		</slider>			
</template>
<style lang="scss" scoped>
	.header {
		height: 132px;
	}
	.swiper {
		display: block;
		height: 132px;
		width: 9999px;
		li {
			width: 320px;
			float: left;
			display: block;
			&.cur {
				display: none;
			}
			img {
				width: 320px;
				height: 132px;
				display: block;
			}
		}
	}
</style>
<script>
	import slider from 'vue-concise-slider';
	export default {
		props: ['swiperData'],	
		data() {
			return {
				 sliderinit: {
          			currentPage: 0,//当前页码
          			thresholdDistance: 50,//滑动判定距离
          			thresholdTime: 1000,//滑动判定时间
          			autoplay:3000,//自动滚动[ms]
          			loop:true,//循环滚动
          			direction:'horizontal',//方向设置，垂直滚动
          			infinite:1,//无限滚动前后遍历数
          			slidesToScroll:1,//每次滑动项数
        		}
			}
		},
		methods: {
			changePage() {
				// console.log(this.sliderinit.currentPage)
				let pagNum = this.sliderinit.currentPage
				// console.log("+++++", this.swiperData[pagNum].shareUrl)
			}
		},
		watch: {

		},
		components: {
			slider
		},
		computed: {
			pagesData() {
				let result = []
				this.swiperData.forEach(item => {
					let data = {}
					data['style'] = {'background-image': 'url(' + item.imgUrl + ')'}
					data['title'] = item.title
					result.push(data)
				})
				// console.log(">>>>>", result)
				return result
			}
		}
	}
</script>