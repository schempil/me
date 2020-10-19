<template>
  <div class="social-container">
    <SocialButton
        v-bind:key="social.type"
        v-for="social in socials"
        :platform="social.type"
        :url="getUrl(social.type, social.username)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SocialButton from "@/components/SocialButton.vue";
@Component({
  components: {SocialButton}
})
export default class SocialButtonList extends Vue {
  @Prop() private socials!: Social[]

  getUrl(type: string, username: string): string | boolean {
    if (type === 'linkedin') {
      return `https://www.linkedin.com/in/${username}`
    }
    if (type === 'github') {
      return `https://www.github.com/${username}`
    }
    if (type === 'instagram') {
      return `https://www.instagram.com/${username}`
    }

    return false
  }

}
</script>

<style scoped>
a {
  margin-right: 4px;
  background: transparent !important;
  border: 0 !important;
  color: #fff !important;
}

.social-container {
  margin-top: 20px; margin-bottom: 30px;
}
</style>