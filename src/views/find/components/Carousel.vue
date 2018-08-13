<template>
    <div class="carousel">
        <!-- 轮播图列表 -->
        <transition-group tag="ul" class="slide-ul" name="list">
            <li v-for="(item, index) in (bannerList.concat(bannerList1))" :key="index" v-show="index === currentIndex">
                <img :src="item.imageUrl" >
            </li>
        </transition-group>
    </div>
</template>

<style type="text/css" lang='scss'>
@import './findbase.scss';
    * {
        margin: 0;
        padding: 0;
    }
    .carousel {
        position: relative;
        overflow: hidden;
        height: 200px;
        li {
            position: absolute;
            @include wh(100%, 100%);
            list-style: none;
            img {
                @include wh(100%, 100%);
            }
        }
        .list-enter-active {
          transition: all 1s ease;
          transform: translateX(0);
        }

        .list-leave-active {
           transition: all 1s ease;
           transform: translateX(-100%)
        }

        .list-enter {
           transform: translateX(100%)
        }

        .list-leave {
           transform: translateX(0);
        }
    }
</style>

<script type="text/javascript">
    export default {
        // 定义静态数据
        data() {
            return {
                bannerList: [],
                bannerList1: [{imageUrl: 'http://news.iqianjin.com/news/u/cms/www/201807/311843257fqo.jpg'}],
                currentIndex: 0,
                timer: ''
            }

        },

        // 组件创建完成，请求数据
        created() {
            this.$http.get('/data/list.json')
                .then(({ data }) => {
                    // console.log(data);
                    this.bannerList = data.body.banner;
                    // console.log(this.bannerList);
                })

                // 在某个动作有可能改变DOM元素结构的时候，对DOM一系列的js操作都要放进Vue.nextTick()的回调函数中
                this.$nextTick(() => {
                    this.timer = setInterval(() => {
                        this.autoPlay();
                    }, 3000)
                })
        },

        // 定义方法
        methods: {
            autoPlay() {
                this.currentIndex++;
                if (this.currentIndex >= this.bannerList.length) {
                    this.currentIndex = 0;
                }
            },
        }
    }
</script>