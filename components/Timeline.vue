<template>
	<div id="timeline">
		<h2>A Timeline</h2>
		<h3>A brief overview of what I've done</h3>
		<div>
			<button v-for="type in typeOptions" :key="type" @click="() => popPush(type)">{{ type }}</button>
		</div>

		<div v-for="(tiles, year) in info" :key="year" class="project">
			<h3 class="year">{{ year }}</h3>
			<div class="grid">
				<tile v-for="(tile, i) in tiles" :key="i" v-bind="tile"/>
			</div>
		</div>

		<p>Click here to learn more about <a href="/DER.pdf">my projects</a></p>
	</div>
</template>

<script lang="ts">
import tile from "@/components/TimeLineTile.vue";
import data from "@/assets/timeline.json";
interface Tile {
	title?: String,
	blurb?: String,
	link?: String,
	type?: String,
	tags?: String[]
};
interface Timeline {
	[key: string]: Tile[],
};

import Vue from 'vue'
export default Vue.extend({
	name: 'Projects',
	components: {
		tile
	},
	data() {
		return {
			info: {} as Timeline,
			typeOptions: [] as String[],
			types: [] as String[]
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
			const entries = Object.entries(obj);
			// Iterate through entries, adding them to a new map
			for (var i in entries) {
				const key = entries[i][0];
				const value = entries[i][1];
				this.info[key] = value as Tile[];
			}
		}
	},
	beforeMount() {
		this.jsonToMap(data);
		// Gather types from data
		Object.values(this.info).forEach((list: Tile[]) => 
			list.forEach((tile: Tile) => {
				if (tile.type && !this.typeOptions.includes(tile.type as string))
					this.typeOptions.push(tile.type as string);
			})
		);
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