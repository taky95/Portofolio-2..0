<template>
  <v-col class="about" justify="center">
    <v-row >
      <v-col cols="12" md="4">
        <v-row style="justify-content: center">
          <profile />
        </v-row>
        <v-row style="justify-content: center">
          <socialBtn />
        </v-row>
      </v-col>
      <v-col cols="12" md="8">
        <div class="bio-header">
          <h1>Takumi Minohara</h1>
          <h2>A developer with creative mind</h2>
          <p>
            Debra Carroll knows that successful students become successful adults. This is her 15th year at Edison Elementary School and her 10th year teaching fourth grade. So far, fourth grade is her favorite grade to teach! Mrs. Carroll was the 2011 Newell Unified School District Teacher of the Year, and received her National Board Certification in 2013. She loves science and majored in biology at Arizona State University, where she also earned her teaching credential and Master of Education degree. Mrs. Carroll is excited to begin the best year ever!
          </p>
          <div class="text-right">
            <v-btn class="resume-btn" color="accent">
              <v-icon>mdi-download</v-icon>Resume
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <toolbox
        title="Languages"
        :content="skill"
      />
    </v-row>
    <v-row>
      <toolbox title="Tools" :content="tools" />
    </v-row>
  </v-col>
</template>
<script>
import toolbox from '~/components/Toolbox.vue'
import profile from '~/components/Profile.vue'
import socialBtn from '~/components/SocialBtn.vue'

export default {
  components: {
    toolbox,
    profile,
    socialBtn
  },
  data () {
    return {
      skill: [
        { name: 'github', icon: 'mdi-github', text: 'used in projects, intermediate, familiar', exp: 50 },
        { name: 'Ruby on Rails', icon: 'mdi-language-ruby-on-rails', text: 'known, learning', exp: 60 },
        { name: 'Django', icon: 'mdi-language-python', text: 'Best experienced', exp: 70 }
      ],
      tools: [
        { name: 'visual studio', icon: 'mdi-github', text: '4yrs+ experience', exp: 40 },
        { name: 'Pycharm', icon: 'mdi-language-html5', text: '4yrs+ experience', exp: 20 },
        { name: 'Nuxt', icon: 'mdi-language-javascript', text: '4yrs+ experience', exp: 60 }
      ]
    }
  },
  head () {
    return {
      title: 'about'
    }
  }
}
</script>

<style lang="scss" scoped>

.about{
  max-width: 1200px;
  margin: 0 auto;
}

.social-btn{
  display: flex;
}

.bio-header{
  text-align: left;
  font-weight: 400;
  animation: fade-in 3s ease-out;
}

.bio-header h1, .bio-header h2{
  font-weight: lighter !important;
}

.resume-btn{
}
</style>
