<template>
  <div class="skill">
    <v-col cols="6" md="4" style="text-align: right; padding-right: 12%">
      <label class="skill-lbl" :class="{borderDark:isDarkMode}">{{ title }}</label>
    </v-col>
    <v-col>
      <div class="toolbox" :class="{toolboxDark:isDarkMode}">
        <v-icon
          v-for="object in content"
          :key="object.index"
          size="50"
          :color="isSelected(object.icon)"
          @click="selectIcon(object); clicked()"
        >
          {{ object.icon }}
        </v-icon>
        <div class="skillDesc">
          <h3>
            {{ skillName }}
          </h3>
          <p>{{ skillDesc }}</p>
          <p>{{ skillExp *2 /10 }} yrs+ experience</p>
        </div>
        <v-progress-linear
          v-model="skillExp"
          :buffer-value="bufferValue"
          color="accent"
          rounded
          stream
        />
      </div>
    </v-col>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Language'
    },
    content: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data () {
    return {
      skillIcon: String,
      skillName: String,
      skillDesc: String,
      skillExp: 0,
      selected: false,
      bufferValue: 50
    }
  },
  computed: {
    isDarkMode () {
      return this.$vuetify.theme.dark
    },
    isSelected () {
      return function (icon) {
        if (icon === this.skillIcon) {
          return 'accent'
        }
      }
    }
  },
  watch: {
  },
  mounted () {
    this.firstIcon()
  },
  methods: {
    selectIcon (selected) {
      this.skillName = selected.name
      this.skillDesc = selected.text
      this.skillExp = selected.exp / 2
      this.skillIcon = selected.icon
    },
    firstIcon () {
      this.skillName = this.content[0].name
      this.skillDesc = this.content[0].text
      this.skillExp = this.content[0].exp / 2
      this.skillIcon = this.content[0].icon
    },
    clicked () {
      const target = this.$el.getElementsByClassName('skillDesc')
      this.$gsap.fromTo(target, 1, { opacity: 0, translateY: 5 }, { opacity: 1, translateY: 0, ease: 'power4.out' })
    }
  }
}

</script>
<style lang="scss" scoped>

.skill{
  display: flex;
  width: 100%;
  position: relative;
  animation: fade-in-up 3s, ease-out;
}
.skill-lbl{
  width: 100%;
  font-size: $subtitle-size;
  font-weight: normal;
  z-index: 1;
  position: relative;
  border-bottom: solid 1px $skyblue;
  text-align: left;
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
}

.borderDark{
  border-bottom: solid 1px $slateblue !important;
}

.toolboxDark{
  background-color: $lightgrey;
}

.selected{
  color: $skyblue !important;
}
.selectedDark{
  color: $slateblue !important;
}
</style>
