<template>
	<div class="list">
		<div class="content-item" v-for="(item, index) in list" :key="index">
			<div class="top">
				<span class="icon"></span>
				<span class="title">{{item.author}}</span>
				<span class="all">查看全部</span>
			</div>
			<div class="container container1" v-for="(conitem, conindex) in item.list">
				<div class="item body">
					<div class="left">
						<p>{{conitem.title}}</p>
						<h3>{{conitem.subject}}</h3>
					</div>
					<div class="img">
						<img :src="conitem.img" alt="">
					</div>
				</div>
			</div>
			<p class="bottom-line"></p>
		</div>
	</div>
</template>

<style type="text/css" lang="scss">
@import './findbase.scss';
	.content-item {
		padding-top: 18px;
		.container1 {
			padding: 10px 15px 2px;
		}
		.bottom-line {
			width: 100%;
			height: 10px;
			background-color: $color;
			margin-top: 5px;
		}

		.top {
			font-size: 14px;
			overflow: hidden;
			padding: 0 20px;
			.all {
				float: right;
				font-size: 12px;
				color: #999;
			}
		}
		.container {
			.body {
				overflow: hidden;
				border: none;
				padding: 0;
			}
			.left {
				float: left;
				width: 63%;
				height: 67px;
				background-color: $color;
				padding: 25px 10px 0;
				h3 {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 15px;
				}
				p {
					font-size: 12px;
					margin-bottom: 5px;
				}
			}
			.img {
				float: right;
			}
			.img img {
				width: 30vw;
				height: 92px;
			}
		}

	}
</style>

<script type="text/javascript">
	export default {
		data() {
			return {
				list: [],
			}
		},

		created() {
  			 this.$http.get('/data/list.json')
                .then(({ data }) => {
                    console.log(data);
                    this.list = data.body.specialBbs.list;
                    console.log(this.list);
                })
  		},
	}
</script>