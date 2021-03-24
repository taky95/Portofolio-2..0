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
          <h2>Providing solutions with creativeness in mind.</h2>
          <p>
            Web development is my passion and I’m always seeking the best practices that match problems to solve the difficult situation. In the past projects, I often took part as a front-end developer designing UI/UX and creating animation to guide users through the websites efficiently. The responsibilities vary from designing a mockup to writing a function using Ajax. I’m also eager to follow new technology trends and apply them in my own coding. In 2017, I graduated from Computer System Technology at Camosun College, and since then I have been specializing in web development. The languages I’m best at are JavaScript, CSS, Vue, Python, etc. Although my strength lies in the front-end side, I love building back-end systems too, and my current goal is to become a full-stack developer.
          </p>
          <div class="text-right">
            <v-btn class="resume-btn" href="/Resume.pdf" color="accent" target="_blank">
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
        { name: 'HTML5', icon: 'mdi-language-html5', text: 'Advanced', exp: 100 },
        { name: 'CSS3', icon: 'mdi-language-css3', text: 'Advanced: Saas/Scss/Bootstrap/Materialize.css/Animate.css', exp: 100 },
        { name: 'JavaScript', icon: 'mdi-language-javascript', text: 'Experienced: CoffeeScript/GSAP/jQuery', exp: 80 },
        { name: 'Typescript  ', icon: 'mdi-language-typescript', text: 'Learning: -', exp: 20 },
        { name: 'React', icon: 'mdi-react', text: 'Familiar: React router/Redux', exp: 40 },
        { name: 'Vue', icon: 'mdi-vuejs', text: 'Intermediate: Nuxt/Vuetify', exp: 50 },
        { name: 'Python', icon: 'mdi-language-python', text: 'Intermediate: Django', exp: 50 },
        { name: 'Ruby', icon: 'mdi-language-ruby', text: 'Experienced: Ruby on Rails', exp: 80 },
        { name: 'PHP', icon: 'mdi-language-php', text: 'Intermediate: WordPress', exp: 50 },
        { name: 'Java', icon: 'mdi-language-java', text: 'Familiar: Learnt OOP through Java.', exp: 40 },
        { name: 'MySQL', icon: 'mdi-database', text: 'Experienced: used along Ruby on Rails and Django.', exp: 80 },
      ],
      tools: [
        { name: 'npm/yarn ', icon: 'mdi-npm', text: 'Experienced', exp: 80 },
        { name: 'Eslint', icon: 'mdi-eslint', text: 'Experienced', exp: 80 },
        { name: 'Git/GitHub/GitLab', icon: 'mdi-git', text: 'Experienced', exp: 80 },
        { name: 'Apache', icon: 'mdi-feather', text: 'All of my projects are hosted on an Apache server.', exp: 50 },
        { name: 'GCP/GCE', icon: 'mdi-google-cloud', text: 'All of my projects are hosted on Google cloud servers. ', exp: 50 },
        { name: 'Google Analytics', icon: 'mdi-google-analytics', text: 'Learning', exp: 20 },
        { name: 'Cloudflare', icon: 'mdi-weather-partly-cloudy', text: 'Enabling easy setup for  HTTPS connection for my sites.', exp: 50 },
        { name: 'Adobe CC', icon: 'mdi-infinity', text: 'Photoshop/AdobeXD/Lightroom', exp: 80 },
        { name: 'InVision', icon: 'mdi-shape-square-plus', text: 'Familiar', exp: 40 },
        { name: 'VSC', icon: 'mdi-microsoft-visual-studio-code', text: 'Familiar', exp: 40 },
        { name: 'Jetbrains', icon: 'shape-polygon-plus', text: 'Intermediate', exp: 50 },
        { name: 'Linux', icon: 'mdi-linux', text: 'Experienced: Vim is my preferred editor.', exp: 80 },
        { name: 'Debian', icon: 'mdi-debian', text: 'All of my projects are based on the Debian server.', exp: 80 },
        { name: 'Ubuntu', icon: 'mdi-ubuntu', text: 'Familiar.', exp: 40 },
        { name: 'Windows', icon: 'mdi-microsoft-windows', text: 'Experienced', exp: 80 },
        { name: 'macOS', icon: 'mdi-desktop-mac-dashboard', text: 'Often used MAMP to set up a development environment. / My main computer.', exp: 80 },
        { name: 'Slack', icon: 'mdi-slack', text: 'Experienced', exp: 80 }
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
