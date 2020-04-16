<template>
    <div id="app">
        <audio id="bgmusic" autoplay preload loop>
            <source src="../src/assets/images/bgm.mp3">
        </audio>
        <router-view/>
    </div>
</template>

<script>
    import Vue from "vue";
    import wx from "weixin-js-sdk";

    export default {
        name: "App",
        data(){
            imgUrl:require('../static/logo.jpg')
        },
        created() {
                Vue.axios.get('http://lealai.cn:8080/api/user').then((response)=>{
                    wx.config({
                        // 配置信息, 即使不正确也能使用 wx.ready
                        debug: false,
                        appId: 'wx80008f1cc41d8a0d',
                        timestamp: 2222222,
                        nonceStr: 'asdasdasdasd',
                        signature: response.data.signature,
                        jsApiList: ['updateAppMessageShareData','updateTimelineShareData']
                    });
                })
            this.$wx.ready(() => {
                console.log(' this.$wx.ready')
                this.$wx.updateAppMessageShareData({
                    title: '', // 分享标题
                    desc: '从新出发 有你财好', // 分享描述
                    link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: this.imgUrl, // 分享图标
                    success: function () {
                        // 设置成功
                        console.log('success')
                    },
                    error:function (error) {
                            console.log(error)
                    }
                })
                document.getElementById('bgmusic').play();
            });
        }
    };
</script>
<style>
    html, body {
        height: 100%;
    }

    #app {
        height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
