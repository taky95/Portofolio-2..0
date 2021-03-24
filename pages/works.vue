<template>
  <v-row>
    <v-col cols="12" md="10">
      <div class="worksContent" :class="{worksContentDark:isDarkMode}">
        <h1 class="worksTitle">
          {{ work.title }}
        </h1>
        <div class="worksHead">
          <img class="worksThumb" :src="work.img" alt="">
          <div class="worksDemo">
            <v-btn
              color="accent"
              :href="work.url"
              target="_blank"
            >
              <v-icon>mdi-application</v-icon>Demo
            </v-btn>
            <v-btn
              color="accent"
              :href="work.git"
              target="_blank"
            >
              <v-icon>mdi-git</v-icon>Github
            </v-btn>
          </div>
        </div>
        <div class="worksDesc">
          <v-container>
            <v-row>
              <v-col cols="12" md="3" class="worksLbl">
                Overview:
              </v-col>
              <v-col>{{ work.desc }}</v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3" class="worksLbl">
                Language & Framework:
              </v-col>
              <v-col>{{ work.lang }}</v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3" class="worksLbl">
                Libraries
              </v-col>
              <v-col>{{ work.lib }}</v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3" class="worksLbl">
                Tools
              </v-col>
              <v-col>{{ work.tools }}</v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <img class="worksImg" src="~/assets/img/coding.svg" alt="">
    </v-col>
    <v-col cols="12" md="2">
      <div class="worksMenu" :class="{worksMenuDark:isDarkMode}">
        <ul>
          <li
            v-for="data in works"
            :key="data.index"
            :class="{selectedWork:isSelected(data)}"
            @click="selectWorks(data); clicked()"
          >
            {{ data.title }}
          </li>
        </ul>
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      works: [{
        img: require('~/assets/img/works/screenshot.png'),
        url: 'https://test.takumiminohara.site/',
        git: 'https://github.com/taky95/simple-parallax-website-template',
        title: 'Parallax Website',
        desc: 'This was my early personal project. A parallax website template designed for simple use such as landing pages for small business owners. The project started when my friend started up a business and he needed something quick to spread the word. I configured it in only js and CSS, but I learnt a lot about CSS animation and basic Javascript from this project.',
        lang: 'JS / jQuery / CSS / HTML',
        lib: 'jQuery transition box / jQuery scrollTo',
        tools: 'Sublime Text/GCP'
      }, {
        img: require('~/assets/img/works/screenshot2.png'),
        url: 'https://rails.takumiminohara.site/ ',
        git: 'https://github.com/ARealHumanBean/student-queue-project',
        title: 'Student Queue Project',
        desc: 'This is an app designed to be used in a school environment where students have to queue up to ask their questions meanwhile teachers can’t keep track of them, thus it leads to students missing the learning opportunities. This app reads the CSV form of the class list and creates users with categorized question lists. Students can log in to the app by using student credentials, and push the questions by the categories (such as the question, support, demo). Teachers can see the student’s questions along with who they are, and when they have asked. The queue is controlled in real-time sync, so there are no conflicts between students. I took part as a front engineer and mainly worked on UI. \n' +
          'For demo purposes, sample users are provided. To log in as an instructor, use "C0000001", and use "C0000002" to log in as a student.',
        lang: 'JS / CoffeeScript / CSS / HTML / Bootstrap / Ruby on Rails / MySQL',
        lib: '-',
        tools: 'AWE(cloud9 IDE) / Heroku / Github / Google Fonts'
      }, {
        img: require('~/assets/img/works/screenshot4.png'),
        url: 'https://react.takumiminohara.site',
        git: 'https://github.com/taky95/spa-react-template',
        title: 'SPA Website',
        desc: 'This is my personal project. A SPA website that runs smooth video background, and fully responsive. I created this on the assumption of taking the same project as the Parallax website and wanted to provide an improved version by configuring React. The site is using React Router to make SPA features to prevent users from loading each page.  ',
        lang: 'React / HTML / Scss',
        lib: 'Animate.css / Google Fonts',
        tools: 'Bracket / GCP'
      }, {
        img: require('~/assets/img/works/screenshot3.png'),
        url: 'http://capstone.camosun.ca/archived-capstone/June2017/',
        git: 'https://gitlab.com/camosunwebcommittee/tech-symposium',
        title: 'Capstone Project',
        desc: 'Landing page for Camosun College capstone project 2017. I took part as a front-end developer. ',
        lang: 'PHP / HTML / CSS',
        lib: '-',
        tools: 'GitLab / Heroku'
      }, {
        img: require('~/assets/img/works/noimg.png'),
        url: '/',
        git: 'https://github.com/ProGorilla007/Macy ',
        title: 'Macy',
        desc: 'This is my personal project. A web application provides a customizable link hub page that can be shared by a dedicated NFC card. It’s started in mind to replace a traditional business card with NFC cards has all of your social media and links. It is supposed to help get rid of the hassle to exchange multiple contact information or help to advertise your business’s social media accounts just by a tap at the cashier. Users can create the links from preset social media, or choose their own links to share. The user page can be customized freely by uploading your profile and header images. \n**It’s currently in development. **',
        lang: 'Python / Django / JS / HTML / Sass / jQuery / MySQL',
        lib: 'Materialize.css / emergence.js',
        tools: 'PyCharm / GitHub'
      }, {
        img: require('~/assets/img/works/screenshot5.png'),
        url: '/',
        git: 'https://github.com/taky95/wp-theme-takumi ',
        title: 'Portfolio 1.0',
        desc: 'This was my first portfolio based on WP. I wanted to learn more about CMS and server-side programming, so I chose to do it on WordPress. Now, it’s providing an API to help this website work. ',
        lang: 'PHP / WordPress / JS / Scss / jQuery',
        lib: 'emergence.js, lit.js / jQuery scrollTo.js / jQuery vide.js / Animate.css',
        tools: 'GCP / Bracket / CloudFlare / GitHub'
      }],
      // selected work data
      work: {
        img: '',
        url: '',
        git: '',
        title: '',
        desc: '',
        lang: '',
        lib: '',
        tools: ''
      }
    }
  },
  head () {
    return {
      title: 'works'
    }
  },
  computed: {
    isDarkMode () {
      return this.$vuetify.theme.dark
    },
    isSelected () {
      return function (work) {
        return work.title === this.work.title
      }
    }
  },
  mounted () {
    this.setWorks()
  },
  methods: {
    setWorks () {
      this.work.img = this.works[0].img
      this.work.url = this.works[0].url
      this.work.git = this.works[0].git
      this.work.title = this.works[0].title
      this.work.desc = this.works[0].desc
      this.work.lang = this.works[0].lang
      this.work.lib = this.works[0].lib
      this.work.tools = this.works[0].tools
    },
    selectWorks (selected) {
      this.work.img = selected.img
      this.work.url = selected.url
      this.work.git = selected.git
      this.work.title = selected.title
      this.work.desc = selected.desc
      this.work.lang = selected.lang
      this.work.lib = selected.lib
      this.work.tools = selected.tools
    },
    clicked () {
      const target = this.$el.getElementsByClassName('worksContent')
      this.$gsap.fromTo(target, 2, { opacity: 0 }, { opacity: 1, ease: 'power4.out' })
    }
  }
}
</script>

<style lang="scss" scoped>
.worksContent{
  background-color: rgba($skyblue, 0.1);
  height: 100%;
  padding: 5%;
  border-radius: 3px;
}

.worksContentDark{
  background-color: rgba($slateblue, 0.1) !important;
}

.worksContent h1 {
  border-left: solid 5px $darkgrey;
  padding-left: 5px;
  font-size: $title-size;
  font-weight: normal;
}

.worksContentDark h1{
  border-left: solid 5px $white !important;
}

.worksHead{
  text-align: center;
  animation: fade-in-up 1s ease-in;
}

.worksTitle{
  animation: fade-in-right 1s ease-in;
}

.worksThumb{
  width: auto;
  height: 400px;
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.1));
  margin: 2%;
  border-radius: 3px;
  @include sm {
    width: 70%;
    height: auto;
  }
  @include xs {
    width: 50%;
    height: auto;
  }
}

.worksDemo a{
  margin: 2%;
}

.worksDesc{
  padding: 1%;
  animation: fade-in-up 1s ease-in;
  opacity: 1;
}

.worksLbl{
  text-align: right;
  font-weight: bold;
  @include sm {
    text-align: left;
  }
  @include xs {
    text-align: left;
  }
}

.worksMenu{
  border-left: $darkgrey 1px solid;
  height: 100%;
  margin-left: 20%;
  @include sm {
  }
  @include xs {
    margin: auto;
  }
}

.worksMenuDark{
  border-left: $white 1px solid;
}

.worksMenuDark .selectedWork{
  color: $slateblue;
}

.worksMenu li{
  margin: 10%;
  list-style: none;
  font-size: $subtitle-size;
  cursor: pointer;
}

.worksMenu li::after{
  content: '';
  border-bottom: 2px solid $skyblue;
  display: block;
  width: 0;
  transition: all .5s ease-out;
}

.worksMenu li:hover::after{
  width: 100%;
}

.worksMenuDark li::after{
  border-bottom: 2px solid $slateblue;
}

.selectedWork{
  color: $skyblue;
  animation: fade-in-left .5s ease-out;
}

.worksImg{
  pointer-events: none;
  position: absolute;
  bottom: 1%;
  right: 5%;
  width: 20%;
  opacity: 0.8;
}

</style>
