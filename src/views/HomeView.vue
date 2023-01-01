<template>
  <div class="px-0 px-sm-16 mx-sm-16 home-container">
    <mp-header>Home</mp-header>
  </div>
</template>

<script>
import MpHeader from '@/components/MpHeader.vue';
export default {
  components: {
    MpHeader,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  background: #fff;
  // padding: 0 10rem;
}
</style>
