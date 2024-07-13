<template>
    <div>
        <div class="bannerbox">
            <span class="webName">Silver Sucks</span>
            <ul class="bannerlist">
                <li><i class="el-icon-tickets"></i>首页</li>
                <li><i class="el-icon-user"></i> 个人中心</li>
                <li>导航页</li>
                <li>聊天室</li>
                <li>友情链接</li>
                <li><i class="el-icon-setting"></i>登录</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { throttle } from 'lodash';
export default {
    name: 'Headbanner',
    data() {
        return {
            scrollDistance: 0,
        }
    },
    methods: {
        // fixtop() {
        //     window.addEventListener('scroll', function () {
        //         const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        //         // console.log(scrollTop);
        //         if (scrollTop > 376) {
        //             const liList = document.querySelectorAll('.bannerlist li');
        //             liList.forEach(li => {
        //                 li.style.color = 'black';
        //             });
        //             this.document.querySelector('.bannerlist').style.backgroundColor = '#FFF';
        //         } else if (scrollTop < 376) {
        //             liList.forEach(li => {
        //                 li.style.color = '#FFF';
        //             });querySelector
        //             this.document.querySelector('.bannerlist').style.backgroundColor = '';
        //         }
        //     });
        // },
        handleScroll: throttle(function () {
            this.scrollDistance = window.pageYOffset;
        }, 100),
    },
    watch: {
        //监听鼠标滚动距离
        scrollDistance(newVal) {
            // console.log(newVal);
            const liList = document.querySelectorAll('.bannerlist li');
            if (newVal > 300) {
                liList.forEach(li => {
                    li.style.color = 'black';
                });
                document.querySelector('.webName').style.color = 'black';
                document.querySelectorAll('.bannerbox')[0].style.backgroundColor = '#FFF';
                document.querySelector('.bannerbox').style.boxShadow = 'rgba(0, 0, 0, .1) 0 5px 20px'
            } else if (newVal < 300) {
                liList.forEach(li => {
                    li.style.color = '#FFF';
                });
                document.querySelector('.webName').style.color = '#FFF';
                document.querySelectorAll('.bannerbox')[0].style.backgroundColor = '';
                document.querySelector('.bannerbox').style.boxShadow = ''
            }
        },
    },
    mounted() {
        // this.fixtop()
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style lang="less" scoped>
.bannerbox {
    display: flex;
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 60px;
    line-height: 60px;
    transition: all 0.3s ease-in-out;

    // backdrop-filter: blur(30px) saturate(180%);
    // box-shadow: rgba(0, 0, 0, .1) 0 5px 20px;
    .webName {
        font-size: 36px;
        font-weight: bold;
        width: 30%;
        height: 100%;
        text-align: left;
    }

    .bannerlist {
        display: flex;
        list-style: none;
        justify-content: flex-end;
        width: 70%;
        height: 100%;

        li {
            display: block;
            height: 60px;
            line-height: 60px;
            margin-left: 10px;
            text-align: center;
            margin-right: 10px;
            font-weight: bold;
            font-size: 18px;
            color: #fff;
        }
    }
}
</style>