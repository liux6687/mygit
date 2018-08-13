<template>
	<div class="u-list">
		<ul class="u-ul flex">
			<router-link :to="'/user/' + item.router" tag="li" v-for="(item, index) in list" class="f1" :key="index">
				{{item.text}}
				<p></p>
			</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>
<style type="text/css" lang="scss">
@import '../../scss/week.scss';
	.u-list {
		li {
			padding: 10px 0px;
			background-color: $color;
			text-align: center;
			position: relative;
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				list: 
				[
					{text: "借款人信息", router: 'user1/1'},
				 	{text: "项目详情",  router: 'user2/2'},
				 	{text: "出借记录", router: 'user3/3'},
				  	{text: "债券记录", router: 'user4/4'}
				 ],
				 isshow: false,
			}
		}
	}
</script>