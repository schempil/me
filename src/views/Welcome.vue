<template>
  <div class="wrapper">
    <section>
      <div class="columns main-columns">
        <div class="column is-one-third left-main-column">
          <ProfileCard />
        </div>
        <div class="column is-two-thirds is-fullheight right-main-column">
          <div class="intro-texts has-text-centered">
            <h1 class="title">
              Philipp Schemel
            </h1>
            <div class="subtitle-container">
              <TypeWriting :texts="['Software Engineer']" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import SocialButton from "@/components/SocialButton.vue";
import TypeWriting from "@/components/TypeWriting.vue";
import ProfileCard from "@/components/ProfileCard.vue";

@Component({
  components: {ProfileCard, TypeWriting, SocialButton}
})
export default class Welcome extends Vue {

}
</script>

<style scoped>

.wrapper {
  background: #e6ebef;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  height: 100vh;
  min-height: 640px;
  align-items: center;
}

section {
  background: linear-gradient(#0b7080,#0ba376);
  width: 85vw;
  height: 80vh;
  min-height: 550px;
  border-radius: 30px;
}

.main-columns {
  margin: 0;
  height: 80vh;
  min-height: 550px;
}

.left-main-column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.right-main-column {
  border-radius: 30px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67%;
}

.title {
  color: #333;
  font-size: 4rem;
}

.subtitle-container {
  margin-top: 5px;
}

@media screen and (max-width: 770px) {
  .wrapper {
    align-items: flex-start;
    padding-top: 30px;
  }

  .intro-texts {
    text-align: left !important;
  }

  .right-main-column {
    display: none !important;
  }
}
</style>

