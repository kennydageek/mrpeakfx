<template>
  <v-carousel v-model="model" hide-delimiter-background height="auto">
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
        img: require('@/assets/charles.svg'),
        name: 'Charles',
        role: 'Mentee',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus arcu, dictum in eros ut, dignissim efficitur tortor. Integer eget eros sed justo finibus vehicula sit amet non mauris. Cras condimentum ullamcorper lectus, vitae tempor ante gravida eget.',
      },

      {
        img: require('@/assets/charles.svg'),
        name: 'Stephie',
        role: 'Signal Subscriber',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus arcu, dictum in eros ut, dignissim efficitur tortor. Integer eget eros sed justo finibus vehicula sit amet non mauris. Cras condimentum ullamcorper lectus, vitae tempor ante gravida eget.',
      },

      {
        img: require('@/assets/charles.svg'),
        name: 'Sophia',
        role: 'Community Member',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus arcu, dictum in eros ut, dignissim efficitur tortor. Integer eget eros sed justo finibus vehicula sit amet non mauris. Cras condimentum ullamcorper lectus, vitae tempor ante gravida eget.',
      },

      {
        img: require('@/assets/charles.svg'),
        name: 'Sylvia',
        role: 'Mentee',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus arcu, dictum in eros ut, dignissim efficitur tortor. Integer eget eros sed justo finibus vehicula sit amet non mauris. Cras condimentum ullamcorper lectus, vitae tempor ante gravida eget.',
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
