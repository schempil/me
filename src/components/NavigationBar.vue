<template>
    <div class="container">
        <b-navbar>
            <template slot="start">
                <router-link to="/"><b-navbar-item>Hey! 👋🏼</b-navbar-item></router-link>
                <router-link to="/work"><b-navbar-item>Work 💻</b-navbar-item></router-link>
                <router-link to="/contact"><b-navbar-item>Contact 📮</b-navbar-item></router-link>
            </template>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'NavigationBar'
    }
</script>

<style>

</style>