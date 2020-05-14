<template>
  <div id="app" v-bind:class="{'app-mobile':this.is_mobile}">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    
    <transition name="side-bar-fade">
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

    <transition name="page-fade">
    <router-view 
      :is_mobile="this.is_mobile"
      v-on:ga-event="sendGa"
      class="page"
    />
    </transition>
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
    closeMenu() {this.mobile_menu_pressed = false},
    sendGa(category, action, label) {
      this.$ga.event({
        eventCategory: category,
        eventAction: action,
        eventLabel: label
      })
    }
  },
  // Determining is-mobile
  created() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style>
html {
  /* overflow-y:scroll; */
  background: #101010;
}
body { 
  margin: 0;
  height: 100vh;
}
/* Hide Scroll Bar */
::-webkit-scrollbar {
  width: 0;
  /* background: #1A1A1A; */
}
/* ::-webkit-scrollbar-thumb {
  background: #F19E44;
} */

/* Transitions */
.page-fade-leave-active {transition: opacity .1s;}
.page-fade-enter-active {transition: opacity 1s;}
.page-fade-enter, .page-fade-leave-to {opacity: 0;}

.side-bar-fade-leave-active {transition: opacity .7s;}
.side-bar-fade-enter-active {transition: opacity .2s;}
.side-bar-fade-enter, .side-bar-fade-leave-to {opacity: 0;}

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
  grid-template-columns: 20% auto;
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
#def-main {
  padding: 5%;
}
#header {
  display: flex;
  align-items: center;
  justify-content: space-around;
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
p {
  margin-top: 0;
}
</style>
