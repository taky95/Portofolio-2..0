<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Logo />
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <div class="menu-list">
        <Menu page="About" icon="mdi-account-details" title="About" />
        <Menu page="Works" icon="mdi-file-code" title="Works" />
        <Menu page="Photos" icon="mdi-camera-iris" title="Photos" />
        <Menu page="Contact" icon="mdi-human-greeting-proximity" title="Contact" />
      </div>
      <div class="switch-list">
        <DarkmodeSwitch id="dark-mode-switch" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Menu from '~/components/Menu.vue'
import DarkmodeSwitch from '~/components/Darkmode.vue'

export default {
  components: {
    Logo,
    Menu,
    DarkmodeSwitch
  },
  head () {
    return {
      title: 'index'
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-list{
  position: relative;
}

.menu-list div{
  margin-left: 20%;
}

.switch-list{
  display: flex;
  justify-content: space-evenly;
}

.switch-list div{
  margin-left: 2%;
}

</style>
