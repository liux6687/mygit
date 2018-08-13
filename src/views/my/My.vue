<!--公共页-->
<template>
    <div class="big">
        <div class="box mg-b">
            <div class="header-part">
                <div class="fl">
                    <img class="headimg" :src="body.headImg" alt="">
                    <p class="nickname">{{body.forumNickName}}</p>
                    <p class="viptag">{{member.levelDesc}}</p>
                </div>
                <p class="fr">设置</p>
            </div>
            <div class="lending-board">
                <div class="up">
                    <p>昨日出借回报(元)</p>
                    <p class="f20">{{body.available}}</p>
                </div>
                <div class="down">
                    <div class="fl">
                        <router-link tag="div" to="totallending">
                            <p class="ib pr6">累计出借回报(元)</p>
                            <span class="arrow ib"></span>
                        </router-link>
                        <p class="f16">{{body.available}}</p>
                    </div>
                    <div class="fr">
                        <router-link  tag="div" to="account">
                            <p class="ib pr6">我的资产(元)</p>
                            <span class="arrow ib"></span>
                        </router-link>
                        <p class="f16">{{body.available}}</p>
                    </div>
                </div>
            </div>
            <div class="redbag">
                <p class="p20">可用红包(元)<span class="num">{{body.redBagAmount}}</span></p>
                <p class="p20">可用加息券(张)<span class="num">{{body.lastProfitStatus}}</span></p>
            </div>
            <div class="restmoney">
                <p class="p20">可用金额(元)<span class="avilablenum">{{body.available}}</span></p>
                <span class="btn1">充值</span>
                <span class="btn2">提现</span>
            </div>
        </div>
        <div class="mg-b box1">
            <div class="out">
                <div class="list" v-for="(item, index) in rowlist" :key="index" >
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
            <div class="common">
                <span class="fl">{{columnList.title}}</span>
                <span class="fr">
                    <span class="common-innertext">{{columnList.tips}}</span>
                    <span class="arrow1"></span>
                    <span class="arrow2"></span>
                </span>
            </div>
        </div>
        <div class="servicelist">
            <ul class="list1" v-for="(item, index) in serviceList" :key="index">
                <li class="common">
                    <span class="fl">{{item.title}}</span>
                    <span class="fr">
                        <span class="common-innertext">{{item.tips}}</span>
                        <span class="arrow1"></span>
                        <span class="arrow2"></span>
                    </span>
                </li>
            </ul>
        </div>
        <!--<router-view></router-view>-->
    </div>
</template>
<style type="text/css">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .big {
        background: #efefef;
    }
    .box {
        padding: 0 20px;
    }
    .mg-b {
        margin-bottom: 15px;
        background: #fff;
    }
    .header-part {
        width: 100%;
        padding: 10px 0px;
        font-size: 13px;
        overflow: hidden;
        vertical-align: middle;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: #474748;
    }
    .header-part .fl {
        float: left;
        width: 85%;
        display: flex;
        height: 100%;
    }
    .header-part .fl .headimg {
        display: block;
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    .header-part .fl .nickname {
        height: 16px;
        line-height: 35px;
    }
    .header-part .fl .viptag {
        width: 50px;
        background: #FF8B01;
        height: 16px;
        color: #EFDDAD;
        border-radius: 16px;
        font-size: 12px;
        margin-left: 10px;
        padding: 1px 5px;
        text-align: center;
        line-height: 15px;
        position: relative;
        top: 10px;
    }
    .header-part .fr {
        float: right;
        height: 100%;
        line-height: 35px;
        margin: 0;
    }
    .lending-board {
        height: 170px;
        background: -webkit-linear-gradient(left, #FD8703 , #FAB43B); ;
        border-radius: 3px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: #EFDDAD;
        font-size: 12px;
        padding: 10px 20px;
        line-height: 20px;
    }
    .lending-board .up {
        padding-bottom: 40px;
    }
    .f20 {
        font-size: 30px;
        line-height: 40px;
        color: #EEFEFD;
    }
    .pr6 {
        padding-right: 6px;
    }
    .f16 {
        font-size: 16px;
        color: #EEFEFD;
        line-height: 30px;
    }
    .ib {
        display: inline-block;
    }
    .lending-board .down .fl {
        float: left;
    }
    .lending-board .down .fr {
        float: right;
    }
    .arrow {
        width: 0;
        height: 0;
        border-left: 5px solid #EEFEFD;
        border-right: 5px solid transparent;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }
    .redbag {
        font-size: 12px;
        color: #999;
        display: flex;
        width: 100%;
        border-bottom: 1px solid #efefef;
    }
    .p20 {
        padding: 20px 0;
    }
    .redbag p {
        flex: 1;
    }
    .redbag p:first-child {
        padding-right: 100px;
    }
    .redbag p .num {
        font-size: 16px;
        padding-left: 10px;
        color: #EA9F3E;
        font-weight: 600;
    }
    .restmoney {
        font-size: 12px;
        color: #999;
        width: 100%;
    }
    .restmoney .p20 {
        display: inline-block;
        padding-right: 100px;
    }
    .avilablenum {
        font-size: 16px;
        color: #44434A;
        padding-left: 10px;
        font-weight: 600;
    }
    .restmoney .btn1, .btn2 {
        font-size: 15px;
        border: 1px solid #3A393E;
        border-radius: 4px;
        padding: 2px 10px;
        color: #3A393E;
    }
    .restmoney .btn1 {
        margin-right: 10px;
    }
    .box1 {
       width: 100%;
    }
    .box1 .out {
        padding: 20px 0;
        display: flex;
        border-bottom: 1px solid #efefef;
    }
    .box1 .list {
        width: 25%;
        display: inline-block;
        font-size: 13px;
        color: #44434A;
        flex: 1;
        padding: 0 20px;
    }
    .list img {
        display: block;
        width: 45px;
        height: 45px;
    }
    .common {
        font-size: 15px;
        color: #44434A;
        padding: 20px 0px;
        margin: 0 20px;
        overflow: hidden;
    }
    .common .common-innertext {
        color: #C0C0C2;
        font-size: 12px;
    }
    .common .arrow2 {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: 8px solid #C0C0C2;
        border-right: 8px solid transparent;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        position: relative;
        top: 3px;
        left: -7px;
    }
    .common .arrow1 {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: 8px solid #fff;
        border-right: 8px solid transparent;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        position: relative;
        top: 3px;
        left: 8px;
        z-index: 1;
    }
    .servicelist {
        background: #fff;
    }
    .servicelist .common {
        border-bottom: 1px solid #efefef;
    }
    .common .fl {
        float: left;
    }
    .common .fr {
        float: right;
    }


</style>

<script>
    export default {
        data() {
            return {
                body: {},
                serviceList: [],
                rowlist: [],
                member: {},
                columnList: {}
            }
        },
        created() {
            this.$http.get('/data/my.json')
                .then(({data}) => {
                    console.log(data);
                    this.body = data.body;
                    console.log("body",this.body);
                    this.serviceList = data.body.serviceList;
                    this.rowlist = data.body.rowList;
                    this.member = data.body.member;
                    this.columnList = data.body.columnList[0];
                    console.log("serviceList",this.serviceList);
                    console.log("member",this.member);
                    console.log("rowlist",this.rowlist);
                    console.log("columnList", this.columnList);
                })
        }

    }
</script>