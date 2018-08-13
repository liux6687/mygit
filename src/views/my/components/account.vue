<template>
    <div class="bigbox1">
        <div class="header1">
            <router-link tag="div" to="my" class="jiantou">
                <span class="arrow1"></span>
                <span class="arrow2"></span>
                <span class="line">—</span>
            </router-link>
            <p class="header-text">资产总额</p>
        </div>
        <div class="content">
            <div id="circle">
                    <div id="b"></div>
                    <div id="t"></div>
                    <div id="p">资金总额(元)</div>
                </div>
        </div>
    </div>
</template>
<style type="text/css" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .header1 {
        display: flex;
        padding: 20px 15px;
        border-bottom: 1px solid #efefef;
    }
    .header-text {
        margin: 0;
    }
    .header1 .arrow1 {
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
    .header1 .arrow2 {
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
        padding-right: 85px;
    }
    .content div {
        position:absolute;
        width:200px;
        height:200px;
        border-radius:50%;
    }
    /* 圆底 */
    #circle {
        position: relative;
        margin: 30px auto;
    }
    /* 上半部分 */
    #t {
        background-color: white;
        clip: rect(0px,auto,100px,auto);
        transform: rotate(30deg);
        background-color: #ccc;
    }
    /* 下半部分 */
    #b {
        background-color: white;
        clip: rect(45px,auto,auto,auto);
        background-color: #ccc;
    }
    /* 中心白 */
    #p {
        width: 150px;
        height: 150px;
        line-height: 150px;
        left: 25px;
        top: 25px;
        text-align: center;
        border-radius: 50%;
        background-color: #FFFFFF;
    }
    .textpart {
        position: relative;
    }
    .innertext {
        position: absolute;
        top: -130px;
        left: 0px;
    }
</style>
<script>
    export default {
        data () {
            return {
                list: []
            }
        },
        mounted() {
            this.$http.get('/data/account.json')
                .then(({ data }) => {
                    this.list = data.body.list;
                    console.log("list", this.list);
                })
        }
    }

</script>