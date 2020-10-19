<template>
  <div>
    <figure class="image avatar">
      <img class="is-rounded" alt="Profile picture" src="https://avatars0.githubusercontent.com/u/7802273?s=460&u=476c61945c90dcd3232895b0c45c6b5eb1ba5bbe&v=4">
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SocialButton from "./SocialButton.vue";
@Component({
  components: {SocialButton}
})
export default class ProfileCard extends Vue {
  @Prop() private platform!: string;

  cvDownload() {
    alert('CV coming soon!')
  }

}
</script>

<style>
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

  .avatar > img {
    margin-bottom: 30px; width: 220px
  }
</style>