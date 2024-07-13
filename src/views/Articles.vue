<template>
    <div class="bg">
        <Headbanner></Headbanner>
        <div class="toppic">
            <img :src="onlyArticle.picture" alt="">
        </div>
        <div class="book">
            <el-card v-html="ArticleContent">
            </el-card>
        </div>
        <Myfooter></Myfooter>
    </div>
</template>

<script>
import Headbanner from "../components/Headbanner.vue"
import Myfooter from "../components/Myfooter.vue"
import MarkdownIt from 'markdown-it'
export default {
    name: 'Articles',
    components: {
        Headbanner,
        Myfooter
    },
    data() {
        return {
            onlyArticle: '',//单条数据
            ArticleContent: '',//解析后文章内容
            indexArticle: '',//文章ID
        }
    },
    computed: {
        allArticles() {
            return this.$store.state.articlelist.Articles
        },
    },
    mounted() {
        this.getone()
        // .then((result) => {
        //     const md = new MarkdownIt();
        //     this.ArticleContent = md.render(result.article_contend);
        //     this.onlyArticle = result;
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
        const md = new MarkdownIt()
        const result = md.render(this.onlyArticle.article_contend)
        this.ArticleContent = result

    },
    // watch: {
    //     onlyArticle: {
    //         immediate: true,
    //         handler() {
    //             if (this.onlyArticle) {
    //                 const md = new MarkdownIt()
    //                 const result = md.render(this.onlyArticle.article_contend)
    //                 this.ArticleContent = result
    //             }
    //         }
    //     }
    // },
    methods: {
        //获取相应文章
        getone() {
            var result = ''
            this.indexArticle = this.$route.params.articleId
            // console.log(this.allArticles)
            this.allArticles.forEach(item => {
                if (item._id == this.indexArticle) {
                    result = item
                }
            });
            this.onlyArticle = result
        },
        // getone() {
        //     console.log(this.$route.params.articleId)
        //     this.indexArticle = this.$route.params.articleId;
        //     return new Promise((resolve, reject) => {
        //         const result = this.allArticles.find(
        //             (item) => item._id == this.indexArticle
        //         );
        //         if (result) {
        //             resolve(result);
        //         } else {
        //             reject(`Cannot find article with ID: ${this.indexArticle}`);
        //         }
        //     });
        // },
    }

}
</script>

<style lang="less" scoped>
.bg {
    background-color: #F2F3F5;
}

.toppic {
    width: 100%;
    height: 376px;

    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
}

.book {
    margin: 16px auto;

    .el-card {
        width: 800px;
        // height: 1200px;
        margin: 0 auto;
        padding: 20px 20px;

        ::v-deep .el-card__body {
            width: 800px;
            padding: 0;
        }
    }
}
</style>