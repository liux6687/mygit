<template>
	<div class="list">
		<div class="container">
			<div class="item" v-for="(item, index) in newsList" :key="index">
				<div class="item-left">
					<h3>{{item.title}}</h3>
					<p>平台动态</p>
				</div>
				<div class="item-img">
					<img :src="item.imageUrl" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<style type="text/css" lang="scss">
@import './findbase.scss';
	.container {
		padding: 8px 17px 10px;
		.item {
			display: flex;
			padding: 10px 0;
			margin-bottom: 10px;
			border-bottom: 1px solid $color;
	    	justify-content: space-around;
			.item-left {
				flex: 1;
				margin-right: 7px;
				h3 {
					font-size: 15px;
				}
				p {
					display: inline-block;
					// 利用transform的缩放来显示小于12px的字体
					font-size: 12px;
					-webkit-transform: scale(0.8);
					color: #C8C7C7;
					margin-top: 21px;
					border-radius: 2px;
					// 利用box-shadow属性来模拟小于1px的边框
					box-shadow: 0 0 0 0.2px;
					padding: 4px 6px;
				}
			}
			.item-img {
				img {
					width: 30vw;
				}
			}
		}
	}

</style>


<script type="text/javascript">
	export default {
		data() {
			return {
				newsList: []
			}
		},

		created() {
  			 this.$http.get('/data/list.json')
                .then(({ data }) => {
                    // console.log(data);
                    this.newsList = data.body.news.list;
                })
  		}
	}

</script>