<template>
  <div class="index-box">
      <Headers></Headers>
      <Contents></Contents>
  </div>
</template>
<script>
import Headers from './headers.vue';
import Contents from './contents.vue';
export default {
  components: {
      Headers,
      Contents
  }
}
</script>
<style lang="less">
    *{
        padding:0;
        margin:0;
    }
    html{
        background:#f3f3f3;
    }
    .index-box{
        background:#f3f3f3;
    }
</style>

