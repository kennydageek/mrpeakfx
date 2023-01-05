<template>
  <div class="card-container pb-10">
    <div class="card-top-img">
      <img :src="items.img" alt="" class="card-img" />
    </div>
    <div class="card-logo-img mt-8 mb-16">
      <img :src="items.logo" alt="" />
    </div>

    <div class="card-footer mt-16">
      <p class="title">{{ items.title }}</p>
      <router-link :to="items.path" class="d-flex link">
        <p class="text mb-0">Read more</p>
        <img src="../assets/rarr.svg" class="ml-2" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  // border-right: 1px solid #fff;
  //   background: red;
  //   width: 23%;
}

.card-top-img {
  //   width: 80%;

  & img {
    width: 100%;
  }
}

.card-logo-img {
  & img {
    width: 3rem;
  }
}

.card-footer {
  & .title {
    font-size: 2rem;
    font-weight: 700;
  }
  & .link {
    color: #0582ff;
    font-weight: 500;
    // font-size: 1.rem;
  }
}
</style>
