<template>
  <span id="main">
    <h1>Jeopardy<span id="dot">!</span></h1>
    <h2>
      Alright mom, lets see how well you really know us.
    </h2>
    <p>1. Got to <a href="https://BuzzIn.live" target="_blank">BuzzIn.live</a></p>
    <p>2. Enter Code <input type="text"> and write your name</p>
    <h2><a>The Rules<span style="color:white">.</span></a></h2>
    <p><a>a.</a> There is board of questions separated into five categories and ranked by value</p>
    <p><a>b.</a> The current winner will choose a tile</p>
    <p><a>c.</a> An answer will be shown — there will be a 3 second timer before any buzzers can be pressed</p>
    <p><a>d.</a> The person who buzzed first can guess the question that matches the answer</p>
    <p><a>e.</a> If right, they get the points. If not, they lose it</p>
  </span>
</template>

<script scoped>
export default {
  name: 'MomPage',
}
</script>

<style scoped>
h1 {font-size: 4em;}
h2 {font-size: 2.5em;}
p {font-size: 2em;}

input {
    color: rgb(241, 178, 111);
    background: #101010;
    border: 1px solid #B5B5B5;
    font-size: 1em;
    width: 10vw;
    text-align: center;
}
</style>