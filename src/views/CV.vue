<template>
  <div>
    <div class="cv-wrapper">
      <div class="title">{{ profile.first_name }}'s CV</div>
      <div class="subtitle">Working Experience</div>
      <div class="content">
        <div class="columns" v-for="workExperience in workExperiences" v-bind:key="workExperience.employer">
          <div class="column is-one-third">
            <span class="job-title">{{ workExperience.title }}</span><br/>
            <span class="year" v-if="!workExperience.end_date">since </span>
            <span class="year">{{ workExperience.start_date }}</span>
            <span class="year" v-if="workExperience.end_date"> - {{ workExperience.end_date }}</span><br/>
            <span class="employer">@{{ workExperience.employer }}</span>
            <div class="tags">
              <span class="tag is-info is-light" v-for="skill in workExperience.skills" v-bind:key="skill">
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="column is-two-thirds job-description-column ">
            <div class="job-description">{{ workExperience.description }}</div>
          </div>
        </div>

      </div>
    </div>
    <div class="closing-section">
      <div class="columns">
        <div class="column is-half">
          <router-link to="/">Home ↩</router-link>
        </div>
        <div class="column is-half has-text-right ">
          <router-link to="/">↪ Skills</router-link>
        </div>
      </div>
    </div>
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

  .year {
    font-size: 1rem;
    font-weight: 300;
  }

  .employer {
    font-size: 0.9rem;
    font-weight: 200;
  }

  .job-title {
    font-size: 1rem;
    font-weight: 500;
  }

  .job-description {
    font-size: 1rem;
  }

  .tags {
    margin-top: 15px;
  }

  .job-description-column {
    margin-top: 4px;
  }

  .closing-section {
    margin-top: 50px;
  }

  .content {
    color: #333;
    font-size: 1.25rem;
  }
</style>

