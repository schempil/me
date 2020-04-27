<template>
    <a target="_blank" :href="url" :class="'button is-medium is-' + platform">
        <b-icon :icon="icon || platform" size="is-medium" />
    </a>
</template>

<script>
    export default {
        name: 'SocialButton',
        props: {
            platform: String,
            icon: String,
            url: String
        }
    }
</script>

<style>
    a {
        margin-right: 4px;
    }
</style>
