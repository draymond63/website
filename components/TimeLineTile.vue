<template>
	<nuxt-link class="tile" to="link">
		<h3>{{ title }}</h3>
		<p>{{ blurb }}</p>
	</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Tile',
	props: {
		'title': {
			type: String,
			default: ''
		},
		'blurb': {
			type: String,
			default: ''
		},
		'link': {
			type: String,
			default: ''
		},
		'type': {
			type: String,
			default: ''
		},
		'tags': {
			type: Array as () => Array<String>,
			default: ''
		},
	}
})
</script>

<style lang="postcss" scoped>
.tile {
	width: 100%;
	height: 10rem;
	padding: 1rem;
	background: #fffaf7;
	box-shadow: 0px 4px 8px 0px #c9aba075;
	transition: all .3s ease;
}
.tile:hover {
	box-shadow: 0px 4px 8px 0px #e4a996de;
}

a, p {
	color: var(--text-color);
	text-decoration: none;
}
p {
	font-size: 1rem;
}
</style>