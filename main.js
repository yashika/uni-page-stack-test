import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.mixin({
	onLoad(){
		getApp().globalData.history.push(this.$page.route.slice(-1))
	}
})
const app = new Vue({
    ...App
})
app.$mount()
