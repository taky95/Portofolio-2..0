<template>
  <div class="skill">
    <v-col cols="6" md="4">
      <label class="skill-lbl">{{ title }}</label>
    </v-col>
    <v-col>
      <div class="toolbox" :class="{toolboxDark:isDarkMode}">
        <v-icon>
          mdi-github
        </v-icon>
        <h3 :class="{borderDark:isDarkMode}" >Git hub</h3>
        <p>3 years of experience</p>
      </div>
    </v-col>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Language'
    }
  },
  computed: {
    isDarkMode () {
      return this.$vuetify.theme.dark
    }
  }
}

</script>
<style lang="scss" scoped>
.skill{
  display: flex;
  width: 100%;
  position: relative;
}
.skill-lbl{
  width: 100%;
  font-size: $subtitle-size;
  font-weight: bold;
  z-index: 1;
  position: relative;
}

.skill-lbl::after{
  content: "";
  background-image: url("~/assets/img/hammer-screwdriver.svg");
  position: absolute;
  pointer-events: none;
  width: 50px;
  height: 50px;
  // left: 400px;
  z-index: 0;
  // vertical-align: middle;
}

.toolbox{
  background-color: $icyblue;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
  box-shadow: inset 0 0 3px $darkgrey;
  width: 100%;
  text-align: left;
}

.toolbox h3{
  font-weight: normal;
  border-bottom: solid 1px $skyblue;
}

.borderDark{
  border-bottom: solid 1px $slateblue !important;
}

.toolboxDark{
  background-color: $lightgrey;
}
</style>
