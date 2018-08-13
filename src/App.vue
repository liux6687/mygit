<!-- 根组件 -->
<template>
  <div id="app">

    <router-view></router-view>
    <div class="footer">
      <ul>
        <router-link v-for="(item, index) in icons" :key="index" :to="item.route" tag="li">
          <img :src="'image/' + item.img"></img>
          <p>{{item.text}}</p>
        </router-link>         
      </ul>
    </div>

  </div>
</template>

<script>


</script>

<style lang="scss">
  * {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  body, html {
    background-color: #F8F8F9;
  }
  .footer {
    position: fixed;
    height: 40px;
    width: 100%;
    bottom: 0px;
    padding: 4px 0 5px;
    border-top: 1px solid #efefef;
    background-color: #fff;
    ul {  
      display: flex;
      li {
        flex: 1;
        text-align: center;
        img {
          width: 25%;
        }
        p {
           font-size: 12px;
        }
      }
    }
  }

</style>
<script>
  export default {
    data() {
      return {
          icons: [
            { img: '02.png', text: '首页', route: '/home' },
            { img: '03.png', text: '产品', route: '/product/overall' },
            { img: '04.png', text: '发现', route: '/find' },
            { img: '05.png', text: '我的', route: '/my' }
          ]
      }
    },

  }
</script>


