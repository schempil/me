<template>
  <div class="cv-wrapper">
    <span class="title">🏗</span>
    <span class="subtitle">Under construction</span>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  components: { }
})
export default class CV extends Vue {

  @Prop() private profile!: Profile;

}
</script>

<style scoped>

  .cv-wrapper {

  }

  .title {
    color: #333;
    font-size: 10rem;
  }
</style>

