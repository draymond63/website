<template>
	<div id="timeline">
		<h2>A Timeline</h2>
		<h3>A brief overview of what I've done</h3>
		<div>
			<button v-for="type in typeOptions" :key="type" @click="() => popPush(type)">{{ type }}</button>
		</div>

		<!-- Iterating through maps is weird -->
		<div v-for="(data, x) of info" :key="x" class="project">
			<h3 class="year">{{ data[0] }}</h3>
			<div class="grid">
				<tile v-for="(tile, i) in data[1]" :key="i" v-bind="tile"/>
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import tile from "@/components/TimeLineTile.vue";
import data from "@/assets/timeline.json";
type Tile = {
	title?: String,
	blurb?: String,
	link?: String,
	type?: String,
	tags?: Array<String>
};

import Vue from 'vue'
export default Vue.extend({
	name: 'Projects',
	components: {
		tile
	},
	data() {
		return {
			info: {} as Map<string, Array<Tile>>,
			typeOptions: [] as Array<String>,
			types: [] as Array<String>
		}
	},
	methods: {
		popPush(tag: string) {
			if (this.types.includes(tag))
				this.types.pop(); // ! WRONG
			else
				this.types.push(tag);
		},
		jsonToMap(obj: Object) {
			var map = new Map<string, Array<Tile>>();
			const entries = Object.entries(obj);
			// Iterate through entries, adding them to a new map
			for (var i in entries) {
				const key = entries[i][0];
				const value = entries[i][1];
				map.set(key, value as Array<Tile>);
			}
			this.info = map; // info must be replaced to work
		}
	},
	beforeMount() {
		this.jsonToMap(data);
		// Gather types from data
		this.info.forEach((list: Array<Tile>, year: string) => 
			list.forEach((tile: Tile) => {
				if (tile.type && !this.typeOptions.includes(tile.type as string))
					this.typeOptions.push(tile.type as string);
			}
		));
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