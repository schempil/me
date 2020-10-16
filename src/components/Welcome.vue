<template>
  <div class="wrapper">
    <section>
        <div class="columns main-columns">
          <div class="column is-one-third left-main-column">
            <figure class="image avatar">
              <img class="is-rounded" src="https://avatars0.githubusercontent.com/u/7802273?s=460&u=476c61945c90dcd3232895b0c45c6b5eb1ba5bbe&v=4">
            </figure>
            <h1 class="side-title">Philipp Schemel</h1>
            <h2 class="side-subtitle">Software Engineer</h2>

            <div class="social-container">
              <SocialButton platform="linkedin" url="https://www.linkedin.com/in/philippschemel/" />
              <SocialButton platform="github" url="https://github.com/schempil" />
              <SocialButton platform="instagram" url="https://www.instagram.com/swindle1995/" />
            </div>

            <button class="button is-outlined cv-download-button" @click="cvDownload">Download CV</button>
          </div>
          <div class="column is-two-thirds is-fullheight right-main-column">
            <div class="intro-texts has-text-centered">
              <h1 class="title">
                {{ name }}
              </h1>
              <div class="subtitle-container">
                <vue-typed-js
                    :strings="['Software Engineer']"
                    class="typed-center"
                    :smartBackspace="true"
                    :typeSpeed="50"
                    :backDelay="1000"
                    :startDelay="1000"
                >
                  <h2 class="subtitle"><span class="typing"></span></h2>
                </vue-typed-js>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>

import {Component, Prop, Vue} from 'vue-property-decorator';
import {VueTypedJs} from "vue-typed-js";

@Component({
  components: {VueTypedJs}
})

class Welcome extends Vue {

  @Prop() name

  cvDownload() {
    alert('Coming soon!')
  }

}

export default Welcome

</script>

<style scoped>

  .wrapper {
    background: #e6ebef;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    height: 100vh;
    min-height: 640px;
    align-items: center;
  }

  @media screen and (max-width: 770px) {
    .wrapper {
      align-items: flex-start;
      padding-top: 30px;
    }

    .intro-texts {
      text-align: left !important;
    }

    .right-main-column {
      display: none !important;
    }
  }

  section {
    background: linear-gradient(#0b7080,#0ba376);
    width: 85vw;
    height: 80vh;
    min-height: 550px;
    border-radius: 30px;
  }

  .main-columns {
    margin: 0;
    height: 80vh;
    min-height: 550px;
  }

  .left-main-column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .avatar > img {
    margin-bottom: 30px; width: 220px
  }

  .social-container {
    margin-top: 20px; margin-bottom: 30px;
  }

  .side-title {
    font-size: 2rem; color: #fff
  }

  .side-subtitle {
    font-size: 1.25rem; color: #fff;
  }

  .cv-download-button {
    background: transparent; color: #fff; border: 2px solid #fff; border-radius: 100px;
  }

  .right-main-column {
    border-radius: 30px;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    color: #333;
    font-size: 4rem;
  }

  .subtitle-container {
    margin-top: 5px;
  }

  .typing {
    color: #333;
    font-size: 1.4rem;
  }
</style>
