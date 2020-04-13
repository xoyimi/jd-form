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
            this.time = new Date().toLocaleDateString()
            this.time=/this.time/
            console.log(this.time)

        }
    }
</script>

<style scoped>
    .detail {
        height: 100%;
        background-image: url("../assets/images/bg2.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;

    }
    .name{
        position: absolute;
        top: 182px;
        left: 128px;
        font-size: 21px;
        font-weight:700;
        color:  #89593a;
        border-bottom: 5px solid #89593a;
        letter-spacing:6px;
        text-align: center;
    }
</style>