<template>
    <div id="app">
        <audio id="bgmusic" preload autoplay loop src="../src/assets/images/bgm.mp3"></audio>
        <router-view/>
    </div>
</template>

<script>
    import wx from "weixin-js-sdk";

    export default {
        name: "App",
        data() {
            return {
                imgUrl: require('@/assets/images/share-logo.jpg')
            }
        },
        mounted() {
            this.$axios({
                method: 'post',
                url: 'http://xoyimi.top/getWxConfig',
                data: {url: encodeURIComponent(location.href.split('#')[0])} //向服务端提供授权url参数，并且不需要#后面的部分
            }).then((res) => {
                let wxConfig = res.data;
                console.log(encodeURIComponent(location.href.split('#')[0]))
                wx.config({
                    debug: true,
                    appId: 'wx80008f1cc41d8a0d',
                    timestamp: wxConfig.timestamp,
                    nonceStr: wxConfig.noncestr,
                    signature: wxConfig.signature,
                    jsApiList: ['checkJsApi', 'updateAppMessageShareData']
                });
                wx.error(function(res){
                    console.log("config错误信息",res)
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                });
            })
            wx.checkJsApi({
                jsApiList: ['updateAppMessageShareData'],
                success: function (res) {
                    console.log(res)
                }
            });
            wx.ready(() => {
                document.getElementById('bgmusic').play();
                this.$wx.updateAppMessageShareData({
                    title: '从新出发 有你财好', // 分享标题
                    desc: '这里是描述信息，这里是描述信息', // 分享描述
                    imgUrl: this.imgUrl, // 分享图标
                    success: function () {
                        // 用户点击了分享后执行的回调函数
                        console.log('用户点击了分享后执行的回调函数')
                    }
                });

            });
        },

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
