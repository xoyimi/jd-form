<template>
    <div class="detail">
        <div class="name">{{name}}</div>
        <div class="date">{{date}}</div>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas'

    export default {
        name: "Detail",
        data() {
            return {
                name: '',
                date: '',
                time:''
            }
        },
        mounted() {
            this.name = this.$route.params.name
            this.date = this.$route.params.date
        }
    }
</script>

<style scoped>
    .detail {
        height: 100%;
        background-image: url("../assets/images/bg2.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: top;

    }
    .name{
        position: absolute;
        top: 55vw;
        left: 32vw;
        font-size: 5.4vw;
        font-weight:900;
        color:  #89593a;
        border-bottom: 5px solid #89593a;
        letter-spacing:1vw;
        text-align: center;
    }
    .date{
        position: absolute;
        top: 73vw;
        left: 46vw;
        font-size: 5vw;
        font-weight:900;
        color:  #89593a;
        border-bottom: 5px solid #89593a;
        letter-spacing:1vw;
        text-align: center;
    }
</style>