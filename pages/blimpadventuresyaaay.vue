<template>
	<div>
		<nav-bar/>
		<div class="ba-main">
			<h1>Woah!</h1>
			<h2>Glad you could finally make it.</h2>
			<p>
				I'm surprised you actually went to blimpadventures.xyz with a cover letter like that.
				<br><br>
				<b>Lucky me.</b>
				<br>
				I've got some projects I think you might like. Take a tour around my website!
			</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'BlimpPage',
}
</script>

<style scoped>
.ba-main {
  padding: 5%;
}
h2 {
  font-size: 2em;
}
p {
  font-size: 1.4em;
}
</style>