<template>
  <div class="cv-wrapper">
    <span class="title">{{ getRandomConstructionEmoji() }}</span>
    <span class="subtitle">CV is in the making...</span>
    <router-link to="/"> ↪ Home</router-link>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  components: { }
})
export default class CV extends Vue {

  @Prop() private profile!: Profile;

  constructionEmojis = [
      "🪛", "🪚", "🔨", "🚧", "🧱", "🛠", "🔩", "🔧", "🏗", "🪓", "🦺"
  ]

  getRandomConstructionEmoji() {
    const random = Math.floor(Math.random() * Math.floor(this.constructionEmojis.length - 1))
    return this.constructionEmojis[random]
  }

}
</script>

<style scoped>

  .cv-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .title {
    color: #333;
    font-size: 10rem;
  }
</style>

