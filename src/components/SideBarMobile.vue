<template>
  <div id="main">
    <span />

    <router-link 
      @click.native="$emit('link-pressed')" 
      to="/projects">Overview
    </router-link>
    
    <router-link 
      @click.native="$emit('link-pressed')" 
      to="/chump">4-Bit Computer
    </router-link>
    
    <router-link 
      @click.native="$emit('link-pressed')" 
      to="/bnn">BNN Processor
    </router-link>
    
    <router-link 
      @click.native="$emit('link-pressed')" 
      to="/about">About
    </router-link> 

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {}
}
</script>

<style scoped>
#main {
  position: fixed;
  z-index: 1;
  bottom: 0%;

  display: grid;
  height: 92vh;
  width: 100%;
  
  grid-template-rows: 40%;
  grid-auto-rows: min(10vh, 20%); /* The rest of the rows are 10% */

  text-align: right;
  background: #1A1A1A;
}

a {
  padding-right: 5%;
  font-size: min(10vw, 60px);
  font-family: 'Bebas Neue', cursive;
  text-decoration: none;
  color: #B5B5B5;
}
a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #F19E44;
  color: #FFFFFF;
}
</style>
