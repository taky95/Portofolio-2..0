<template>
  <v-switch v-model="switch1" color="accent" :label="`Draggable Menu`" @change="draggableMenu" />
</template>

<script>
export default {
  data () {
    return {
      switch1: false
    }
  },
  methods: {
    draggableMenu () {
      if (this.switch1) {
        this.$Draggable.create('.menu-btn', {
          type: 'x, y'
        })
      } else {
        this.$Draggable.create('.menu-btn', {
          dragClickables: false
        })
      }
    }
  }
}
</script>

<style>

</style>
