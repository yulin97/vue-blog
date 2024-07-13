<template>
    <div>
        <div class="header">
            <Headbanner></Headbanner>
            <div class="inner-header flex">

            </div>
            <div class="lifewords">
                <h1 style="font-weight: bold;">天生我材必有用，直挂云帆济沧海。</h1>
                <span>/*Welcome to my blog*/</span>
            </div>
            <div>
                <!--
                xmlns:SVG命名看见URI
                viewBox:定义当前视口（viewbox）中绘制区域的位置大小
                preserveeAspectRatio：定义了绘制区域在视口中的对齐方式
                shape-rendering：定义了形状的渲染方式（如何呈现头像的锯齿效果）
             -->
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <!-- 定义一个defs元素，用于存储各种元素的定义，可以被其他元素引用。
                    在defs元素中定义了一个名为“gentle-wave”的路径元素，用于描述波浪形状
                    改路径秒苏联一系列二次贝塞尔曲线的控制点坐标，从而实现了波浪形状 -->
                    <defs>
                        <path id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <!-- 定义一个g元素，用于讲多个图形组合在一期，并应用一些样式
                    在g元素中使用use元素多次引用了赚钱定义的名为gentle-wave的路径元素
                    通过设置不同的x，y坐标和填充颜色，实现了波浪形状和渐变效果 -->
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </div>
        <div class="midbox">
            <!-- <el-card id="elcard_box" v-for="onepice in onepice_list" :key="onepice.id" @click.native="tobook()">
                <div class="right_article">
                    <div>{{ onepice.timetitle }}</div>
                    <div style="font-size:26px">{{ onepice.article_title }}</div>
                    <div>
                        {{ onepice.article_contend }}
                    </div>
                </div>
                <div id="left_img">
                    <el-image :src="onepice.picture" :fit="fit" :lazy="true"></el-image>
                </div>
            </el-card> -->
            <div class="card_box" v-for="(onepice, index) in onepice_list" :key="onepice._id" @click="tobook(onepice._id)"
                :class="{ 'flex-row-style': ((index + 1) % 2) === 0 }">
                <div class="rimg" :class="{ 'even_style': ((index + 1) % 2) === 0 }">
                    <img :src="onepice.picture" alt="">
                </div>
                <div class="boxt">
                    <img :src="onepice.picture" alt="">
                    <div class="wordsline">
                        <ul>
                            <li>{{ onepice.timetitle }}</li>
                            <li>{{ onepice.article_title }}</li>
                            <li v-html="markdownIt.render(onepice.article_contend)">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <i class="el-icon-arrow-down" @click="toBottom('.midbox')"></i>
        <Myfooter></Myfooter>
        <!-- <div class="content flex">
        </div> -->
    </div>
</template>

<script>
import Headbanner from './Headbanner.vue';
import Myfooter from "./Myfooter.vue";
import MarkdownIt from 'markdown-it'
import { mapState } from "vuex"
export default {
    components: { Myfooter, Headbanner },
    name: "index",
    data() {
        return {
            markdownIt: new MarkdownIt(),
        }
    },
    methods: {
        tobook(articleId) {
            this.$router.push({ name: 'Articles', params: { articleId: articleId } })
        },
        // getarticle() {
        //     this.$axios.get("api/essayList/getEssay").then((res) => {
        //         if (res.data.code === 200) {
        //             console.log(res.data.rows)
        //             this.onepice_list = res.data.rows

        //         }

        //     }).catch((err) => {
        //         console.log(err)
        //     })
        // },
        getArticles() {
            this.$store.dispatch('getArticles')
        },
        toBottom(selector) {
            let pageId = document.querySelector(selector);
            window.scrollTo({
                top: pageId.offsetTop - 80,
                behavior: "smooth"
            });
        },

    },
    computed: {
        isEven: function (index) {
            return index % 2 == 0
        },
        // onepice_list() {
        //     return this.$store.state.articlelist.Articles
        // },
        ...mapState({ onepice_list: state => state.articlelist.Articles })
    },
    mounted() {
        this.getArticles() //获取文章信息
    },
};
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}

.el-icon-arrow-down {
    font-size: 58px;
    position: absolute;
    left: 50%;
    bottom: 236px;
    z-index: 101;
    cursor: pointer;
    color: #fff;
    animation: my-shake 1.5s ease-out infinite;

    /* 下移 */
    @keyframes my-shake {
        0% {
            opacity: 1;
            transform: translateY(0px);
        }

        30% {
            opacity: 0.5;
            transform: translateY(25px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
}

.card_box {
    display: flex;
    margin: 20px auto;
    width: 800px;
    height: 306px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);

    .boxt {
        width: 66.6666666%;
        position: relative;

        img {
            // width: 800px;
            // height: 306px;
            // object-fit: cover;
            filter: blur(1.875rem) brightness(.8);
            object-fit: cover;
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            transform: scale(1.55);
        }

        .wordsline {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 21;
            width: 100%;
            height: 100%;
            top: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            ul {
                width: 80%;
                height: 60%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                // overflow: hidden;

                li {
                    list-style: none;
                    color: #fff;
                    display: inline-block;
                }

                li:first-child {
                    font-size: 13px;
                }

                li:nth-child(2) {
                    font-size: 29px;
                    font-weight: bold;
                    line-height: 60px;
                }

                li:last-child {
                    flex-shrink: 0;
                    height: 44px;
                    width: auto;
                    text-indent: 2em;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;

                }
            }
        }
    }

    .rimg {
        display: block;
        z-index: 10;
        margin: 0;
        border-width: 0;
        width: 33.333333%;
        clip-path: polygon(0 0, 100% 0, 94% 100%, 0 100%);

        img {
            filter: blur(0);
            opacity: 1;
            object-fit: cover;
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        img:hover {
            transform: scale(1.05) rotate(1deg);
            transition: transform .3s cubic-bezier(0, 0, .2, 1);
        }
    }
}

// .card_box .rimg {
//     clip-path: polygon(6% 0, 100% 0, 100% 100%, 0 100%);
// }

//定义反转卡片的样式更改
.even_style {
    clip-path: polygon(6% 0, 100% 0, 100% 100%, 0 100%) !important;
}

.flex-row-style {
    flex-direction: row-reverse
}


#elcard_box {
    width: 816px;
    height: 256px;
    margin: 20px auto;

    ::v-deep .el-card__body {
        display: flex;
        // width: 100%;
        // height: 100%;

        .right_article {
            width: 65%;
            height: 100%;

            div {
                margin-top: 16px;
                overflow: hidden;
            }
        }

        #left_img {
            width: 35%;
            height: 100%;
        }
    }
}

h1 {
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 48px;
}

p {
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    font-size: 30px;
    color: #333333;
}

.header {
    position: relative;
    text-align: center;
    /* background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%); */
    background-image: url("../assets/images/daymode.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;

    .lifewords {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.inner-header {
    height: 86vh;
    width: 100%;
    margin: 0;
    padding: 0;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;
}

.content {
    position: relative;
    height: 20vh;
    text-align: center;
    background-color: white;
}

.parallax>use {
    /* 使use元素执行move-forever动画 */
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    /* 延迟2秒启动动画  */
    animation-delay: -2s;
    /* 设置动画持续时间为7秒 */
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}

@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }

    .content {
        height: 30vh;
    }

    h1 {
        font-size: 24px;
    }
}
</style>