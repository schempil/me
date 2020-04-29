<template>
  <div style="overflow: hidden">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ name }}
          </h1>
          <div class="subtitle">
            <vue-typed-js
                    :strings="['Developer, fuck it', 'Developer, hell Philipp I am!']"
                    class="typed-center"
                    :smartBackspace="true"
                    :typeSpeed="50"
                    :startDelay="750"
            >
              <h2 class="subtitle"><span class="typing"></span></h2>
            </vue-typed-js>
          </div>
          <hr class="one-eight-seven-bar"/>
          <SocialButton platform="linkedin" url="https://www.linkedin.com/in/philippschemel/" />
          <SocialButton platform="github" url="https://github.com/schempil" />
          <SocialButton platform="instagram" url="https://www.instagram.com/swindle1995/" color="google"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SocialButton from "./SocialButton";
  import {VueTypedJs} from "vue-typed-js";

  export default {
    name: 'Welcome',
    components: {SocialButton, VueTypedJs},
    props: {
      name: String
    }
  }
</script>

<style scoped>
  .one-eight-seven-bar {
    width: 187px;
    text-align: center;
    margin: 1.5rem auto;
  }

  .typed-center {
    justify-content: center;
  }

</style>
