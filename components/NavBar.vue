<template>
	<div id="navbar">
		<nav class="desktop">
			<div class="links">
				<NuxtLink to="/">Daniel Raymond</NuxtLink>
				<a id="about-link" href="/#about">About Me</a>
				<a id="experience-link" href="/#experience">Experience</a>
				<a target="_blank" href="/resume.pdf">Resume</a>
			</div>
		</nav>

		<span class="mobile">
			<button @click="mobileMenu = true">&#9776;</button>
			<transition name="fade">
				<nav v-if="mobileMenu" class="mobile-menu">
					<p @click="mobileMenu = false" class="close-button">&#x2715;</p>
					<a @click="mobileMenu = false" href="/#about">About Me</a>
					<a @click="mobileMenu = false" href="/#experience">Experience</a>
					<a target="_blank" href="/resume.pdf">Resume</a>
				</nav>
			</transition>
		</span>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'NavBar',
	data() {
		return {
			mobileMenu: false
		}
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
	font-size: 1.2em;
	font-weight: 500;
}

.mobile-menu {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	padding: 20vh 2rem 0 2rem;
	z-index: 2;
	background: var(--background-color);

	text-align: center;
	font-size: 2em;

	display: flex;
	flex-direction: column;
}
.mobile-menu>.close-button {
	text-align: right;
	font-size: 1.5em;
	color: var(--text-color);
}
.mobile-menu>a {
	color: var(--text-color);
}
.mobile-menu>a:not(:last-child) {
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
button {
	line-height: 1em;
}

.mobile {
	display: none;
}
@media screen and (max-width: 850px) {
	.desktop {
		display: none;
	}
	.mobile {
		display: block;
	}
}
</style>