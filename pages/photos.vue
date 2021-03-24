<template>
  <v-row justify="center" align="stretch" align-content="stretch" class="mb-reverse">
    <v-col cols="12" md="9">
      <div class="text-center photoGallery">
        <PhotoCollection
          :images="images"
        />
      </div>
    </v-col>
    <v-col cols="12" md="3">
      <div class="photoDesc" :class="{photoDescDark:isDarkMode}">
        <h1>Photography</h1>
        <p>
          is another passion i pursue outside of my coding life.
          I love traveling, eating, experiencing stuff, and capture the moment...
          I have shared some of my favourite pictures here.
          The photos here are licensed under copy right free. You can use them however you want,
          as long as you credit me on your project.
          If you like any of my work, you can check out more from the button bellow.
        </p>
        <v-btn
          color="accent"
          href="https://stock.adobe.com/jp/contributor/208220138/Takumi.m"
          target="_blank"
        >
          <v-icon>mdi-image-album</v-icon> Adobe Stock
        </v-btn>
        <div style="margin-top: 20px;">
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png">
          </a><br>This work is licensed under a
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International License
          </a>.
          <div id="credit-wrap">
            <label for="credit" /><input id="credit" type="text" name="credit_text" value="<a href=&quot;https://takumiminohara.site/&quot;>&copy;Takumi.M - 2021</a>" readonly>
            <v-btn button @click="copyText()">
              Copy
            </v-btn>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import PhotoCollection from '@/components/PhotoCollection'

export default {
  components: {
    PhotoCollection
  },
  data () {
    return {
      images: [
        { src: require('~/assets/img/photos/img-01.jpg') },
        { src: require('~/assets/img/photos/img-02.jpg') },
        { src: require('~/assets/img/photos/img-03.jpg') },
        { src: require('~/assets/img/photos/img-04.jpg') },
        { src: require('~/assets/img/photos/img-05.jpg') },
        { src: require('~/assets/img/photos/img-06.jpg') },
        { src: require('~/assets/img/photos/img-07.jpg') },
        { src: require('~/assets/img/photos/img-08.jpg') },
        { src: require('~/assets/img/photos/img-09.jpg') },
        { src: require('~/assets/img/photos/img-10.jpg') },
        { src: require('~/assets/img/photos/img-11.jpg') },
        { src: require('~/assets/img/photos/img-12.jpg') },
        { src: require('~/assets/img/photos/img-13.jpg') },
        { src: require('~/assets/img/photos/img-14.jpg') },
        { src: require('~/assets/img/photos/img-15.jpg') },
        { src: require('~/assets/img/photos/img-16.jpg') },
        { src: require('~/assets/img/photos/img-17.jpg') },
        { src: require('~/assets/img/photos/img-18.jpg') },
        { src: require('~/assets/img/photos/img-19.jpg') }
      ]
    }
  },
  head () {
    return {
      title: 'photos'
    }
  },
  computed: {
    isDarkMode () {
      return this.$vuetify.theme.dark
    }
  },
  methods: {
    copyText () {
      const txt = document.getElementById('credit')
      txt.select()
      txt.setSelectionRange(0, 99999)
      document.execCommand('copy')
      alert('Copied: ' + txt.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.photoGallery{
  animation: fade-in .5s ease-in;
}

.photoDesc{
  border-left: $darkgrey 1px solid;
  text-align: left;
  padding: 5%;
  height: 100%;
  animation: fade-in 1s ease-in;
  position: relative;
}

.photoDesc h1:after{
  content: '';
  position: absolute;
  height: 2px;
  background-color: $skyblue;
  display: block;
  left: 20px;
  top: 61px;
  animation: moveUnder .5s ease-in;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  @include sm {
    top: 80px;
  }
  @include xs {
    top: 60px;
  }
}

.photoDescDark{
  border-left: $white 1px solid !important;
}

.photoDescDark h1:after{
  background-color: $slateblue !important;
}
#credit-wrap{
  text-align: center;
}
#credit-wrap input{
  width: 100%;
  box-shadow: inset 0 0 2px $darkgrey;
  margin: 5%;
  padding: 2%;
}

.mb-reverse{
  @include sm {
    flex-direction: column-reverse;
  }
  @include xs {
    flex-direction: column-reverse;
  }
}
</style>
