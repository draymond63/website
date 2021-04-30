<template>
	<div id="timeline">
		<h2>A Timeline</h2>
		<h3>A brief overview of what I've done</h3>
		<div>
			<button v-for="tag in tagOptions" :key="tag" @click="() => popPush(tag)">{{ tag }}</button>
		</div>

		<div v-for="(tiles, year) in info" :key="year" class="project">
			<h3 class="year">{{ year }}</h3>
			<div class="grid">
				<tile v-for="(tile, i) in tiles" :key="i" v-bind="tile"/>
			</div>
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
			info: data,
			tagOptions: ['Project', 'Work'],
			tags: [] as Array<String>
		}
	},
	methods: {
		popPush(tag: string) {
			if (this.tags.includes(tag))
				this.tags.pop(); // ! WRONG
			else
				this.tags.push(tag);
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

.project {
	display: grid;
	place-items: center;
}

.year {
	text-align: center;
	width: max-content;
	
	padding: 0.5rem;
	margin-bottom: 0.2rem;

	background: white;
	border: 4px solid var(--main-color-1);
	border-radius: 0.3rem;
}


.grid {
	width: 100%;
	margin-bottom: 2rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	gap: 1rem 2rem;
}

.dot {
	width: var(--dot-size);
	height: var(--dot-size);
	border-radius: 50%;
	background: #f9f5f2;
	border: .3rem solid var(--main-color-1);
}

button {
	background: #fffaf7;
	border: 1px solid #f5dec1;
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