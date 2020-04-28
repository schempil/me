<template>
    <div class="container">
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Name">
            <b-input type="email" v-model="mail"></b-input>
        </b-field>

        <b-field label="Message">
            <b-input maxlength="200" type="textarea">{{ message}}</b-input>
        </b-field>

        <b-button type="is-primary" icon-left="send" expanded>
            Send
        </b-button>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                name: '',
                mail: '',
                message: ''
            }
        }
    }
</script>