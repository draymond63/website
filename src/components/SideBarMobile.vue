<template>
  <div class="sbm-main">
    <span />

    <router-link 
      @click.native="$emit('link-pressed')" 
      to="/projects">Projects
    </router-link>
    
    <router-link 
      @click.native="$emit('link-pressed')" 
      to="/chump">4-Bit Computer
    </router-link>
    
    <router-link 
      @click.native="$emit('link-pressed')" 
      to="/bnn">AI Processor
    </router-link>

    <router-link 
      @click.native="$emit('link-pressed')" 
      to="/bnn">Career Mapping
    </router-link>
    
    <router-link 
      @click.native="$emit('link-pressed')" 
      to="/about">About
    </router-link> 

  </div>
</template>

<script>
export default {
  name: 'SideBarMobile',
}
</script>

<style scoped>
.sbm-main {
  position: fixed;
  z-index: 2;
  bottom: 0%;

  display: grid;
  height: 92vh;
  width: 100%;
  
  grid-template-rows: 30%;
  grid-auto-rows: min(10vh, 20%); /* The rest of the rows are 10% */

  text-align: right;
  background: #1A1A1A;
}

a {
  font-size: min(10vw, 60px);
  font-family: 'Bebas Neue', cursive;
  text-decoration: none;
  color: #B5B5B5;
  padding-right: 5% !important;
}
a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #F19E44;
  color: #FFFFFF;
}
</style>
