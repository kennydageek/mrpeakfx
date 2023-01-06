<template>
  <div class="review-card-container pa-6">
    <div class="review-card-container-header d-flex mb-7">
      <img src="../assets/charles.svg" alt="" />
      <div class="ml-3 mb-0 align-self-center">
        <p class="name mb-1">{{ customers.name }}</p>
        <p class="role mb-0">{{ customers.role }}</p>
      </div>
    </div>

    <p class="review-card-container__content">
      {{ customers.review }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    customers: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.review-card-container {
  width: 470px;
  min-height: 214px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);

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
    font-size: 14px;
  }
}
</style>
