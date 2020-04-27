<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ name }}
          </h1>
          <h2 class="subtitle">
            Web Development
          </h2>
          <hr class="one-eight-seven-bar"/>
          <SocialButton platform="linkedin" url="https://www.linkedin.com/in/philippschemel/" />
          <SocialButton platform="github" url="https://github.com/schempil" />
          <SocialButton platform="instagram" url="https://www.instagram.com/swindle1995/" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SocialButton from "./SocialButton";

  export default {
    name: 'Welcome',
    components: {SocialButton},
    props: {
      name: String
    }
  }
</script>

<style>
  .one-eight-seven-bar {
    width: 187px;
    text-align: center;
    margin: 1.5rem auto;
  }
</style>
