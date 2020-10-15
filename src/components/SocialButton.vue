<template>
    <a target="_blank" :href="url" :class="'button is-medium is-' + (color || platform)">
        <b-icon :icon="platform" size="is-medium" />
    </a>
</template>

<script>
    export default {
        name: 'SocialButton',
        props: {
            platform: String,
            color: String,
            url: String
        }
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
