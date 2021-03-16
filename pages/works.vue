<template>
  <v-row>
    <v-col cols="10" >
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
              <v-col cols="3" class="worksLbl">
                Overview:
              </v-col>
              <v-col>{{ work.desc }}</v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="worksLbl">
                Language & Framework:
              </v-col>
              <v-col>{{ work.lang }}</v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="worksLbl">
                Libraries
              </v-col>
              <v-col>{{ work.lib }}</v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="worksLbl">
                Tools
              </v-col>
              <v-col>{{ work.tools }}</v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <img class="worksImg" src="~/assets/img/coding.svg" alt="">
    </v-col>
    <v-col cols="2">
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
        url: 'https://takumiminohara.site',
        git: 'https://github.com/taky95/wp-theme-takumi',
        title: 'My Portfolio',
        desc: 'This is my portfolio',
        lang: 'WP, PHP JS',
        lib: '-',
        tools: 'GCP'
      }, {
        img: require('~/assets/img/works/screenshot2.png'),
        url: 'https://takumiminohara.site',
        git: 'https://github.com/taky95/wp-theme-takumi',
        title: 'project2',
        desc: 'This is my portfolio',
        lang: 'WP, PHP JS',
        lib: '-',
        tools: 'GCP'
      }, {
        img: require('~/assets/img/works/screenshot3.png'),
        url: 'https://takumiminohara.site',
        git: 'https://github.com/taky95/wp-theme-takumi',
        title: 'project3',
        desc: 'This is my portfolio',
        lang: 'WP, PHP JS',
        lib: '-',
        tools: 'GCP'
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
        tools: '',
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

.worksDemo{
}
.worksDemo a{
  margin: 2%;
}

.worksDesc{
  padding: 1%;
  animation: fade-in-up 1s ease-in;
  opacity: 1;
}

.worksMenu{
  border-left: $darkgrey 1px solid;
  height: 100%;
  margin-left: 20%;
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

.worksImg{
  pointer-events: none;
  position: absolute;
  bottom: 7%;
  right: 14%;
  width: 20%;
  opacity: 0.8;
}

.worksThumb{
  width: auto;
  height: 400px;
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.1));
  margin: 2%;
  border-radius: 3px;
}

.worksLbl{
  text-align: right;
  font-weight: bold;
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

.worksTitle{
  animation: fade-in-right 1s ease-in;
}

</style>
