<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <Logo />
        <Menu page="about" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Logo,
    Menu
  },
  head () {
    return {
      title: 'about'
    }
  }
}
</script>
