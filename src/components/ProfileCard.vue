<template>
  <div class="profile-card">
    <figure class="image avatar">
      <img class="is-rounded" alt="Profile picture" src="https://avatars0.githubusercontent.com/u/7802273?s=460&u=476c61945c90dcd3232895b0c45c6b5eb1ba5bbe&v=4">
    </figure>
    <h1 class="side-title">{{ profile.first_name }} {{ profile.last_name }}</h1>
    <h2 class="side-subtitle">{{ profile.title }}</h2>

    <SocialButtonList :socials="profile.socials"/>

    <button class="button is-outlined cv-download-button" @click="cvDownload">Download CV</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SocialButton from "./SocialButton.vue";
import SocialButtonList from "@/components/SocialButtonList.vue";
@Component({
  components: {SocialButtonList, SocialButton}
})
export default class ProfileCard extends Vue {
  @Prop() private profile!: Profile;

  cvDownload() {
    alert('CV coming soon!')
  }

}
</script>

<style scoped>
  .profile-card {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .side-title {
    font-size: 2rem; color: #fff
  }

  .side-subtitle {
    font-size: 1.25rem; color: #fff;
  }

  .cv-download-button {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 100px;
  }

  .avatar > img {
    margin-bottom: 30px;
    width: 220px;
  }

  button.button:hover {
    border-color: #fff;
    color: #333;
    background: #fff;
    -webkit-transition: all 250ms ease-in;
    -moz-transition: all 250ms ease-in;
    -ms-transition: all 250ms ease-in;
    -o-transition: all 250ms ease-in;
    transition: all 250ms ease-in;
  }

  @media only screen
  and (min-device-width : 768px)
  and (max-device-width : 1024px)
  and (orientation : portrait) {
    .side-title {
      font-size: 1.5rem;
    }

    .side-subtitle {
      font-size: 1rem;
    }
  }
</style>