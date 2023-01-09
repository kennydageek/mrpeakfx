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
      <mp-header class="flex-wrap">
        <template v-slot:chevron-left
          ><router-link to="/" class="align-self-center header-link">
            <img src="../assets/chevron-left.svg" alt="" /> </router-link
        ></template>
        <template v-slot:heading>Services</template>
        <template v-slot:link
          ><router-link to="/services/signal" class="header-link ml-7"
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

      <v-dialog
        v-model="dialog"
        persistent
        max-width="600"
        overlay-color="#33415c"
      >
        <template v-slot:activator="{ on, attrs }">
          <button
            class="mx-4 mx-md-0 py-3 px-8 mt-10 mb-16"
            v-on="on"
            v-bind="attrs"
          >
            Make Payment
          </button>
        </template>
        <v-card class="modal-container px-12 py-10">
          <p class="modal-container-close" @click="dialog = false">x</p>

          <p class="modal-container__heading mb-6">Make Payment 💳</p>
          <p class="modal-container__subheading">
            Subscribe to any of the available plans
          </p>

          <hr />

          <p class="modal-container__choose my-6">Choose payment method</p>

          <template>
            <v-tabs v-model="payment" slider-color="#ccc">
              <v-tab
                v-for="i in 2"
                :key="i"
                :href="`#tab-${i}`"
                class="black--text tab-comp"
              >
                {{ paymentHeading[i - 1] }}
              </v-tab>
            </v-tabs>
            <!-- <br /> -->
            <!-- <hr /> -->
          </template>

          <v-tabs-items v-model="payment" v-if="payment === 'tab-1'">
            <v-tab-item v-for="i in 2" :key="i" :value="`tab-${i}`">
              <v-card class="card-content">
                <div class="card-content-list px-4 px-md-0 mt-5">
                  <div class="payment-items pb-4 d-flex justify-space-between">
                    <p class="payment-items__heading mb-0">Bank Name</p>
                    <p class="payment-items__detail mb-0">Wema Bank</p>
                  </div>

                  <div
                    class="payment-items pb-4 d-flex justify-space-between mt-4"
                  >
                    <p class="payment-items__heading mb-0">Account Number</p>
                    <div>
                      <div class="payment-items__detail mb-0 d-flex">
                        <input
                          v-on:focus="$event.target.select()"
                          ref="clone"
                          readonly
                          :value="807313678"
                        />
                        <!-- <span ref="message">807313678</span> -->
                        <img
                          src="../assets/content-copy.svg"
                          class="d-block ml-2 clipboard"
                          @click="copy"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="payment-items pb-4 d-flex justify-space-between mt-4"
                  >
                    <p class="payment-items__heading mb-0">Account Name</p>
                    <p class="payment-items__detail mb-0 d-flex">MR PEAK X</p>
                  </div>
                </div>

                <div class="d-flex justify-end">
                  <a href="#" target="_blank" @click="dialog = false">
                    <button class="mx-4 mx-md-0 py-3 px-8 mt-10 mb-16">
                      I have made Payment
                    </button>
                  </a>
                </div>
              </v-card>
            </v-tab-item>
          </v-tabs-items>

          <v-tabs-items v-model="payment" v-if="payment === 'tab-2'">
            <v-tab-item v-for="i in 2" :key="i" :value="`tab-${i}`">
              <v-card class="card-content">
                <div class="card-content-list px-4 px-md-0 mt-5">
                  <div
                    class="payment-items pb-4 d-flex justify-space-between mt-4"
                  >
                    <p class="payment-items__heading mb-0">Wallet id</p>
                    <div>
                      <div class="payment-items__detail mb-0 d-flex">
                        <input
                          class="input"
                          v-on:focus="$event.target.select()"
                          ref="clone"
                          readonly
                          :value="12940274250"
                        />
                        <!-- <span ref="message">807313678</span> -->
                        <img
                          src="../assets/content-copy.svg"
                          class="d-block ml-2 clipboard"
                          @click="copy"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-end">
                  <button class="mx-4 mx-md-0 py-3 px-8 mt-10 mb-16">
                    I have made Payment
                  </button>
                </div>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-dialog>

      <v-snackbar v-model="snackbar" timeout="500">
        {{ text }}
      </v-snackbar>
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
      payment: 'tab-1',
      message: '',
      snackbar: false,
      text: 'Copied to clipboard',

      dialog: false,

      paymentHeading: ['Bank', 'Crypto Wallet'],

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

  methods: {
    copy() {
      // this.$refs.clone.focus();
      navigator.clipboard.writeText('807313678').then(() => {
        this.snackbar = true;
      });
    },
    copyWallet() {
      navigator.clipboard.writeText('12940274250').then(() => {
        this.snackbar = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 86px;
}

.input {
  width: 106px;
}

.clipboard {
  cursor: pointer;
}

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

.modal-container {
  min-height: 30rem;
  &-close {
    font-weight: 700;
    font-size: 25px;
    position: absolute;
    top: 5px;
    right: 25px;
    cursor: pointer;
    color: #979dac;
  }

  &__heading {
    font-weight: 800;
    font-size: 24px;
    color: #232f3e;
  }

  &__subheading {
    color: #001233;
    font-weight: 600;
    font-size: 16px;
  }

  &__choose {
    font-weight: 800;
    font-size: 16px;
    color: #001233;
  }
}

.payment-items {
  &:not(:last-of-type) {
    border-bottom: 1px solid #d0dce4;
  }

  &__heading {
    color: #5c677d;
    font-size: 16px;
  }

  &__detail {
    color: #000;
    font-weight: 700;
    font-size: 16px;
  }
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
