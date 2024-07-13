import axios from 'axios'
export default {
    namespace: true, //开启模块化
    actions: {
        getArticles(context, value) {
            axios.get(process.env.BASE_URL + "api/essayList/getEssay").then((res) => {
                if (res.data.code === 200) {
                    context.commit('SET_ARTICLES', res.data.rows)
                    // console.log(context)
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    mutations: {
        SET_ARTICLES(state, value) {
            state.Articles = value;
        }
    },
    state: {
        Articles: []
    },
    getters: {}
}