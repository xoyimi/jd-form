<template>
    <div id="app">
        <audio id="bgmusic" preload autoplay loop src="../src/assets/images/bgm.mp3"></audio>
        <router-view/>
    </div>
</template>

<script>
    // import Vue from "vue";
    import wx from "weixin-js-sdk";

    export default {
        name: "App",
        created() {
                Vue.axios.get('http://xoyimi.top/getWxConfig').then((res)=>{
                  let wxConfig=JSON.parse(res)
                    wx.config({
                        // 配置信息, 即使不正确也能使用 wx.ready
                        debug: false,
                        appId: 'wx80008f1cc41d8a0d',
                        timestamp: wxConfig.timestamp,
                        nonceStr: wxConfig.nonce,
                        signature: wxConfig.signature,
                        jsApiList: ['updateAppMessageShareData']
                    });
                })
            this.$wx.ready(() => {
                document.getElementById('bgmusic').play();
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
