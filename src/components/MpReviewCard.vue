<template>
  <div class="review-card-container pa-6">
    <div class="review-card-container-header d-flex mb-7">
      <img src="../assets/charles.svg" alt="" />
      <div class="ml-3 mb-0 align-self-center">
        <p class="name mb-1">Charles</p>
        <p class="role mb-0">Mentee</p>
      </div>
    </div>

    <p class="review-card-container__content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus
      arcu, dictum in eros ut, dignissim efficitur tortor. Integer eget eros sed
      justo finibus vehicula sit amet non mauris. Cras condimentum ullamcorper
      lectus, vitae tempor ante gravida eget.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.review-card-container {
  width: 470px;
  min-height: 214px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  & .name {
    color: #002855;
    font-size: 16px;
    font-weight: 699;
  }

  & .role {
    color: #979797;
    font-size: 12px;
  }
  &__content {
    font-size: 12px;
  }
}
</style>
