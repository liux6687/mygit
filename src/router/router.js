import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue';
import HomeRouter from '../views/home/homerouter.js';
import Find from '../views/find/components/Main.vue';
import Product from '../views/product/Product.vue'
import Overall from '../views/product/components/Overall.vue'
import Scatter from '../views/product/components/Scatter.vue'
import Deatial from '../views/product/components/Detial.vue'
import Scattered from '../views/product/components/Scattered.vue';
import Week from '../views/product/components/week.vue';
import My from '../views/my/My.vue';
import Account from '../views/my/components/account.vue';
import TotalLending from '../views/my/components/totallending.vue';
import User from '../views/product/components/user/user.vue';
import User1 from '../views/product/components/user/user1.vue';
import User2 from '../views/product/components/user/user2.vue';
import User3 from '../views/product/components/user/user3.vue';
import User4 from '../views/product/components/user/user4.vue';




Vue.use(Router)

export default new Router({
  routes: [
  		{
		    path: '/',
		    redirect: "/home"
		  },
        {
        path: '/user',
        component: User,
        children: [
          {path: 'user1/:id', component: User1},
          {path: 'user2/:id', component: User2},
          {path: 'user3/:id', component: User3},
          {path: 'user4/:id', component: User4},
        ]
      },
		  {
		    path: '/home',
		    component: Home
		  },
		  {
		    path: '/find',
		    component: Find
		  },
    	{
        path: '/product/',
        component: Product,
        children: [
         {
          path: 'scatter',
          component: Scatter
        },
        {
          path: 'overall',
          component: Overall
        },
        {
          path: 'scattered',
          component: Scattered
        },
        {
          path: 'week',
          component: Week
       }

    ]
  },
    {
      path: '/detail/:id',
      component: Deatial
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/account',
        component: Account
    },
    {
        path: '/totallending',
        component: TotalLending
    }
  ]
})









