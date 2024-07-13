<template>
    <div class="myFooter-wrap">
        <div class="myFooter">
            <div class="footer-title">备案号185646652269566</div>
            <div class="icp">本网站由 <a href="https://poetize.cn" target="_blank">寻国记</a> 强力支持</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Myfooter',
    data() {
        return {}
    },
    // methods: {
    //     getArticles() {
    //         this.$store.dispatch('getArticles')
    //     }
    // },
    // mounted() {
    //     this.getArticles()
    // }
}
</script>

<style lang="less" scoped>
.myFooter-wrap {
    user-select: none;
    animation: hideToShow 2s;
}

.myFooter {
    border-radius: 1.5rem 1.5rem 0 0;
    background: linear-gradient(to right, #365030, #71A299);
    text-align: center;
    color: var(--white);
    background-size: 300% 300%;
    animation: gradient 10s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
}

.footer-title {
    padding-top: 10px;
    font-size: 16px;
}


.icp,
.icp a {
    color: var(--maxGreyFont);
    font-size: 13px;
}

.icp {
    padding-top: 10px;
    padding-bottom: 10px;
}

.icp a {
    text-decoration: none;
    transition: all 0.3s;
}

.icp a:hover {
    color: var(--themeBackground);
}
</style>