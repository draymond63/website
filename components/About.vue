<template>
	<div id="about">
		<h2>About Me</h2>
		<h3>I like a lot of things :)</h3>
		<img src="@/assets/Venn.svg" alt="A venn diagram of my interests">
		<h4>Engineering</h4>
		<p>
			I am an engineering student at the University of Waterloo, and I've interned
			at many companies, including SpaceX, AMD, Untether AI, and Applied Brain Research.
			In the future I hope to work in either the Aerospace industry (like SpaceX)
			or in the humanitary tech sector (like Zipline or Demine Robotics).
		</p>
		<h4>Acting</h4>
		<p>
			I love theatre! Those who know me in person would likely consider me
			a pretty loud and extroverted person (and they'd be right ¯\_ (ツ)_/¯).	
			In 2019 I organized and hosted a student-run threatre festival with plays, 
			a magician, musical acts, and improv. In it I wrote, directed, acted, and
			ran audio!
		</p>
		<h4>Philosophy</h4>
		<p>
			My brothers are (admittedly) a very large influence. As a result, I have
			begun to appreciate Philosophy, particularily because it helps me realize
			why I have the assumptions I do. I have currently taken three Philosophy
			courses and hope to finish my degree with a Philosophy minor.
		</p>
		<h4>Sports</h4>
		<p>
			Frisbee is my sport of choice - I play on the varsity team for UW and
			also casually with friends. Recently, I've been enjoying volleyball
			and spikeball as well. Reach out if you ever want to play :)
		</p>
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
/* First h4 shouldn't have the top margin */
h4:not(:first-of-type) {
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