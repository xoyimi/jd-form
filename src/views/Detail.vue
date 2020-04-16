<template>
    <div ref="detail" class="detail">
        <!-- 保存图片-->
        <img class="saveImg" :src="saveImg">
        <div class="imgIn">
            <img class="logo" src="../assets/images/logo.png" alt="">
            <img class="a1 " src="../assets/images/a1.png" alt="">
            <img class="a2 " src="../assets/images/a2.png" alt="">
            <img class="a3 " src="../assets/images/a3.png" alt="">
            <img class="a4 " src="../assets/images/a4.png" alt="">
            <img class="a5 " src="../assets/images/a5.png" alt="">
            <img class="a6 " src="../assets/images/a6.png" alt="">
            <img class="a7 " src="../assets/images/a7.png" alt="">
            <img class="shareBtn" src="../assets/images/share.png">
        </div>
        <div class="name">{{this.$route.params.name}}</div>
        <div class="date">
            <img v-if="wanwei" class="wanwei" :src='num[wanwei]' alt="">
            <img v-if="qianwei" class="qianwei" :src='num[qianwei]' alt="">
            <img v-if="baiwei" class="baiwei" :src='num[baiwei]' alt="">
            <img v-if="shiwei" class="shiwei" :src='num[shiwei]' alt="">
            <img class="gewei" :src='num[gewei]' alt="">
        </div>
        <img src="../assets/images/katong.png" class="katong">
    </div>
</template>

<script>
    import html2canvas from 'html2canvas'

    export default {
        name: "Detail",
        data() {
            return {
                saveImg: '',//保存图片url
                date: '',
                time: '',
                gewei: '',
                shiwei: '',
                baiwei: '',
                qianwei: '',
                wanwei:'',
                num: [
                    require('@/assets/images/0.png'), require('@/assets/images/1.png'), require('@/assets/images/2.png'),
                    require('@/assets/images/3.png'), require('@/assets/images/4.png'), require('@/assets/images/5.png'),
                    require('@/assets/images/6.png'), require('@/assets/images/7.png'), require('@/assets/images/8.png'),
                    require('@/assets/images/9.png')],
            }
        },
        created() {
            let date = this.$route.params.date.toString();
            let length = date.length;
            if (length == 1) {
                this.gewei = date[0]
            } else if (length == 2) {
                this.gewei = date[1]
                this.shiwei = date[0]
            } else if (length == 3) {
                this.gewei = date[2]
                this.shiwei = date[1]
                this.baiwei = date[0]
            } else if (length == 4) {
                this.gewei = date[3]
                this.shiwei = date[2]
                this.baiwei = date[1]
                this.qianwei = date[0]
            }else if (length == 5) {
                this.gewei = date[4]
                this.shiwei = date[3]
                this.baiwei = date[2]
                this.qianwei = date[1]
                this.wanwei = date[0]
            }
        },
        mounted() {
            setTimeout(() => {
                html2canvas(this.$refs.detail,).then((canvas) => {
                    this.saveImg = canvas.toDataURL('image/png')
                })
            }, 1500)
        }
    }
</script>

<style scoped>
    .detail {
        height: 100%;
        background-image: url("../assets/images/bg.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: top;

    }

    .saveImg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        z-index: 20;
    }

    .name {
        /*animation-delay:1200ms;*/
        /*animation-fill-mode: backwards;*/
        position: absolute;
        top: 41vw;
        left: 28vw;
        font-size: 5.4vw;
        font-weight: 900;
        color: #89593a;
        border-bottom: 1px solid #89593a;
        letter-spacing: 1vw;
        text-align: center;
        padding: 0 0 2px 0;
    }

    .date {
        width: 24vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 60vw;
        left: 40vw;
    }

    .date img {
        width: 5vw;
    }

    /*.qianwei{*/
    /*    animation-delay: 2000ms;*/
    /*}*/
    /*.baiwei{*/
    /*    animation-delay: 2400ms;*/
    /*}*/
    /*.shiwei{*/
    /*    animation-delay: 2800ms;*/
    /*}*/
    /*.gewei{*/
    /*    animation-delay: 3200ms;*/

    /*}*/
    .katong {
        width: 83px;
        position: absolute;
        bottom: 30px;
        left: 30px;
        animation: heartBeat 3s infinite;
    }

    /*逐渐出场*/
    .imgIn img {
        position: absolute;
        animation-fill-mode: backwards;
    }

    .logo {
        width: 30vw;
        top: 8vw;
        left: 6vw;
    }

    .a1 {
        /*animation-delay:300ms;*/
        width: 25vw;
        top: 8vw;
        right: 18vw;
    }

    .a2 {
        /*animation-delay:500ms;*/
        width: 50vw;
        right: 4vw;
        top: 14vw;
    }

    .a3 {
        /*animation-delay:800ms;*/
        width: 28vw;
        right: 16vw;
        top: 23vw;
    }

    .a4 {
        /*animation-delay:1000ms;*/
        width: 13vw;
        right: 23vw;
        top:28vw;
    }

    .a5 {
        /*animation-delay:1200ms;*/
        width: 50vw;
        top: 50vw;
        left: 27vw;
    }

    .a6 {
        /*animation-delay:1500ms;*/
        width: 34vw;
        top: 69vw;
        left: 33vw;
    }

    .a7 {
        /*animation-delay:1700ms;*/
        width: 42vw;
        top: 123vw;
        left: 29vw;
    }

    .shareBtn {
        width: 34vw;
        top: 108vw;
        left: 33vw;
    }

    .topIn {
        animation-name: topIn;
        animation-duration: 2s;
    }

    @keyframes topIn {
        from {
            opacity: 0;
            transform: translateY(-50px)
        }
        to {
            opacity: 1;
            transform: translateY(0px)
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(2);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .fadeIn {
        animation-name: fadeIn;
        /*animation-fill-mode: backwards;*/
        animation-duration: 1.5s;
    }
</style>