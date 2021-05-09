<template>
	<div id="about">
		<div>
			<h2>About Me</h2>
			<h3>I like a lot of things :)</h3>
			<img src="@/assets/Venn.svg" alt="A venn diagram of my interests">
			<h4>Engineering</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna 
				aliqua. Ut enim ad minim veniam, quis nostrud 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna 
				aliqua. Ut enim ad minim veniam, quis nostrud
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna 
				aliqua. Ut enim ad minim veniam, quis nostrud
			</p>
			<br>
			<h4>Acting</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed piscing elit, sed do eiusmod tempor incididunt ut labore 
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			</p>
			<br>
			<h4>Philosophy</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna 
				aliqua. Ut enim ad minim veniam, quis nostrud 
			</p>
			<br>
			<h4>Frisbee</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna 
				aliqua. Ut enim ad minim veniam, quis nostrud
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'About',
})
</script>

<style lang="postcss" scoped>
#about {
	margin: 0 5rem;
	padding: 3rem;
}

img {
	width: 30vw;
	float: right;
	margin-top: 1rem;
}

@media screen and (max-width: 850px) {
	#about {
		margin: 0 1rem;
		padding: 1rem;
	}
	img {
		width: 100%;
	}
}
</style>