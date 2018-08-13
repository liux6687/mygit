<template>
	<div class="scatter">
		<ul>
			<router-link to="/user" tag="li" v-for="(item, index) in list" :key="index" class="list">
				<div class="s-top flex">
					<p class="title f1">{{item.title}}</p>
					<p class="move">{{item.statusExplain}}</p>
					<span class="arrow"></span>
				</div>
				<div class="flex body">
					<div class="left f1">
						<p class="num">{{item.interestRate}}0<span>%</span></p>
					</div>
					<div class="right f1">
						<p class="amount"><strong>{{msg.amountExplain}}</strong>{{item.amount}}</p>
						<p class="period">期限{{item.period}}个月</p>
					</div>
				</div>
				<div>
					<p class="text">{{msg.interestRateExplain}}</p>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../scss/week.scss';
	.scatter {
		padding: 0px 15px;
		color: $color;
		font-size: 10px;
		.list {
			padding: 20px 0px;
			border-bottom: 1px solid $color;
			.s-top {
				line-height: 20px;
				.arrow {
					@include arrow (5px, black, left);
					top: 5px;
					left: 3px;
					&:after {
						content: '';
						@include arrow (5px, #fff, left);
						top: -10px;
						left:  -7px;
					}
				}
			}
			.body {
				padding: 5px 0;
				.num {
					font-size: 25px;
						span {
							font-size: 10px;
						}
				}
				.right{
					border-left: 1px solid $color;
					padding-left: 20px;
					p{
						line-height: 20px;
					}
				}
			}
		}
	}
	
</style>

<script type="text/javascript">
	export default {
		data() {
			return {
				msg: null,
				list: '',
				mt: ""
			}
		},
		created() {
			this.$http.get('/data/scattered.json')
			.then(({ data }) => {
				this.list = data.body.loanInfoList;
				this.msg = data.body.loanInfoExplain;
				this.mt = data.mt
				console.log(this.msg)

			})
		}
	}
</script>