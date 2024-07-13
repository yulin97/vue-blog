import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import articlelist from "./articlelist";
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        articlelist
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})