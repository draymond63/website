<template>
  <div id="app" v-bind:class="{'app-mobile':this.is_mobile}">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    
    <transition name="fade">
    <SideBarMobile 
      v-on:link-pressed="closeMenu" 
      v-show="this.mobile_menu_pressed && this.is_mobile"
    />
    </transition>
    <TopBar 
      v-on:menu-pressed="toggleMenu" 
      v-on:link-pressed="closeMenu" 
      v-if="this.is_mobile"
    />
    <SideBar v-else/>

    <span v-if="!this.is_mobile"/>

    <router-view 
      :is_mobile="this.is_mobile"
      class="page"
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
  methods: {
    onResize() {
      if (window.innerWidth > 960) {
        this.is_mobile = false
      } else {
        this.is_mobile = true
      }
    },
    toggleMenu() {this.mobile_menu_pressed = !this.mobile_menu_pressed},
    closeMenu() {this.mobile_menu_pressed = false}
  },
  // Determining is-mobile
  created() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style>
html {
  overflow-y:scroll;
  background: #101010;
}
body { 
  margin: 0;
  height: 100vh;
}
/* Scroll Bar */
::-webkit-scrollbar {
  background: #1A1A1A;
}
::-webkit-scrollbar-thumb {
  background: #F19E44;
}

/* Formatting */
.page {
  background: #101010; /* Default color */
  background-image: url('./assets/background.gif');
  /* background-position: center; */
  /* background-size: cover; */
}
#app {
  display: grid;
  height: 100%;
  grid-template-columns: 30% auto;
  grid-template-rows: unset;

  font-family: Avenir, sans-serif;
  font-weight: 500;
  font-size: 0.9em;
  color: #FFFFFF;
}
.app-mobile {
  grid-template-columns: unset !important;
  grid-template-rows: 10% 90% !important;
}

/* DEFAULTS */
#main {
  padding: 5%;
}
#dot {
  color: #F19E44;
}
a {
  color: rgb(241, 178, 111);
}
h1 {
  font-family: 'Bebas Neue', cursive;
  font-weight: 100;
  font-size: 4em;
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
