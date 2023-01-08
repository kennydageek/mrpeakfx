<template>
  <div class="navigations pr-2 pr-md-8">
    <div class="d-flex">
      <slot name="chevron-left"> </slot>

      <div class="nav-logo">
        <img src="../assets/logo.svg" alt="logo" />
      </div>

      <div class="line d-none d-md-block"></div>
      <p class="heading ml-0 ml-md-2"><slot name="heading"></slot></p>
    </div>
    <p class="navigations__link"><slot name="link"></slot></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigations {
  display: flex;
  // background: red;
  // width: 14rem;
  justify-content: space-between;

  &__link {
    align-self: center;
    margin-bottom: 0;
  }
}

.nav-logo {
  background: rgb(249, 245, 245);
  width: 116px;
  height: 116px;
  border-radius: 50%;
  align-self: center;

  & img {
    border-radius: 540px;
  }
  // background: red;
}

.line {
  width: 48px;
  height: 0px;
  border: 1px solid #000;
  background: #000;
  align-self: center;
}

.heading {
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 6rem;
  align-self: center;
  margin-bottom: 0;
  font-family: 'avenir-lt-pro';
  font-weight: 600;
}
</style>
