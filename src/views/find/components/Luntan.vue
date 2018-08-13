<template>
	<div class="list">
		<div class="container">
			<div class="item" v-for="(item, index) in newsList" :key="index">
				<div class="item-left item-txt">
					<h3>{{item.message}}</h3>
					<span class="yonghu">{{item.nickname}}</span>
					<span class="pinglun">{{item.subject}}</span>
					
				</div>
				<div class="item-img">
					<img :src="item.img" alt="">
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
	    	.item-txt {
	    		.yonghu {
	    			display: inline-block;
	    			width: 100%;
	    			margin-top: 10px;
					font-size: 15px;
					border: none;
					margin-right: 8px;
	    		}
	    		.pinglun {
	    			// display: inline-block;
	    			font-size: 12px;
	    			border: none;
	    			margin-top: 5px;
	    		}

	    	}
			.item-left {
				flex: 1;
				margin-right: 7px;
				h3 {
					font-size: 15px;
					text-decoration: none;
					color: #000;

				}
			}
			.item-img {
				img {
					width: 30vw;
					height: 92px;
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
                    this.newsList = data.body.bbs.list;
                })
  		}
	}

</script>