<template>
  <a target="_blank" :href="url" :class="'button is-medium is-' + (color || platform)">
    <b-icon :icon="platform" size="is-medium" />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SocialButton extends Vue {
  @Prop() private platform!: string;
  @Prop() private color!: string;
  @Prop() private url!: string;
}
</script>

<style>
a {
  margin-right: 4px;
  background: transparent !important;
  border: 0 !important;
  color: #fff !important;
}
</style>