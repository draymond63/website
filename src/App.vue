<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    
    <SideBarMobile 
      v-on:link-pressed="toggleMenu" 
      v-if="this.mobile_menu_pressed && this.is_mobile"
    />
    <TopBar 
      v-on:menu-pressed="toggleMenu" 
      v-if="this.is_mobile"
    />
    <SideBar v-else/>

    <router-view 
      :is_mobile="this.is_mobile"
      class="page"
      v-bind:class="{'page-mobile':this.is_mobile}"
    />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import SideBarMobile from '@/components/SideBarMobile.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  name: "app",
  components: {
    SideBar,
    TopBar,
    SideBarMobile
  },
  mounted: function() {
    this.onResize()
  },
  data() {
    return {
      is_mobile: false,
      mobile_menu_pressed: false
    }
  },
  // Determining is-mobile
  methods: {
    onResize() {
      if (window.innerWidth > 960) {
        this.is_mobile = false
      } else {
        this.is_mobile = true
      }
    },
    toggleMenu() {
      this.mobile_menu_pressed = !this.mobile_menu_pressed
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style>
/* Scroll Bar */
html {
  overflow-y:scroll;
  background: #101010;
}
::-webkit-scrollbar {
  outline: 1px solid #654321;
  background: #1A1A1A;
}
::-webkit-scrollbar-thumb {
  background: #F19E44;
}

/* Formatting */
.page {
  background: #101010; /* Default color */
  background-image: url('./assets/background.gif');
  background-position: center;
  background-size: cover;
  grid-column: 2;
}
.page-mobile {
  grid-column: span 2;
}
#app {
  display: grid;
  height: 100%;
  grid-template-columns: 30% auto;

  font-family: Avenir, sans-serif;
  font-weight: 500;
  font-size: 0.9em;
  color: #FFFFFF;
}

#dot {
  color: #F19E44;
}
/* DEFAULTS */
body { 
  margin: 0;
  height: 100vh;
}
h1 {
  font-family: 'Bebas Neue', cursive;
  font-weight: 100;
}
h2 {
  font-family: Avenir, sans-serif;
  font-weight: 200;
}
h3 {
  color: #FFD9AB;
  margin: 0;
}
</style>
