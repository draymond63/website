<template>
	<div id="navbar">
		<button v-if="isMobile" @click="mobileMenu = true">
			<p>&#9776;</p>
			<nav v-if="mobileMenu" class="mobile">
				<a @click="mobileMenu = false" href="#aboutme">About Me</a>
				<a @click="mobileMenu = false" href="#projects">Projects</a>
				<a @click="mobileMenu = false" href="#resume">Resume</a>
			</nav>
		</button>

		<nav v-else class="desktop">
			<NuxtLink to="/">Daniel Raymond</NuxtLink>
			<a href="#aboutme">About Me</a>
			<a href="#projects">Projects</a>
			<a href="#resume">Resume</a>
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
			this.isMobile = screen.width < 550;
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
	display: flex;
	background: var(--main-color-1);
}

a {
	color: var(--background-color-1);
	padding: 1rem;
	text-decoration: none;
	font-weight: 500;
}

.mobile {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: var(--background-color-1);

	display: flex;
	flex-direction: column;
}
.mobile>a {
	color: var(--text-color);
}
.mobile>a:not(:last-child) {
	border-bottom: 1px solid var(--main-color-1);
}

button {
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;

	background: var(--main-color-1);
	border-radius: .7rem;
	padding: .4rem;

	font-size: 2em;
	color: var(--background-color-1);
	font-weight: bold;
}
button>p {
	line-height: 1em;
}
</style>