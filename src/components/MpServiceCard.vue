<template>
  <div class="card-container">
    <div class="card-top-img">
      <img src="../assets/mentorship.png" alt="" class="card-img" />
    </div>
    <div class="card-logo-img mt-8 mb-16">
      <img src="../assets/me-box.svg" alt="" />
    </div>

    <div class="card-footer mt-16">
      <p class="title">MENTORSHIP</p>
      <router-link to="/" class="d-flex link">
        <p class="text mb-0">Read more</p>
        <img src="../assets/rarr.svg" class="ml-2" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-container {
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
