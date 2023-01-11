<template>
  <div class="px-0 px-sm-8 px-md-16 home-container">
    <mp-header
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-easing="ease"
    >
      <template v-slot:heading>Home</template>
    </mp-header>

    <v-row
      class="mt-3 header-containers px-7 justify-space-between"
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-easing="ease"
    >
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
      <v-col class="align-self-center" cols="12" md="5">
        <p class="header-quote mt-0 mt-md-9">
          “If you can learn to create a state of mind that is not affected by
          the market’s behaviour, the struggle will cease to exist...”
          <br /><span>Mark Douglas</span>
        </p>
      </v-col>
    </v-row>

    <section class="section-container section-card px-0 px-md-7">
      <mp-intro-card
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="ease"
      />
    </section>

    <section class="section-metrics mt-16 pt-10 px-10">
      <h1>The best choice for your Forex journey</h1>

      <p>
        End-to-end trading and market analysis in a single solution. You’re in
        the right platform to help realize your profits
      </p>

      <v-row>
        <v-col
          cols="12"
          md="4"
          class="first-col text-center"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease"
        >
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

    <section class="section-testimonials mt-16 px-7 px-sm-16 pb-4">
      <p class="section-testimonials__heading mb-0">SOCIAL PROOF</p>
      <p class="section-testimonials__subheading mt-6 mb-0">
        Don't just take my word for it, Hear what others are saying about it
      </p>
      <mp-carousel-comp class="mt-10" />
    </section>

    <section class="section-about mt-16 pt-16 pb-0">
      <v-row class="justify-space-between row-wrapper">
        <v-col cols="12" md="5" class="align-self-end">
          <div class="section-about-img-container">
            <img src="../assets/about-img.png" alt="" />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="align-self-start">
          <div
            class="section-about-text-wrapper px-5"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease"
          >
            <p class="section-about__heading mb-2">Learn more about Me</p>
            <p class="section-about__intro mb-3">I am Mr PeakFX</p>
            <p class="section-about__paragraph mb-0">
              I am a professional trader who have been in the trading space
              since 2019. I have gathered lots of experience in real time
              trading and I have witnessed all there is as a beginner,
              intermediate and pro trading.
            </p>

            <p class="section-about__paragraph mb-2">
              With my years of experience, I’ve been able to understand the
              Forex Market well enough to figure out different trading analysis
              and find patterns that produces consistent profitable trades in
              the Forex Market.
            </p>

            <p class="section-about__paragraph mb-5">
              As a foremost forex influencer in Nigeria and I am on a mission to
              replicate my profitable trading system to as many traders or
              potential traders that come my way.
            </p>

            <p class="section-about__paragraph mb-16">
              So, feel free to to send me a message, even if you are just
              putting out a few feelers.
            </p>
          </div>
        </v-col>
      </v-row>
    </section>

    <section class="section-footer">
      <v-row class="section-footer-wrapper pa-10">
        <v-col
          cols="12"
          md="5"
          class="section-footer-first-col"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease"
        >
          <p class="section-footer-first-col__heading">
            Get the best out of your trading experience
          </p>
          <p class="section-footer-first-col__contact mb-0">
            Contact Us: +2348076392730
          </p>
        </v-col>
        <v-col
          col="12"
          md="7"
          class="section-footer-second-col align-self-center"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease"
        >
          <div
            class="section-footer-second-col-socials d-flex justify-center mt-8 mt-md-0"
          >
            <img src="../assets/telegram.svg" alt="" />
            <img src="../assets/instagram.svg" class="ml-5" alt="" />
            <img src="../assets/youtube.svg" class="ml-5" alt="" />
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import MpHeader from '@/components/MpHeader.vue';
import MpIntroCard from '@/components/MpIntroCard.vue';
import MpMetricCard from '@/components/MpMetricCard.vue';
import MpServiceCard from '@/components/MpServiceCard.vue';
import MpCarouselComp from '@/components/MpCarouselComp.vue';
export default {
  components: {
    MpHeader,
    MpIntroCard,
    MpMetricCard,
    MpServiceCard,
    MpCarouselComp,
  },

  data() {
    return {
      items: [
        {
          img: require('@/assets/mentorship.png'),
          logo: require('@/assets/me-box.svg'),
          title: 'MENTORSHIP',
          path: '/services/mentorship#',
          cta: 'Read More',
        },

        {
          img: require('@/assets/trade-idea.png'),
          logo: require('@/assets/ts-box.svg'),
          title: 'TRADE-IDEA/SIGNAL',
          path: '/services/signal#',
          cta: 'Read More',
        },

        {
          img: require('@/assets/community.png'),
          logo: require('@/assets/co-box.svg'),
          title: 'JOIN OUR COMMUNITY',
          path: '/services/community#',
          cta: 'Join Now',
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
  height: 0vh;
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
    line-height: 4rem;
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
  font-size: 18px;
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

.section-about {
  & .row-wrapper {
    background-image: url('../assets/about-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  &-img-container {
    // width: 80%;
    margin: 0 auto;
    & img {
      width: 100%;
    }
  }

  &__heading {
    font-weight: 800;
    font-size: 50px;
    color: #000;
  }

  &__intro {
    font-family: 'freestyle-script';
    font-size: 48px;
  }

  &__paragraph {
    text-align: justify;
  }

  &-text-wrapper {
    // width: 80%;
    // margin: 0 auto;
  }
}

.section-footer {
  position: relative;
  top: -2rem;

  &-wrapper {
    background-color: #1e1e1e;
  }

  &-first-col {
    &__heading {
      font-size: 36px;
      color: #fff;
      font-weight: 700;
    }

    &__contact {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
  }

  &-second-col {
    & img {
      width: 48px;
    }
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

@media screen and (max-width: 472px) {
  .section-testimonials__subheading {
    width: 100%;
  }
}

@media screen and (max-width: 598.99px) {
  .header-text__heading,
  .section-heading,
  .section-footer-first-col__heading {
    font-size: 35px;
    line-height: 4rem;
  }
}

@media screen and (max-width: 911.98px) {
  .section-about {
    & .row-wrapper {
      background-image: none;
    }
  }
}
</style>
