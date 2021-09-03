<template>
	<Nuxt/>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	head: {
		title: 'Daniel 💖',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: "description", content: "Daniel Raymond is a programmer/philosopher and current engineering undergraduate student at the University of Waterloo" },
			{ name: "keywords", content: "Daniel Raymond, University of Waterloo, Engineering, AI, Circuitry" },
			{ name: "theme-color", content: "#1A1A1A" },

			{ name: "og:type", content: "website" },
			{ name: "og:url", content: "https://danielraymond.me" },
			{ name: "og:title", content: "Daniel 💖" },
			{ name: "og:image", content: "https://danielraymond.me/chumpRender.png" },
			{ name: "og:description", content: "Daniel Raymond is a programmer/philosopher and current engineering undergraduate student at the University of Waterloo" },
		],
	}
})
</script>