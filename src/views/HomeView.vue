<template>
  <div class="px-0 px-sm-16 home-container">
    <mp-header>Home</mp-header>

    <v-row class="mt-3 header-containers px-7">
      <v-col class="header-text" cols="12" md="6">
        <img class="img-right" src="../assets/design.svg" alt="" />
        <img
          class="img-left d-none d-md-inline"
          src="../assets/design1.svg"
          alt=""
        />
        <p class="header-text__heading mt-5">
          <span>Be the boss of your </span> Trading Journey
        </p>
      </v-col>
      <v-col class="" cols="12" md="5">
        <p class="header-quote mt-0 mt-md-9">
          “If you can learn to create a state of mind that is not affected by
          the market’s behaviour, the struggle will cease to exist...”
          <br /><span>Mark Douglas</span>
        </p>
      </v-col>
    </v-row>

    <section class="section-container section-card px-0 px-md-7">
      <mp-intro-card />
    </section>
  </div>
</template>

<script>
import MpHeader from '@/components/MpHeader.vue';
import MpIntroCard from '@/components/MpIntroCard.vue';
export default {
  components: {
    MpHeader,
    MpIntroCard,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  background: #fff;
  // padding: 0 10rem;
}

.header-container {
  justify-content: space-between;
}

.header-text {
  position: relative;

  & .img-right {
    position: absolute;
    right: 5rem;
  }

  & .img-left {
    position: absolute;
    left: 5rem;
    bottom: -3rem;
  }

  &__heading {
    & span {
      color: #000;
    }
    // color: #0000;
    font-family: 'avenir-lt-pro-bold';
    font-size: 55px;
    line-height: 5rem;

    background: #000000; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #0466c8,
      #056868
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #056868,
      #140152
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
}

.header-quote {
  font-size: 1.5rem;
  justify-self: flex-end;

  & span {
    font-family: 'freestyle-script';
    font-weight: bold;
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 959.98px) {
  .section-card {
    margin-top: 8rem;
  }
}
</style>
