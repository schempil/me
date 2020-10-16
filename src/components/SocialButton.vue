<template>
    <a target="_blank" :href="url" :class="'button is-medium is-' + (color || platform)">
        <b-icon :icon="platform" size="is-medium" />
    </a>
</template>

<script>
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    components: {}
  })

  class SocialButton extends Vue {

    @Prop() name
    @Prop() color
    @Prop() url

  }

  export default SocialButton
</script>

<style>
    a {
      margin-right: 4px;
      background: transparent !important;
      border: 0 !important;
      color: #fff !important;
    }
</style>
