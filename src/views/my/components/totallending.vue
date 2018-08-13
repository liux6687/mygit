<template>
    <div class="bigbox">
        <div class="header">
            <router-link tag="div" to="my" class="jiantou">
                <span class="arrow1"></span>
                <span class="arrow2"></span>
                <span class="line">—</span>
            </router-link>
            <p>累计出借回报</p>
        </div>
        <div class="content" v-for="(item, index) in productList" :key="index">
            <div class="item">
               <div class="out">
                   <p class="title">{{item.productName}}</p>
               </div>
                <div class="intro">
                    <div class="left">
                        <p>出借(元)</p>
                        <span class="loan">{{body.regularInvest}}</span>
                    </div>
                    <div class="right">
                        <p>回报(元)</p>
                        <span class="profit">{{body.regularProfit}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                body: {},
                productList: []

            }
        },
        mounted() {
            this.$http.get('/data/totallending.json')
                .then(({data}) => {
                    this.body = data.body;
                    console.log("body", this.body);
                    this.productList = data.body.productList;
                    console.log("productList", this.productList);
                })
        }

    }
</script>

<style  type="text/css" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .bigbox {
        width:100%;
        background: #efefef;
        height: 800px;
    }
    .header {
        display: flex;
        padding: 20px 15px;
        background: #fff;
        margin-bottom: 15px;
    }
    .header .arrow1 {
        display: inline-block;
        width: 0;
        height: 0;
        border-right: 8px solid #fff;
        border-left: 8px solid transparent;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        position: relative;
        top: 4px;
        left: -6px;
        z-index: 1;
    }
    .header .arrow2 {
        display: inline-block;
        width: 0;
        height: 0;
        border-right: 8px solid #000;
        border-left: 8px solid transparent;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        position: relative;
        top: 4px;
        left: -23px;
    }
    .line {
        position: relative;
        top: 0;
        left: -29px;
        z-index: 10;
    }
    .jiantou {
        padding-right: 70px;
    }
    .item {
        margin-bottom: 15px;
        background: #fff;
        font-size: 13px;
    }
    .out {
        width: 100%;
        border-bottom: 1px solid #efefef;
    }
    .title {
        height: 20px;
        width: 100%;
        padding: 10px 35px;
        color: #696969;
    }
    .intro {
        display: flex;
    }
    .intro .left, .right {
        flex: 0.5;
        padding-left: 20px;
        margin: 10px 0;
    }
    .intro .left {
        border-right: 1px solid #efefef;
    }
    .left p {
        height: 20px;
        width: 100%;
        padding: 0px 15px;
        font-weight: bold;
    }
    .right p {
        height: 20px;
        width: 100%;
        padding: 0px 15px;
        color: #696969;
    }
    .loan {
        display: block;
        height: 30px;
        width: 100%;
        padding: 10px 15px 0px 15px;
        font-size: 18px;
        color: #323232;
    }
    .profit {
        display: block;
        height: 30px;
        width: 100%;
        padding: 10px 15px 0px 15px;
        font-size: 18px;
        color: #FC5B3D;
    }
</style>