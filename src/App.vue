<template>
  <v-app>
    <v-main>
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
</style>
