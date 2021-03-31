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
          Web development is my passion, and I love to keep providing the best solutions that match your problems. I have taken part as a front-end developer in most of the projects, designing UI/UX and creating animation to guide users effectively. The responsibilities varied from creating a mockup to writing a function using Ajax and ensuring the apps get hosted securely. I’m also eager to follow technology trends and apply them in my own coding.<br>
          I graduated from Computer System Technology at Camosun College in 2017; I specialized in web development. The languages I’m best at are JavaScript, CSS, Vue, Python, etc. Although my strength lies in the front-end side, I’m passionate about learning more about building back-end systems and hoping to become a full-stack developer in the future. Outside of coding, I enjoy travelling and taking pictures.
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
        { name: 'HTML5', icon: 'mdi-language-html5', text: '7 years of experience. ', exp: 100 },
        { name: 'CSS3', icon: 'mdi-language-css3', text: 'Saas / Scss / Bootstrap / Materialize.css / Animate.css', exp: 100 },
        { name: 'JavaScript', icon: 'mdi-language-javascript', text: 'CoffeeScript / GSAP / jQuery', exp: 80 },
        { name: 'Typescript  ', icon: 'mdi-language-typescript', text: 'Learning', exp: 20 },
        { name: 'React', icon: 'mdi-react', text: 'React router / Redux', exp: 40 },
        { name: 'Vue', icon: 'mdi-vuejs', text: 'Nuxt / Vuetify', exp: 50 },
        { name: 'Python', icon: 'mdi-language-python', text: 'Django', exp: 50 },
        { name: 'Ruby', icon: 'mdi-language-ruby', text: 'Ruby on Rails', exp: 80 },
        { name: 'PHP', icon: 'mdi-language-php', text: 'WordPress', exp: 50 },
        { name: 'Java', icon: 'mdi-language-java', text: 'Learnt OOP through Java.', exp: 40 },
        { name: 'MySQL', icon: 'mdi-database', text: 'Most of my projects are based on MySQL. \nI\'m also familier with OracleSQL, MongoDB, etc.', exp: 80 },
      ],
      tools: [
        { name: 'Git/GitHub/GitLab', icon: 'mdi-git', text: 'All of my code is stored and managed through GitHub. \nPlease check out my Github page from the icon above.', exp: 80 },
        { name: 'npm/yarn ', icon: 'mdi-npm', text: '-', exp: 80 },
        { name: 'Eslint', icon: 'mdi-eslint', text: 'I like to keep integrity of my code by following Eslint', exp: 80 },
        { name: 'Apache', icon: 'mdi-feather', text: 'My projects are hosted on an Apache server.', exp: 50 },
        { name: 'GCP/GCE', icon: 'mdi-google-cloud', text: 'My projects are hosted on Google cloud engines. ', exp: 50 },
        { name: 'Google Analytics', icon: 'mdi-google-analytics', text: 'Learning', exp: 20 },
        { name: 'Cloudflare', icon: 'mdi-weather-partly-cloudy', text: 'Enabled easy setup for  HTTPS connection for my sites.', exp: 50 },
        { name: 'Adobe CC', icon: 'mdi-infinity', text: 'Photoshop / AdobeXD / Lightroom', exp: 80 },
        { name: 'InVision', icon: 'mdi-shape-square-plus', text: 'Used in making mockups and wireframes', exp: 40 },
        { name: 'VSC', icon: 'mdi-microsoft-visual-studio-code', text: '-', exp: 40 },
        { name: 'Jetbrains', icon: 'shape-polygon-plus', text: 'Preffered IDE.', exp: 50 },
        { name: 'Linux', icon: 'mdi-linux', text: 'Vim is my preferred editor.', exp: 80 },
        { name: 'Debian', icon: 'mdi-debian', text: 'My projects are based on the Debian server.', exp: 80 },
        { name: 'Ubuntu', icon: 'mdi-ubuntu', text: 'Have installed and configured the Ubuntu server.', exp: 40 },
        { name: 'Windows', icon: 'mdi-microsoft-windows', text: 'Long-time user. I\'ve also configured Windows Server too.', exp: 80 },
        { name: 'macOS', icon: 'mdi-desktop-mac-dashboard', text: 'My main computer.\n I use MAMP to set up a development environment.', exp: 80 },
        { name: 'Slack', icon: 'mdi-slack', text: 'I use Slack for team communiation', exp: 80 }
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
