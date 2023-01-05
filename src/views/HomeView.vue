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

    <section class="section-metrics mt-16 pt-10 px-10">
      <h1 class="section-heading">Your best choice for your Forex journey</h1>

      <p class="section-subheading mt-8">
        End-to-end trading and market analysis in a single solution. You’re in
        the right platform to help realize your profits
      </p>

      <v-row class="mt-12 justify-center">
        <v-col cols="12" md="4" class="first-col text-center">
          <p class="metric-no mb-0">100+</p>
          <p class="client">clients work nationwide</p>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-center justify-md-start">
          <mp-metric-card />
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="d-flex align-center align-md-start flex-column"
        >
          <mp-metric-card>
            <template #img><img src="../assets/02.svg" alt="" /></template>

            <template #heading
              ><p class="card-heading mt-4">Consistent Service</p></template
            >
            <template #content
              ><p class="card-content mb-0 d-none"></p
            ></template>
          </mp-metric-card>

          <mp-metric-card class="mt-5">
            <template #img><img src="../assets/03.svg" alt="" /></template>

            <template #heading
              ><p class="card-heading mt-4">Secure parameters</p></template
            >
            <template #content
              ><p class="card-content mb-0 d-none">
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p></template
            >
          </mp-metric-card>
        </v-col>
      </v-row>
    </section>

    <section class="section-service black px-7 px-sm-16">
      <v-row class="justify-center">
        <v-col
          cols="12"
          md="3"
          class="service-col mt-3 pa-0 mb-3"
          v-for="item in items"
          :key="item.title"
          ><mp-service-card :items="item"
        /></v-col>
      </v-row>
    </section>

    <section class="section-testimonials mt-16 px-7 px-sm-16">
      <p class="section-testimonials__heading mb-0">SOCIAL PROOF</p>
      <p class="section-testimonials__subheading mt-6 mb-0">
        Don't just take my word for it, Hear what others are saying about it
      </p>

      <mp-review-card />
    </section>
  </div>
</template>

<script>
import MpHeader from '@/components/MpHeader.vue';
import MpIntroCard from '@/components/MpIntroCard.vue';
import MpMetricCard from '@/components/MpMetricCard.vue';
import MpServiceCard from '@/components/MpServiceCard.vue';
import MpReviewCard from '@/components/MpReviewCard.vue';
export default {
  components: {
    MpHeader,
    MpIntroCard,
    MpMetricCard,
    MpServiceCard,
    MpReviewCard,
  },

  data() {
    return {
      items: [
        {
          img: require('@/assets/mentorship.png'),
          logo: require('@/assets/me-box.svg'),
          title: 'MENTORSHIP',
          path: '/',
        },

        {
          img: require('@/assets/trade-idea.png'),
          logo: require('@/assets/ts-box.svg'),
          title: 'TRADE-IDEA/SIGNAL',
          path: '/',
        },

        {
          img: require('@/assets/community.png'),
          logo: require('@/assets/co-box.svg'),
          title: 'JOIN OUR COMMUNITY',
          path: '/',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-metrics {
  min-height: 30rem;
  // background: red;
}

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

.section-heading {
  font-weight: 800;
  font-size: 3rem;
  color: #202020;
}

.section-subheading {
  font-family: 'DM Sans', serif;
  // font-size: 1.6rem;
  color: #525252;
  font-weight: 500;
  width: 37rem;
}

.first-col {
  align-self: center;
}

.metric-no {
  font-weight: 600;
  font-size: 3.3rem;
  color: #001233;
}

.client {
  font-size: 2.5rem;
  line-height: 2.8rem;
}

.card-heading {
  font-size: 1.8rem;
  font-weight: 800;
  color: #000;
  line-height: 2rem;
}

.card-content {
  font-size: 0.8rem;
  color: #000;
  font-weight: 500;
}

.section-service {
  position: relative;
  // left: 0;
  margin-top: 10rem;
  width: 100%;
  color: white;
}

.section-testimonials {
  // position: absoute;
  // bottom: 0;

  &__heading {
    font-size: 1.6rem;
    color: #0582ff;
    text-align: center;
    font-weight: 600;
  }

  &__subheading {
    text-align: center;
    margin: 0 auto;
    width: 25rem;
    font-weight: 600;
    font-size: 18px;
  }
}

@media screen and (min-width: 959.98px) {
  .section-card {
    margin-top: 8rem;
  }
}

@media screen and (max-width: 943.98px) {
  .section-subheading {
    width: 100%;
  }
}
</style>
