<template>
  <v-row class="mentorship-wrapper">
    <v-col
      cols="2"
      class="d-none d-md-block blue mentorship-wrapper-first-col"
    ></v-col>

    <v-col
      cols="12"
      md="10"
      class="mentorship-wrapper-second-col px-0 px-sm-8 px-md-16 py-0 pb-16"
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

      <div class="page-heading mt-16 px-4 px-md-0 d-flex justify-start">
        <img
          src="../assets/me-box-variant.svg"
          class="align-self-center"
          alt=""
        />
        <div class="page-heading__heading align-self-center ml-5">
          Mentorship
        </div>
      </div>

      <v-card class="mt-16">
        <template>
          <v-tabs v-model="model" slider-color="#ccc">
            <v-tab
              v-for="i in 2"
              :key="i"
              :href="`#tab-${i}`"
              class="black--text tab-comp"
            >
              {{ heading[i - 1] }}
            </v-tab>
          </v-tabs>
          <!-- <br /> -->
          <!-- <hr /> -->
        </template>

        <v-tabs-items v-model="model" v-if="model === 'tab-1'">
          <v-tab-item v-for="i in 2" :key="i" :value="`tab-${i}`">
            <v-card class="card-content">
              <p class="card-content__heading px-4 px-md-0 mb-0">
                Intensive 5weeks training on profitable smart money and Algo
                concepts.
              </p>

              <div class="card-content-list px-4 px-md-0 mt-5">
                <div
                  class="list-item d-flex mb-4"
                  v-for="items in list"
                  :key="items.paragraph"
                >
                  <img
                    src="../assets/rarr.svg"
                    alt=""
                    class="mr-3 align-self-center"
                  />
                  <p class="list-item__item align-self-center mb-0">
                    {{ items.paragraph }}
                  </p>
                </div>
              </div>
            </v-card>
            <div
              class="price-box mt-12 mx-4 mx-md-0 pa-7 d-flex justify-space-around"
            >
              <div
                class="price-box-price px-10 text-center"
                v-for="price in prices"
                :key="price.venue"
              >
                <p class="price-box__heading mb-2">{{ price.price }}</p>
                <p class="price-box__text mb-0">{{ price.venue }}</p>
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="model" v-if="model === 'tab-2'">
          <v-tab-item v-for="i in 2" :key="i" :value="`tab-${i}`">
            <v-card class="card-content">
              <p class="card-content__heading px-4 px-md-0 mb-0">
                Intensive 5weeks training on profitable smart money and Algo
                concepts.
              </p>

              <div class="card-content-list px-4 px-md-0 mt-5">
                <div
                  class="list-item d-flex mb-4"
                  v-for="items in list"
                  :key="items.paragraph"
                >
                  <img
                    src="../assets/rarr.svg"
                    alt=""
                    class="mr-3 align-self-center"
                  />
                  <p class="list-item__item align-self-center mb-0">
                    {{ items.paragraph }}
                  </p>
                </div>
              </div>
            </v-card>
            <div
              class="price-box mt-12 mx-4 mx-md-0 pa-7 d-flex justify-space-around"
            >
              <div
                class="price-box-price px-10 text-center"
                v-for="price in secondprices"
                :key="price.venue"
              >
                <p class="price-box__heading mb-2">{{ price.price }}</p>
                <p class="price-box__text mb-0">{{ price.venue }}</p>
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card>

      <button class="mx-4 mx-md-0 py-3 px-8 mt-10 mb-16">Make Payment</button>
    </v-col>
  </v-row>
</template>

<script>
import MpHeader from '../components/MpHeader.vue';

export default {
  components: {
    MpHeader,
  },

  data() {
    return {
      model: 'tab-2',

      heading: ['Classic', 'One-on-one'],

      prices: [
        {
          price: '$400',
          venue: 'In Class',
        },
        {
          price: '$500',
          venue: 'Online',
        },
      ],

      secondprices: [
        {
          price: '$2000',
          venue: 'In Class',
        },
        {
          price: '$2500',
          venue: 'Online',
        },
      ],

      list: [
        {
          img: require('../assets/rarr.svg'),
          paragraph: 'Proper Top-Down Analysis Approach to trading.',
        },

        {
          img: require('../assets/rarr.svg'),
          paragraph: 'Mastering Profitable Strategies that work.',
        },

        {
          img: require('../assets/rarr.svg'),
          paragraph:
            'Trading Psychology development on how to trade personal and prop firm accounts.',
        },

        {
          img: require('../assets/rarr.svg'),
          paragraph: 'Access to a lifetime Mentorship Group.',
        },
      ],
    };
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

.page-heading {
  width: 500px;
  &__heading {
    font-size: 56px;
    font-weight: 700;
  }
}

.card-content {
  // border-top: 2px solid #979dac;
  margin-top: 5px;
  padding-top: 10px;
  border-radius: 0;
  // background: blue;

  &__heading {
    font-size: 18px;
    font-weight: 500;
  }
}

.card-content-list {
  // background: blue;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none !important;
}

.price-box {
  border: 1px solid #979dac;
  background: #fff;
  border-radius: 10px;
  width: 500px;

  &-price {
  }

  &-price:not(:last-of-type) {
    border-right: 2px solid #979dac;
  }

  &__heading {
    font-size: 32px;
    font-weight: 800;
  }

  &__text {
    font-size: 18px;
    color: #5e6978;
  }
}

button {
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  background-color: #0582ff;
}

@media screen and (max-width: 540px) {
  .page-heading {
    width: 100%;
    justify-content: flex-start;

    &__heading {
      font-size: 40px;
    }
  }

  .price-box {
    width: 90%;
  }
}
</style>
