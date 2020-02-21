<template>
    <div>
        <br />
        <a href="#" v-on:click="toggle">😎 Toggle Solution</a>
        <VueSlideToggle :open="isShowing" tag="section" :duration="600">
            <slot></slot>
        </VueSlideToggle>
    </div>
</template>

<script>
import {VueSlideToggle} from 'vue-slide-toggle'


export default {
  data: function() {
      return {
          isShowing: false
      }
  },
  methods: {
      toggle: function(event) {
          this.isShowing = !this.isShowing;
          event.preventDefault();
      }
  },
  components: {
    VueSlideToggle
  }
}
</script>