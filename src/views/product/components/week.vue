<template>
	<div class="week">
		<div class="top">
			<div class="clearFloat"><p class="iconDesc fr">查看详情</p></div>
			<div class="t-body flex">
				<div class="left">
					<p>{{text.baseRateExplain}}</p>
					<p><span>{{num.baseRate}}.00</span>%</p>
				</div>
				<p class="arr f1">→</p>
				<div class="right">
					<p class="fr">{{text.maxRateExplain}}</p>
					<p><span>{{num.maxRate}}0</span>%</p>
				</div>
			</div>
			<div class="t-bottom">
				<div>
					<span>{{text.exitRateExplain}}</span>
					<span>{{text.extraRateExplain}}<i> {{num.stepRate}}0%</i></span>
					<span>{{num.minInvestAmount}}元起出借</span>
				</div>
				<p class="text">{{text.rateNoticeTitle}}</p>
			</div>
		</div>
		<div class="chart" id="myChart" :style="{width: '100%', height: '200px'}">
			
		</div>
		<div class="btn">
			<p>立即投资</p>
		</div>
		<div class="bottom">
			<div class="flex main">
				<div class="flex left f1">
					<img :src="list.imgUrl">
					<div>
						<p><strong>{{list.title}}</strong></p>
						<p><i>{{list.content}}</i></p>
					</div>
				</div>
				<div class="flex right f1">
					<img :src="list1.imgUrl">
					<div>
						<p><strong>{{list1.title}}</strong></p>
						<p><i>{{list1.content}}</i></p>
					</div>
				</div>
			</div>
			<div class="b-text">
				<p>{{safetyExplain.expectInterestExplain}}</p>
				<div class="b-banner">
					<img :src="list1.imgUrl">
					<div class="box">
						<ul id="con1" ref="con1" :class="{anim:animate==true}">
							<li v-for="(item, index) in safetyExplainList" :key="index">{{item}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../scss/week.scss';
	$w-color: orange;
	.week {
		background-color: #666;
	}
	.top {
		padding: 15px;
		font-size: 14px;
		background-color: #fff;
		border-bottom: 1px dashed $color;
		.iconDesc {
			border: 1px solid red;
			padding: 2px 8px;
			border-radius: 5px;
			background-color: orange;
		}
		.t-body {
			@include wauto(200px, 5px, 10px)
			.left {
				span {
					@include fw(30px)
				}
			}
			.arr {
				@include fw(20px)
				text-align: center;
				position: relative;
				top: 23px;
				left: 0px;
			}
			.right {
				& p:last-child {
					color: $w-color;
				}
				span {
					@include fw(30px)
				}
			}
		}
		.t-bottom {
			div {
				margin-bottom: 15px;
				span {
					padding: 0px 10px;
					text-align: center;
					border-right: 1px solid $color;
					i {
						font-style: normal;
						color: $w-color;
					}
				}
				& span:last-child {
					border: none;
				}
			}
			.text {
				text-align: center;
				font-size: 10px;
			}
		}
	}
	.btn {
		background-color: #fff;
		padding: 20px 10px 15px;
		margin-bottom: 10px;
		p {
			text-align: center;
			padding: 10px 0px;
			@include wauto(80%);
			@include fw(15px);
			color: #fff;
			background-color: $w-color;
			border-radius: 5px;
		}
	}
	.bottom {
		padding: 15px 0px;
		background-color: #fff;
		font-size: 14px;
		.main {
			margin-bottom: 20px;
		}
		i {
			font-style: normal;
			color: $color;
			padding-top: 5px;
		}
		.left {
			padding: 0px 15px;
			border-right: 1px solid $color;
			img {
				width: 30px;
				height: 30px;
				margin-right: 10px;
			}
		}
		.right {
			padding: 0px 15px;
			img {
				width: 30px;
				height: 30px;
				margin-right: 10px;
			}
		}
		.b-text {
			border-top: 1px solid #color;
			padding: 15px 30px;
			font-size: 10px;
			text-align: center;
			color: $color;
			border-top: 1px solid $color;
		}
		.b-banner {
			@include wauto(40%, 20px);
			border: 1px solid $color;
			border-radius: 10px;
			overflow: hidden;
			padding: 2px 20px;
			height: 15px;
			img {
				width: 15px;
				height: 15px;
				float: left;
			}
			span {
				text-align: center;
			}
		}
	}
	.chart {
		background-color: #fff;
	}
	.anim {
		transition: all 2s;
		margin-top: -17px;
	}
	#con1 li{
		line-height: 15px;
		height: 15px;
	}

</style>

<script type="text/javascript">
	export default {
		data() {
			return {
				mt: 0,
				text: {},
				num: {},
				list: {},
				list1: {},
				safetyExplain: {},
				safetyExplainList: [],
				animate:false
			}
		},
		created() {
			setInterval(this.scroll, 2500)
			this.$http.get('/data/week.json')
			.then(({ data }) =>{
				this.list = data.body.bottomImgList[0];
				this.list1 = data.body.bottomImgList[1];
				this.text = data.body.stepPlanExplain;
				this.num = data.body.stepPlanInfo;
				this.safetyExplain = data.body.safetyExplain;
				this.safetyExplainList = data.body.safetyExplain.safetyExplainList;
			})
		},
		mounted(){
			this.drawLine()
		},
		methods: {
			drawLine() {
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				myChart.setOption({
					title: { text: '投资收益曲线图' },
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'line',
							label: {
								backgroundColor: '#666'
							}
						}
					},
					xAxis: {
						data: [
							"1周",
							"10周",
							"19周",
							"28周",
							"37周",
						]
					},
					yAxis: {
						show: false,
						type: 'value'
					},
					series: [{
						name: '增加',
						type: 'line',
						data: [0, 5, 6, 7.5, 8.6],
						lineStyle: {
							color: 'orange'
						}
					}],
			
				})
			},
			scroll() {
				this.animate = true;
				setTimeout(()=> {
					this.safetyExplainList.push(this.safetyExplainList[0]);
					this.safetyExplainList.shift();
					this.animate = false;
				}, 1000)
			}
		}
	}
</script>

