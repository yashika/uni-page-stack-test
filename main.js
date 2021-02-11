import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.mixin({
	onLoad(){
		getApp().globalData.history.push(this.$page.route.slice(-1)) // 说明:页面被打开就添加一条当前页面的记录到history, 用于日后的链路跟踪
	}
})
const app = new Vue({
    ...App
})
app.$mount()
