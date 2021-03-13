<template>
  <v-app id="main" dark>
    <v-main class="main-content">
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
    </v-main>
    <img :class="{bgImgDark:isDarkMode}" class="bg-img" src="~assets/img/bg-img1.svg" alt="">
    <v-footer
      :absolute="!fixed"
      app
      color="rgba(0,0,0,0)"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: true
    }
  },
  computed: {
    isDarkMode () {
      return this.$vuetify.theme.dark
    }
  }
}
</script>

<style lang="scss">
#main{
  position: relative;
}

.bg-img{
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  z-index: 0;
  mix-blend-mode: multiply;
  pointer-events: none;
}

.bgImgDark{
  filter: hue-rotate(50deg);
}
</style>
