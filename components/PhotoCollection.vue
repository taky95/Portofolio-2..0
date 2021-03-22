<template>
  <div class="photoCollection">
    <silent-box :gallery="images" />
  </div>
</template>

<script>
import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'
Vue.use(VueSilentbox)

export default {
  components: {
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.photoCollection{
  max-height: 920px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.silentbox-item{
 margin: 2%;
}

.silentbox-item img{
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.1));
  width: 300px;
  height: 300px;
  object-fit: cover;
}

#silentbox-overlay__close-button{
  right: 18px !important;
}

</style>
