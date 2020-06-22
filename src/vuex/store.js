import Vue from 'vue'
import Vuex from 'vuex'
import news from '@/vuex/news'
import user from '@/vuex/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        news,user
    }
});