<template>
  <div class="wrapper">
    <section v-if="profile">
      <div class="columns main-columns">
        <div class="column is-one-third">
          <ProfileCard :profile="profile" />
        </div>
        <div class="column is-two-thirds content-column">
          <router-view :profile="profile" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import SocialButton from "@/components/SocialButton.vue";
  import TypeWriting from "@/components/TypeWriting.vue";
  import ProfileCard from "@/components/ProfileCard.vue";
  import ProfileService from "@/services/profileService";

  @Component({
    components: { ProfileCard, TypeWriting, SocialButton }
  })
  export default class App extends Vue {

    profile: Profile | null = null

    async mounted() {
      const profileService = new ProfileService()
      this.profile = await profileService.getProfile()
    }

  }
</script>

<style scoped>

.wrapper {
  background: #e6ebef;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  height: 100vh;
  align-items: center;
}

section {
  background: linear-gradient(#0b7080,#0ba376);
  width: 85vw;
  height: 80vh;
  border-radius: 30px;
}

.main-columns {
  margin: 0;
  height: 80vh;
}

.content-column {
  border-radius: 30px;
  background: rgb(255, 255, 255);
  width: 67% !important;
  padding: 50px;
  overflow-y: auto;
}

@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : landscape) {

  .wrapper {
    height: 90vh;
  }

  section .main-columns {
    height: 80vh;
  }
}

@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : portrait) {
  .wrapper {
    height: 90vh;
  }

  section .main-columns {
    height: 80vh;
  }
}

@media screen and (max-width: 770px) {
  .wrapper {
    align-items: flex-start;
    padding-top: 30px;
  }

  .content-column {
    display: none !important;
  }
}
</style>

