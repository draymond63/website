<template>
  <div class="main">
    <h1>Howdy<span id="dot">!</span> 🤠</h1>
    <h2>I’m Daniel Raymond, thanks for checking out my portfolio!</h2>
    <span>
      <img src="../assets/venn.png" alt="It didn't load &#128531;">
    </span>
    <h3>Philosophy</h3>
    <p>The overarching mentallity I've adopted has been to understand the root of everything. This is the cause for my passion in all branches of my life.</p>
    <h3>Engineering</h3>
    <p>I am a Systems Design Engineering student at the University of Waterloo! Although it is a very broad program, I would say I specialize in hardware and software. I am proficient in Python, C, and System Verilog</p>
    <h3>Acting </h3>
    <p>I recently organized and hosted a student-run threatre festival with plays, a magician, musical acts, and improv. I have also wrote a play and directed, acted, and ran audio for an entire show. I intend to audition for theatres in Kitchener Waterloo.</p>
    <h3>Frisbee</h3>
    <p>This past year I played Ultimate Frisbee on the varsity team for UW.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
h1 {
  font-size: 2.5em;
}
h2 {
  font-size: 1.3em;
}
img {
  width: max-content;
}

.main {
  padding: 5%;
  grid-template-columns: 50% 50%;
  /* grid-template-rows: repeat(auto-fit, 1fr); */
}
</style>