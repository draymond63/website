<template>
  <div class="main">
    <router-link to="/" style="text-decoration: none; align-self: end">
      <h1 style="margin-right: -4px;">
        Daniel Raymond<router-link id="dot" to="/blimpadventuresyaaay" style="text-decoration: none">.</router-link>
      </h1>
    </router-link>

    <router-link 
      @mouseover.native="load(['chump.959b7a93.jpg', 'vibe.0393c222.jpg'])"
      to="/projects">
      Overview
    </router-link>
    <router-link 
      @mouseover.native="load(['chumpRender.b291b093.svg'])"
      to="/chump">
      4-Bit Computer
    </router-link>
    <router-link 
      @mouseover.native="load(['Andro.fcb3acf3.svg'])"
      to="/bnn">
      BNN Processor
    </router-link>
    <router-link 
      @mouseover.native="load(['venn.3e1ff0aa.png'])"
      to="/about">
      About
    </router-link> 
    
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    // Preload on hover
    load(img_list) {
      for (let i in img_list) {
        var img = new Image();
        img.src=`/img/${img_list[i]}`;

        img.onload = function() {console.log("yup")};
        img.onerror = function() {console.log("nope")};
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: min(5vw, 100px);
  line-height: 1em;
  color: #FFFFFF;
}

a {
  font-size: min(3vw, 40px);
  font-family: 'Bebas Neue', cursive;
  text-decoration: none;
  color: #B5B5B5;
}
a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #F19E44;
  color: #FFFFFF;
}

.main {
  position: fixed;
  display: grid;
  height: 100vh;
  width: 18%;
  z-index: 1;
  padding-left: 2%;

  grid-template-rows: 40%;
  grid-auto-rows: min(8vw, 10%); /* The rest of the rows are 10% */

  font-size: 1rem;
  text-align: left;

  background: #1A1A1A;
  border-right: 2px solid white;
   /* XXX BORDER  */
}
</style>
