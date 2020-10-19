<template>
  <div class="welcome-wrapper">
    <div>
      <h1 class="title">
        {{ profile.first_name }} {{ profile.last_name }}
      </h1>
      <div class="subtitle-container"   >
        <TypeWriting :texts="[profile.title]" />
      </div>
      <hr/>
      <a class="router-link">
        <router-link to="/CV"> ↪ CV</router-link>
      </a>
    </div>

  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import TypeWriting from "@/components/TypeWriting.vue";

@Component({
  components: {TypeWriting}
})
export default class Welcome extends Vue {

  @Prop() private profile!: Profile;

}
</script>

<style scoped>

  .title {
    color: #333;
    font-size: 4rem;
  }

  .router-link {
    color: red;
  }

  .welcome-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }

  .subtitle-container {
    margin-top: 5px;
  }
</style>

