<template>
    <div class="contents-box">
        <div class="contents-body">
            <div class="contents-left">
                <Clefttop></Clefttop>
                <Cleftbody></Cleftbody>
            </div>
            <div class="contents-right">
                <Crighttop></Crighttop>
                <Crightcenter></Crightcenter>
                <Crightfooter></Crightfooter>
            </div>
        </div>
    </div>
</template>
<script>
import Clefttop from './clefttop.vue';
import Cleftbody from './cleftbody.vue';
import Crighttop from './crighttop.vue';
import Crightcenter from './crightcenter.vue';
import Crightfooter from './crightfooter.vue';
export default {
    components:{
        Clefttop,
        Cleftbody,
        Crighttop,
        Crightcenter,
        Crightfooter
    }
}
</script>

<style lang="less">
.contents-box {
    width: 100%;
    height: 100%;
    font-size: 15px;
    color: #262626;
    padding-top: 62px;
    .contents-body {
        width: 1000px;
        margin: 0 auto;
        display: flex;
        .contents-left {
            width: 694px;
            margin-right: 10px;
        }
        .contents-right {
            width: 296px;
        }
    }
}
</style>