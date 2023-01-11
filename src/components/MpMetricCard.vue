<template>
  <div
    class="metric-card-container pa-4"
    data-aos="fade-up"
    data-aos-duration="1500"
    data-aos-easing="ease"
  >
    <slot name="img"><img src="../assets/01.svg" alt="" /></slot>

    <slot name="heading"
      ><p class="card-heading mt-7">Accurate signals & Trade-Idea</p></slot
    >
    <slot name="content">
      <p class="card-content mb-0 mt-2">
        End-to-end payments and financial management in a single solution. Meet
        the right platform to help realize.
      </p></slot
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.metric-card-container {
  width: 20rem;
  //   height: 20rem;
  border: 1px solid #cfcfcf;
  background: white;
  box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.03);
  border-bottom-right-radius: 2rem;
}

.card-heading {
  font-size: 1.8rem;
  font-weight: 800;
  color: #000;
  line-height: 2rem;
}

.card-content {
  font-size: 15px;
  color: #000;
  font-weight: 500;
}
</style>
