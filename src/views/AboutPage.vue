<template>
  <div class="ap-main" v-bind:class="{'main-mobile':this.is_mobile}">
    <!-- First Column -->
    <div>
      <span id="header">
        <h1>Howdy<span id="dot">!</span></h1>
        <h2>I’m Daniel Raymond, thanks for checking out my portfolio!</h2>
      </span>
      <p style="font-size:0.8em; margin: 1">Special thanks to <a href="https://jaydenhsiao.me/">Jayden</a> for the design!</p>
      <h3>Philosophy</h3>
      <p>
        The overarching mentallity I've adopted has been to understand the root of 
        everything. This is the cause for my passion in all branches of my life.
      </p>
      <h3>Engineering</h3>
      <p>
        I am a Systems Design Engineering student at the <a>University of Waterloo!</a> 
        Although it is a very broad program, I would say I specialize in hardware 
        and software. I am proficient in Python, C, and System Verilog. My most recent
        position was at <a>Untether AI</a> as an <a>AI Acceleration Hardware Engineer</a>.
      </p>
      <h3>Acting </h3>
      <p>
        I recently organized and hosted a student-run threatre festival with plays, 
        a magician, musical acts, and improv. I have also wrote a play and <a>directed</a>, 
        acted, and ran audio for the entire show. I intend to audition for theatres 
        in Kitchener Waterloo once this whole pandemic blows over.
      </p>
      <h3>Frisbee</h3>
      <p>
        This past year I played Ultimate Frisbee on the <a>varsity</a> team for UW.
        <br><br>
      </p>
      <p>
        If you'd like to see my <a style="font-size: 1.2em">resume</a>, you can download it 
        <a @click="$emit('ga-event', 'Resume', 'Downloaded')" href="resume.pdf" type="application/pdf" download>here.</a>
      </p>
    </div>
    <!-- Second Column -->
    <div>
      <img src="../assets/venn.png" alt="Venn Diagram didn't load">
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutPage',
  props: {
    is_mobile: Boolean
  }
}
</script>

<style scoped>
.ap-main {
  padding: 5%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 1vw;
}
.main-mobile {
  grid-template-columns: 100% !important;
  grid-template-rows: repeat(auto-fit, 1fr);
}
img {
  width: 100%;
}
</style>
