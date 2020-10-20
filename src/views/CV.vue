<template>
  <div class="cv-wrapper">
    <div class="title">{{ profile.first_name }}'s CV</div>
    <div class="subtitle">Working Experience</div>
    <div class="content">
      <div class="columns" v-for="workExperience in workExperiences" v-bind:key="workExperience.employer">
        <div class="column is-half">
          <div class="column is-one-third">
            2008<br/>
            @{{ workExperience.employer }}
          </div>
          <div class="column is-two-third">
            {{ workExperience.title }}<br/>
            <div class="tags">
              <span class="tag is-primary" v-for="skill in workExperience.skills" v-bind:key="skill">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
        <div class="column is-half">
          {{ workExperience.description }}
        </div>
      </div>

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
    font-size: 1.75rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .content {
    color: #333;
    font-size: 1.25rem;
  }
</style>

