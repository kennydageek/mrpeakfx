<template>
  <v-row class="card-container mt-10 pt-10">
    <v-col cols="12" md="5" class="left-col pa-0">
      <div class="image-container d-flex d-md-block justify-center px-5">
        <img src="../assets/mrpeak.png" alt="" />
      </div>
    </v-col>
    <v-col cols="12" md="7" class="intro-container pr-0 pr-md-16">
      <!-- <p class="about d-none d-sm-block">about</p> -->
      <p class="heading-title mb-0 text-center text-md-left">
        Forex trading expert
      </p>
      <p class="intro-text mb-0 text-center text-md-left">
        Hi, my name is Mr PeakFx
      </p>
      <p class="intro-details px-16 px-md-0 mb-0 mt-6 text-center text-md-left">
        I am a professional trader who have been in the trading space for about
        5 years . My expertise is to take you from the place of inconsistent
        trading results to a place of bigger wins.
      </p>

      <div class="btn-cta d-flex justify-center justify-md-start mt-8">
        <a href="#">
          <button class="button">Let’s Talk 👋</button>
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-container {
  background-image: linear-gradient(
    102.46deg,
    #0466c8 12.91%,
    #140152 163.44%,
    #33415c 247.22%
  );
  box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.03);
  border-radius: 30px;
  justify-content: space-between;
}

.left-col {
  align-self: flex-end;
}

.image-container {
  width: 100%;
  & img {
    display: block;
  }
}

.intro-container {
  position: relative;
}

.about {
  position: absolute;
  top: 2rem;
  left: 0;
  font-size: 13rem;
  color: rgba(#0466c8, 0.4);
  font-weight: 800;
  width: 100%;
}

.heading-title {
  font-family: 'freestyle-script';
  font-size: 3.2rem;
  color: #fff;
}

.intro-text {
  font-weight: 800;
  font-size: 4.6rem;
  color: #fff;
  line-height: 6rem;
  //   position: relative;
}

.intro-details {
  color: #bcc0cc;
  font-size: 1.8rem;
}

.button {
  font-family: 'Dm Sans';
  font-weight: 700;
  font-size: 1.8rem;
  border: 1px solid #fff;
  background: transparent;
  padding: 0.5rem 1.5rem;
  color: white;

  &:hover {
    background: #fff;
    color: #1e1e1e;
  }
}

@media screen and (max-width: 554.98px) {
  .image-container {
    & img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 498.98px) {
  .intro-text {
    font-size: 3.6rem;
    line-height: 5rem;
  }
}
</style>
