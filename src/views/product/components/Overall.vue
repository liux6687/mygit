<template>
	<div class="list">
		<div class="boxs">
			<strong class="title1">{{msg.title1}}</strong><span class="l"> | </span><strong class="title2">1{{msg.title2}}</strong><span class="firstInvestTitle">首投加息</span>
		<div class="conent">
			<div class="fl">
				<div class="lilv">
				<strong>5.50</strong><strong class="add">+</strong><strong class="addMore">2.00</strong><strong class="persent">%</strong>
			</div>
		    	<div class="interestDesc">{{msg.interestDesc}}</div>
			</div>
			<div class="shouyi">
				<div>1000{{msg.startInvestMoney}}</div>
				<div>{{msg.profitDesc}}<span class="money">62.50</span>{{msg.profitUnit}}</div>
			</div>
		</div>
		<div class="invest">立即投资</div>
		</div>



		<router-link class="boxs" v-for="(item, index) in math" :key="index" tag="div" :to="'/detail/' + item.period">
		
			<strong class="title1">{{msg.title1}}</strong><span class="l"> | </span><strong class="title2">{{item.period}}{{msg.title2}}</strong><span class="firstInvestTitle">{{item.iconTitle}}</span>
		<div class="conent">
			<div class="fl">
				<div class="lilv">
				<strong><template v-if="index === 3">{{item.interest}}0</template><template v-else>{{item.interest}}.00</template></strong><strong class="add">+</strong><strong class="addMore"><template v-if="index === 3">{{item.awardInterest}}0</template><template v-else>{{item.awardInterest}}.00</template></strong><strong class="persent">%</strong>
			</div>
		    	<div class="interestDesc">{{msg.interestDesc}}</div>
			</div>
			<div class="shouyi">
				<div>1000{{msg.startInvestMoney}}</div>
				<div>{{msg.profitDesc}}<span class="money">{{item.profitForV7}}</span>{{msg.profitUnit}}</div>
			</div>
		</div>
		<div class="more">立即投资<span class="arrow1"></span><span class="arrow2"></span></div>
		</router-link>
		<div class="kong"></div>
		<div class="yuyue">
			<div class="zhinan">预约指南</div>
			<span class="find">查看详细流程</span>
		</div>
		<div>
		</div>
	</div>

</template>
<style type="text/css" scoped lang="scss">
@import '../scss/productBase.scss';
	.list {

		width: auto;
		overflow-y: auto;
		overflow-x: auto;
		padding: 0 26px;
		margin:0 auto;
		.boxs {
			position: relative;
			padding-top: 10px;
			padding-bottom: 10px;
			border-bottom: 1px solid #ccc;
			.title1, .title2 {
			font-size: 14px;	
		}
		.l {
			font-size: 12px;
		}
		.firstInvestTitle {
			display: inline-block;
			font-size: 12px;
			color: #6385D2;
			line-height: 15px;
			border-radius: 3px;
			padding: 0 3px;
			margin-left: 3px;
			border: 1px solid #6385D2;
		}
		.conent {
			padding: 10px 0;
			@include clearfix
			.fl {
				float: left;
				margin-right: 20px;
				.lilv {
				font-size: 24px;
				.add, .persent {
				font-size: 14px;
			}
				.addMore {
					color: $wordColor;
				}
			}
				.interestDesc {
				font-size: 12px;
				color: #ccc;
				}
			}
			.shouyi {
				float: right;
				font-size: 12px;
				line-height: 20px;
				border-left: 1px solid #ccc;
				margin-right: 20px;
				padding-left: 10px;
				.money {
					color: $wordColor;
				}
			}	
		}
		.invest {

				// width: 100%;
				color: #fff;
				background: -webkit-linear-gradient(left, #FF9000 , #FF6A00); /* Safari 5.1 - 6.0 */
				line-height: 40px;
				font-size: 20px;
				text-align: center;
				border-radius: 4px;
			}
		.more {
				font-size: 14px;
				position: absolute;
				top: 11px;
				right: -16px;
				color: #ccc;
			}	
		.arrow1 {
				position: relative;
				top: -4px;
				right: -10px;
				width: 0;
				font-size: 0;
				// 所有边变成透明
				border: 8px solid transparent;
				// 特殊边上色
				border-left-color: #ccc;
			}
		.arrow2 {
			position: relative;
			top: -4px;
			right: 10px;
			width: 0;
			font-size: 0;
			// 所有边变成透明
			border: 10px solid transparent;
			// 特殊边上色
			border-left-color: #fff;

		}
		}
		.kong {
			// width: 100%;
			height: 10px;
			background: #F7F7F9;
		}
		.yuyue {
			// width: 100%;
			height: 40px;
			line-height: 40px;
			@include clearfix;
			border-bottom: 1px solid #ccc;
			.zhinan {
				float: left;
				font-size: 14px;
			}
			.find {
				float: right;
				font-size: 12px;
				color: #ccc;
			}
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				msg: {},
				math: [],
				boot: {}
			}
		},
		created() {
			this.$http.get('data/zhengcunbao.json')
				.then(({ data }) => {
					console.log(data)
					this.msg = data.body.keys,
					this.math = data.body.list,
					this.boot = data.body.bottomImgs
				})
				
		}
	}
</script>