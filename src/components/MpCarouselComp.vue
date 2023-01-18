<template>
  <v-carousel
    v-model="model"
    hide-delimiter-background="true"
    height="auto"
    data-aos="fade-up"
    data-aos-duration="1500"
    data-aos-easing="ease"
  >
    <v-carousel-item v-for="customer in customers" :key="customer.name">
      <v-row align="center" justify="center">
        <mp-review-card :customers="customer" />
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import MpReviewCard from '@/components/MpReviewCard';
export default {
  components: {
    MpReviewCard,
  },
  data: () => ({
    model: 0,
    customers: [
      {
        img: require('@/assets/anthonia.svg'),
        name: 'Anthonia Oluchi',
        role: 'Mentee',
        review: `Sir @⁨MrPeak⁩  ❤️. I have to appreciate you publicly. Thank you for everything you have done for me/us so far. May God continue to replenish your pockets x1000000. You will never lack in any areas that concern you. 
        I’m still a work in progress but you have been a rock ✅🔥 `,
      },
      {
        img: require('@/assets/charles.svg'),
        name: 'Kehinde Ajibade',
        role: 'Mentee',
        review: `It's so difficult in this industry to make it without the help of a good and sincere mentor, that has your interest in mind, and desires to see you been profitable. I benefited and still benefiting from that kind of mentor, it's a privilege to learn from you sir. Mr Peak put it all together for me and make me see trading in an easy way...`,
      },

      {
        img: require('@/assets/kehinde.svg'),
        name: 'Stephie',
        role: 'Signal Subscriber',
        review:
          'I would say that joining and learning from  Mr PeakFX has been the best decision I took in 2022.. He really made trading so easy and was able to make me believe that I can make it through in trading.. His concept and strategies is top-notch💯👌🏽',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.v-responsive__content {
  align-self: center !important;
}
</style>
