<template>
  <v-row class="mentorship-wrapper">
    <v-col
      cols="2"
      class="d-none d-sm-block blue mentorship-wrapper-first-col"
    ></v-col>

    <v-col
      cols="12"
      md="10"
      class="mentorship-wrapper-second-col px-0 px-sm-8 px-md-16 py-0"
    >
      <mp-header>
        <template v-slot:chevron-left
          ><router-link to="/" class="align-self-center header-link">
            <img src="../assets/chevron-left.svg" alt="" /> </router-link
        ></template>
        <template v-slot:heading>Services</template>
        <template v-slot:link
          ><router-link to="/services/signal" class="header-link"
            >TRADE-IDEA <img src="../assets/rarr.svg" class="ml-2" alt=""
          /></router-link>
        </template>
      </mp-header>
    </v-col>
  </v-row>
</template>

<script>
import MpServicesNav from '../components/MpServicesNav.vue';
import MpHeader from '../components/MpHeader.vue';
export default {
  components: {
    // MpServicesNav,/
    MpHeader,
  },
};
</script>

<style lang="scss" scoped>
.mentorship-wrapper {
  height: 100vh;
  margin: 0 !important;
}

.mentorship-wrapper-first-col {
  background-image: url('../assets/ment-background.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.header-link {
  color: #0582ff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
}
</style>
