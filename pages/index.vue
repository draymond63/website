<template>
	<div>
		<nav-bar/>
		<div class="parent">
			<LineCurve class="line"/>
			<!-- CONTENT -->
			<div class="content">
				<hero/>
				<div class="spacer"/>
				<about/>
				<div style="margin: 2rem 0"/>
				<timeline/>
				<Footer/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Timeline from '@/components/Timeline.vue';
import Footer from '@/components/Footer.vue';
import LineCurve from '@/components/LineCurve.vue';

import Vue from 'vue'
export default Vue.extend({
	components: {
		Hero,
		About,
		Timeline,
		Footer,
		LineCurve
	},
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

<style lang="postcss" scoped>
.parent {
	position: relative;
}

.line {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	overflow: hidden;
}

.content {
	display: flex;
	flex-direction: column;	
	max-width: var(--max-content-width);
	margin: auto;
}

.spacer {
	margin: 5rem 0;
}
</style>
