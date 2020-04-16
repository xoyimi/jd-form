<template>
    <div id="app">
        <audio id="bgmusic" autoplay preload loop>
            <source src="../src/assets/images/bgm.mp3">
        </audio>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "App",
        created() {
          console.dir( this.$wx.ready)
          this.$wx.ready(function () {
                console.log('$wx.ready')
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
