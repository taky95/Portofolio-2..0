<template>
  <v-app id="main" dark>
    <v-main class="main-content">
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-btn
      class="mx-2 fltMenu"
      right
      fixed
      color="accent"
      fab
      @click.stop="openMenu=!openMenu"
      aria-label="open menu"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <img id="moveImg" :class="{bgImgDark:isDarkMode}" class="bg-img" src="~assets/img/bg-img1.svg" alt="">
    <v-footer
      :absolute="!fixed"
      app
      color="rgba(0,0,0,0)"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <v-navigation-drawer
      id="navDrawer"
      v-model="openMenu"
      absolute
      temporary
      width="100%"
    >
      <v-list dense style="padding-left: 20%">
        <Menu
          v-for="menu in menus"
          :key="menu.index"
          :page="menu.page"
          :icon="menu.icon"
          :title="menu.title"
        />
      </v-list>
      <v-divider />
      <div class="switch-list">
        <DarkmodeSwitch id="dark-mode-switch" />
        <DraggableMenu />
      </div>
      <v-divider />
      <div class="credit">
        <p>Credits</p>
        <a href="https://www.vecteezy.com/free-vector/shapes">Shapes Vectors by Vecteezy</a>
      </div>
      <v-btn
        class="mx-2 fltMenu close"
        right
        fixed
        color="primary"
        fab
        @click.stop="openMenu=!openMenu"
        aria-label="close menu"
      >
        <v-icon style="transform: rotate(45deg)">
          mdi-plus
        </v-icon>
      </v-btn>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Menu from '~/components/Menu.vue'
import DarkmodeSwitch from '~/components/Darkmode.vue'
import DraggableMenu from '~/components/DraggableMenu.vue'

export default {
  components: {
    Menu,
    DarkmodeSwitch,
    DraggableMenu
  },
  data () {
    return {
      fixed: true,
      openMenu: false,
      menus: [
        { title: 'Home', page: '', icon: 'mdi-home-circle' },
        { title: 'About', page: 'About', icon: 'mdi-account-details' },
        { title: 'Works', page: 'Works', icon: 'mdi-file-code' },
        { title: 'Photos', page: 'Photos', icon: 'mdi-camera-iris' },
        { title: 'Contact', page: 'Contact', icon: 'mdi-human-greeting-proximity' }
      ]
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
  overflow: hidden;
  @include sm {
    overflow: visible;
  }
  @include xs {
    overflow: visible;
  }
}

.bg-img{
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  z-index: 0;
  mix-blend-mode: multiply;
  pointer-events: none;
  animation: up-and-down 15s linear infinite;
}

.bgImgDark{
  filter: hue-rotate(50deg);
}

.switch-list{
  margin-left: 2%;
  padding-left: 20%;
}

.fltMenu{
  bottom: 10%;
  right: 5%;
  @include sm {
  }
  @include xs {
    width: 40px !important;
    height: 40px !important;
    right: 5%;
  }
}

.fltMenu.close{
  @include sm {
  }
  @include xs {
    bottom: 20%  
  }
}

#navDrawer{
  position: fixed !important;
  height: 100vh !important;

  .v-navigation-drawer__content{
    overflow: hidden;
  }
  @include sm {
    position: fixed !important;
    height: 100vh !important;
  }
  @include xs {
    position: fixed !important;
    height: 100vh !important;
  }
}

.credit{
  margin: 5%;
  padding-left: 20%;
  p{
    font-size: $mobile-text-size;
    color: $lightgrey;
  }
  a{
    font-size: $mobile-text-size;
    color: $lightgrey;
    text-decoration: none;
  }
}
</style>
