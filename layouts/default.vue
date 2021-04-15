<template>
	<div>
		<nav-bar/>
		<Nuxt />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
	components: {
		NavBar
	}
}
</script>

<style>
html {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	scroll-behavior: smooth;
}

body {
	margin: 0;
	background: white;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

button {
	border: 0;
}
</style>
