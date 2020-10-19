<template>
  <vue-typed-js
      :strings="texts"
      class="typed-center"
      :smartBackspace="true"
      :typeSpeed="50"
      :backDelay="1000"
      :startDelay="1000"
  >
    <h2 class="subtitle"><span class="typing"></span></h2>
  </vue-typed-js>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {VueTypedJs} from "vue-typed-js";

@Component({
  components: {
    VueTypedJs
  }
})
export default class TypeWriting extends Vue {
  @Prop() private texts!: string[]
}
</script>

<style>
  .typing {
    color: #333;
    font-size: 1.4rem;
  }
</style>