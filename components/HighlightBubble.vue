<template>
	<div class="container" @click="$router.push(link)">
		<div class="bubble">
			<img :src="getImage(image)" :alt="title">
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Bubble',
	props: {
		title: String,
		link: String,
		image: String,
		category: String,
		blurb: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: ''
		},
		tags: {
			type: Array as () => String[],
			default: () => []
		},
	},
	methods: {
		getImage(image: string) {
			try {
				return require("@/assets/" + image);
			} catch (e) {
				// throw Error(`pic does not exist: ${image}`);
			}
		}
	}
})
</script>

<style lang="postcss" scoped>
.container {
	--container-size: 6rem;
	--bubble-size: calc(var(--container-size) / 1.5);
	position: relative;
	width: calc(var(--container-size));
	height: calc(var(--container-size));
}

.bubble {
	position: absolute;
	width: var(--bubble-size);
	height: var(--bubble-size);
	overflow: hidden;

	background: white;
	border-radius: 50rem;
	border: 5px solid var(--main-color);

	--anim-max: calc(100% - var(--bubble-size));
	animation:
			upDown 4.9s ease-in-out infinite alternate,
			leftRight 5s ease-in-out infinite alternate;
}

.bubble > img {
	min-width: 110%;
	min-height: 110%;
}

.container:hover {
	--bubble-size: 100%;
	cursor: pointer;
}
.container:hover > .bubble {
	border-radius: 1rem;
	animation-play-state: paused;
}

@keyframes upDown {
	0% {
		top: 0;
	}
	100% {
		top: var(--anim-max);
	}
}

@keyframes leftRight {
	0% {
		left: 0;
	}
	100% {
		left: var(--anim-max);
	}
}
</style>