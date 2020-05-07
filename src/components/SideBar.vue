<template>
  <div class="main">
    <router-link to="/" style="text-decoration: none; align-self: end">
      <h1>
        Daniel Raymond<span id="dot">.</span>
      </h1>
    </router-link>
    <router-link to="/projects">Overview</router-link>
    <router-link to="/chump">4-Bit Computer</router-link>
    <router-link to="/bnn">BNN Processor</router-link>
    <router-link to="/about">About</router-link> 
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
h1 {
  font-size: min(8vw, 100px);
  line-height: 1em;
  color: #FFFFFF;
}

a {
  font-size: min(5vw, 60px);
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
  width: 27%;
  padding-left: 3%;

  grid-template-rows: 50%;
  grid-auto-rows: min(8vw, 10%); /* The rest of the rows are 10% */

  font-size: 1rem;
  text-align: left;

  background: #1A1A1A;
  border-right: 2px solid white;
   /* XXX BORDER  */
}
</style>
