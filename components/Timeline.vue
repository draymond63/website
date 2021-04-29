<template>
	<div id="timeline">
		<h2>A Timeline</h2>
		<h3>A brief overview of what I've done</h3>
		<div>
			<button>Projects</button>
			<button>Experience</button>
		</div>

		<div class="grid">
			<tile/>
			<div class="dot"></div>
			<tile/>
			<tile/>
			<div class="dot"></div>
		</div>
	</div>
</template>

<script lang="ts">
import data from "@/assets/timeline.json";
import tile from "@/components/TimeLineTile.vue";

import Vue from 'vue'
export default Vue.extend({
	name: 'Projects',
	components: {
		tile
	},
	data() {
		return {
			info: data
		}
	}
})
</script>

<style lang="postcss" scoped>
#timeline {
	margin: 0 5rem;
	padding: 3rem;
	--dot-size: 2rem;
}

.grid {
	display: grid;
	grid-template-columns: 1fr var(--dot-size) 1fr;
	place-items: center;
	gap: 1rem 2rem;
}

.dot {
	width: var(--dot-size);
	height: var(--dot-size);
	border-radius: 50%;
	background: #f9f5f2;
	border: .3rem solid #fb7f53
}

button {
	background: #ECAD5F33;
	border: 1px solid #ECAD5F;
	border-radius: 1rem;
	margin: .5rem;
	margin-left: 0;
}

@media screen and (max-width: 850px) {
	#projects {
		margin: 0 1rem;
		padding: 1rem;
	}
}
</style>