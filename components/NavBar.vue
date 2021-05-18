<template>
	<div id="navbar">
		<button v-if="isMobile" @click="mobileMenu = true">
			<p>&#9776;</p>
			<nav v-if="mobileMenu" class="mobile">
				<a @click="mobileMenu = false" href="#aboutme">About Me</a>
				<a @click="mobileMenu = false" href="#experience">Experience</a>
				<a target="_blank" href="/resume.pdf">Resume</a>
			</nav>
		</button>

		<nav v-else class="desktop">
			<div class="links">
				<NuxtLink to="/">Daniel Raymond</NuxtLink>
				<a id="about-link" href="#about">About Me</a>
				<a id="experience-link" href="#experience">Experience</a>
				<a target="_blank" href="/resume.pdf">Resume</a>
			</div>
		</nav>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'NavBar',
	data() {
		return{
			isMobile: false,
			mobileMenu: false
		}
	},
	methods: {
		handleResize() {
			this.isMobile = window.innerWidth < 850;
		}
	},
	beforeMount() {
		this.handleResize();
		window.addEventListener('resize', () => this.handleResize());
	}
})
</script>

<style lang="postcss" scoped>
#navbar {
	width: 100%;
}

.desktop {
	/* I DONT LIKE THIS */
	z-index: 1;
	position: fixed;
	width: 100vw;
	background: var(--main-color);
}
.desktop>.links {
	display: flex;
	justify-content: space-around;
	max-width: var(--max-content-width);
	margin: auto;
}

a {
	color: var(--background-color);
	padding: 1rem;
	text-decoration: none;
	font-size: 1.5em;
	font-weight: 500;
}

.mobile {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: var(--background-color);

	display: flex;
	flex-direction: column;
}
.mobile>a {
	color: var(--text-color);
}
.mobile>a:not(:last-child) {
	border-bottom: 1px solid var(--main-color);
}

button {
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	z-index: 1;

	background: var(--main-color);
	border-radius: .7rem;
	padding: .4rem;

	font-size: 2em;
	color: var(--background-color);
	font-weight: bold;
}
button>p {
	line-height: 1em;
}
</style>