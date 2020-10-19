<template>
  <div class="cv-wrapper">
    <div class="title">{{ profile.first_name }}'s CV</div>
    <div class="subtitle">Working Experience</div>
    <div class="content">
      <p v-for="workExperience in workExperiences" v-bind:key="workExperience.employer" >
        {{ workExperience.title }} @{{ workExperience.employer }}<br/>
        {{ workExperience.description }}<br/>
        <span v-for="skill in workExperience.skills" v-bind:key="skill">
          {{ skill }}
        </span>
      </p>
    </div>
    <router-link to="/"> ↪ Home</router-link>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  components: { }
})
export default class CV extends Vue {

  @Prop() private profile!: Profile;

  workExperiences: WorkExperience[] = []

  mounted() {
    if (this.profile) {
      this.workExperiences = this.profile.work_experiences
    }
  }

}
</script>

<style scoped>

  .cv-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .title {
    color: #333;
    font-size: 4rem;
    margin-bottom: 50px;
  }

  .subtitle {
    color: #333;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .content {
    color: #333;
    font-size: 1.25rem;
  }
</style>

