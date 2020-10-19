<template>
  <div>
    <span class="title">CV here 👋🏼</span>
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
  .title {
    color: #333;
    font-size: 4rem;
  }
</style>

