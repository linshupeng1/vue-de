import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Apple from '@/components/apple'
import Banana from '@/components/banana'
import Redapple from '@/components/redapple'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/apple'
    // },
    {
      path: '/',
      name: 'index',
      component: Hello
    },
    {
      path: '/apple',
      name: 'apple',
      component: Apple,
      children: [
        {
          path: 'red',
          name: 'red',
          component: Redapple
        }
      ]
    },
    {
      path: '/banana',
      name: 'banana',
      component: Banana
    }
  ]
});


