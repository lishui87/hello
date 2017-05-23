import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import Login from './components/Login'
import Index from './components/Index'
import User from './components/User'
import Readme from './components/Readme'
import UserVip from './components/UserVip'
import UserShop from './components/UserShop'
import Completed from './components/Completed'
import Unfinished from './components/Unfinished'
import News from './components/News'
import NewsEdite from './components/NewsEdite'
import Picture from './components/Picture'
import PictureEdite from './components/PictureEdite'
import New from './components/New'
import NewAdd from './components/NewAdd'
import NewEdite from './components/NewEdite'
import Seller from './components/Seller'
import SellerAdd from './components/SellerAdd'
import SellerEdite from './components/SellerEdite'
import Password from './components/Password'
import NewsAdd from './components/NewsAdd.vue'

Vue.config.debug = true
Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueResource)
const router = new Router({
  routes: [
    { name: 'login', path: '/', component: Login },
    {
      path: '/readme',
      component: Index,
      children: [
         { path: '/', component: Readme },
         { path: '/user', component: User },
         { path: '/userVip', component: UserVip },
         { path: '/userShop', component: UserShop },
         { path: '/completed', component: Completed },
         { path: '/unfinished', component: Unfinished },
         { path: '/news', component: News },
         { path: '/newsadd', component: NewsAdd },
         { path: '/newsedite', component: NewsEdite },
         { path: '/picture', component: Picture },
         { path: '/pictureedite', component: PictureEdite },
         { path: '/new', component: New },
         { path: '/newadd', component: NewAdd },
         { path: '/newedite', component: NewEdite },
         { path: '/seller', component: Seller },
         { path: '/selleradd', component: SellerAdd },
         { path: '/selleredite', component: SellerEdite },
         { path: '/password', component: Password }
      ]
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
