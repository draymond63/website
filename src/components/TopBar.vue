<template>
  <div class="main">
    <router-link to="/" style="text-decoration: none">
      <h1>
        Daniel Raymond<span id="dot">.</span>
      </h1>
    </router-link>
    <img @click="$emit('menu-pressed')" src="../assets/mobile-menu.png" alt="Menu">

  </div>
</template>

<script>
export default {
  name: 'TopBar',
}
</script>

<style scoped>
h1 {
  color: #FFFFFF;
  font-size: 3em;
  margin-top: 0;
}
img {
  margin-top: 2%;
  height: 65%;
}

.main {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 8vh;

  background: #1A1A1A;
  border-bottom: 2px solid white;

  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
</style>
