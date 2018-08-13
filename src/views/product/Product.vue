<template>
	<div id="pros">
		<div class="header">
			<ul>
				<router-link v-for="(item, index) in title" :key="item.nam" tag="li" :to="'/product/' + item.route" :class="{title: index == isActive}"><span @click="touch(index, $event)">{{item.nam}}</span>
				</router-link>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>
	
<style type="text/css" scoped lang="scss">
@import './scss/productBase.scss';
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
	.header {

		border-bottom: 1px solid #ccc;
		// width: 100%;
		height: 53px;
		ul {
			position: fixed;
			background: #fff;
			z-index: 100;
			width: 100%;
			height: 50px;
			display: flex;
			li {
				text-align: center;
				list-style: none;
				flex: 1;
				font-size: 16px;
				line-height: 50px;
				margin: 0 10px;
				span {
					display: block;
					width: 100%;
					height: 100%;
					line-height: 50px;
				}
				&:last-child {
					margin-right: 0;
				}
				
				// &:first-child {
				// 	border-bottom: 3px solid #000;
				// }
			}
			.title {
					border-bottom: 3px solid #000;
				}
		}
	}
</style>

<script type="text/javascript">
	export default {
		data() {
			return {
				title: [{nam:"整存宝+", route: "overall"},
						{nam:"零存宝+", route: "scatter"},
						{nam:"七天宝", route: "week"},
						{nam:"散标", route: "scattered"}],
				isActive: -1
				}
		},
		methods: {
			touch(index, e) {
				console.log(e)

				this.isActive=index;
			}
	},
	mounted() {
		let lis = document.getElementsByTagName("li")
		let lisArr = Array.from(lis)
		console.log(lisArr)
		lisArr[0].classList.add("title")
		}
	}
	
</script>