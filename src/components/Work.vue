<template>
    <div class="container">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child box">
                            <figure class="image">
                                <img src="https://picsum.photos/640/280">
                            </figure>
                        </article>
                        <article class="tile is-child box">
                            <figure class="image">
                                <img src="https://picsum.photos/640/280">
                            </figure>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <figure class="image">
                                <img src="https://picsum.photos/640/680">
                            </figure>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://picsum.photos/640/120">
                        </figure>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <figure class="image">
                        <img src="https://picsum.photos/640/1080">
                    </figure>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Work'
    }
</script>

<style scoped>
    .container {
        margin-top: 1px;
    }
</style>
