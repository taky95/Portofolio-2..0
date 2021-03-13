<template>
  <div class="menu">
    <div class="menu-btn">
      <nuxt-link style="color:rgba(0,0,0,0)" class="menu-icon" icon to="/about">
        <v-icon
          :class="isDarkMode? 'menu-i-dark' : 'menu-i-light'"
          class="menu-i"
          size="60"
          color="primary"
          @mouseleave="hideLbl"
          @mouseover="showLbl"
        >
          {{ icon }}
        </v-icon>
      </nuxt-link>
      <label
        :class="[{ hiddenLbl: isHidden }, isDarkMode? 'menu-lbl-dark' : 'menu-lbl-light']"
        class="menu-lbl"
      >
        {{ page }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: 'index'
    },
    icon: {
      type: String,
      default: 'mdi-home-circle'
    }
  },
  data () {
    return {
      isHidden: true
    }
  },
  computed: {
    isDarkMode () {
      return this.$vuetify.theme.dark
    }
  },
  mounted () {
    this.fadeInMenu()
  },
  methods: {
    showLbl () {
      if (this.isHidden === true) {
        this.isHidden = !this.isHidden
      }
    },
    hideLbl () {
      if (this.isHidden === false) {
        this.isHidden = !this.isHidden
      }
    },
    fadeInMenu () {
      const gsap = this.$gsap.timeline()
      const menu = document.getElementsByClassName('menu-i')
      for (let i = 0; i < menu.length; i++) {
        const child = this.$gsap.timeline()
        child.fromTo(menu[i], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, ease: 'expo.out' })
        gsap.add(child, '<0.2')
      }
    }
  }
}
</script>

<style lang="scss">
// animation
@keyframes light-fadeIn{
  0%{
    opacity: 0;
    color: $white;
  }
  100%{
    opacity: 1;
    color: $skyblue;
  }
}@keyframes light-fadeOut{
   0%{
     opacity: 1;
     color: $skyblue;
   }
   100%{
     opacity: 0;
     color: $white;
   }
 }
@keyframes dark-fadeIn{
  0%{
    opacity: 0;
    color: $darkgrey;
  }
  100%{
    opacity: 1;
    color: $slateblue;
  }
}@keyframes dark-fadeOut{
   0%{
     opacity: 1;
     color: $darkgrey;
   }
   100%{
     opacity: 0;
     color: $slateblue;
   }
 }

// btn flex wrapper
.menu{
  margin: 2%;
  display: flex;
  justify-content: left;
}

// btn hover effect base
.menu-btn{
  position: relative;
  margin: 2%;
  // filter: drop-shadow(0px 20px 5px rgba(50, 50, 50, 0.3));
}

.menu-i{
  cursor: pointer;
}

.menu-i-light{
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.1));
}
.menu-i-dark{
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.3));
}

// turn icon color when its on hover
.menu-btn .menu-icon .menu-i{
  transition: color .3s ease-out;
}
.menu-btn .menu-icon .menu-i-light:hover{
  color: $skyblue !important;
}
.menu-btn .menu-icon .menu-i-dark:hover{
  color: $slateblue !important;
}

// hide lbl when the page is loaded
.hiddenLbl{
  visibility: hidden;
}

.menu-lbl{
  margin-left: 70px;
  vertical-align: middle;
  font-size: $title-size;
  outline: none;
}
.menu-lbl-light{
  animation: light-fadeOut .5s ease-out forwards;
}
.menu-lbl-dark{
  animation: dark-fadeOut .5s ease-out forwards;
}

// Label fade in with light color on hover icon
.menu-icon:hover + .menu-lbl-light{
  animation: light-fadeIn .5s ease-out forwards;
}
.menu-icon:hover + .menu-lbl-dark{
  animation: dark-fadeIn .5s ease-out forwards;
}

// box effect on hover
.menu-lbl::after,
.menu-lbl::before {
  content: '';
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: 2px solid;
  transition: all .3s ease;
  border-radius: 2px;
  // opacity: 0;
}
.menu-lbl::after{
  bottom: 3px;
  right: -77px;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: $white;
  border-right-color: $white;
}

.menu-lbl::before{
  top: 2px;
  left: 73px;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: $white;
  border-left-color: $white;
}
.menu-icon:hover + .menu-lbl::after,
.menu-icon:hover + .menu-lbl::before{
  border-bottom-color: $skyblue;
  border-right-color: $skyblue;
  border-top-color: $skyblue;
  border-left-color: $skyblue;
  width: 100%;
  height: 100%;
  opacity: 1;
}

.menu-icon:hover + .menu-lbl-light::after,
.menu-icon:hover + .menu-lbl-light::before{
  border-bottom-color: $skyblue;
  border-right-color: $skyblue;
  border-top-color: $skyblue;
  border-left-color: $skyblue;
  width: 100%;
  height: 100%;
  opacity: 1;
}
.menu-icon:hover + .menu-lbl-dark::after,
.menu-icon:hover + .menu-lbl-dark::before{
  border-bottom-color: $slateblue;
  border-right-color: $slateblue;
  border-top-color: $slateblue;
  border-left-color: $slateblue;
  width: 100%;
  height: 100%;
  opacity: 1;
}

</style>
