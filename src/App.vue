<template>
  <v-app>
    <v-main>
      <div class="sticky-message text-center blue">
        <p class="mb-0">
          <a
            href="https://www.fpmarkets.com/?fpm-affiliate-utm-source=IB&fpm-affiliate-agt=19058"
            target="_blank"
          >
            Click to open a live trading account with FpMarkets &nbsp;
          </a>
        </p>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,500;0,700;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap');

@font-face {
  font-family: 'freestyle-script';
  src: local('freestyle-script'),
    url('./assets/fonts/FREESCPT.TTF') format('truetype');
}

@font-face {
  font-family: 'avenir-lt-pro';
  src: local('avenir-lt-pro'), url('./assets/fonts/AvenirNextLTPro-Regular.otf');
}
@font-face {
  font-family: 'avenir-lt-pro-bold';
  src: local('avenir-lt-pro-bold'),
    url('./assets/fonts/AvenirNextLTPro-Bold.otf');
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  // background: blue;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

#app {
  // background: #1e1e1e;
  color: #000;
  font-family: 'Manrope';
  font-size: 16px;
  // overflow-x: hidden;
}

.sticky-message {
  background-image: linear-gradient(
    102.46deg,
    #0466c8 12.91%,
    #140152 163.44%,
    #33415c 247.22%
  );
  padding: 1.5rem 0;
  color: white;
  font-weight: 600;
}

.sticky-message p a {
  color: white;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: rgb(160, 239, 160);
    text-decoration: underline;
  }
}
</style>
