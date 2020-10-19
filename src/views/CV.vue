<template>
  <div>
    <h1>CV here 👋🏼</h1>
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

</style>

