<template>
	<div id="timeline">
		<h2>A Timeline</h2>
		<h3>A brief overview of what I've done</h3>
		<!-- div the line attaches to -->
		<div id="timeline-content">
			<!-- Selector buttons -->
			<button
				v-for="type in typeOptions"
				:key="type"
				@click="() => popPush(type)"
				:class="{'active': types.includes(type)}"
				>{{ type }}
			</button>
			<!-- Tiles -->
			<div v-for="(tiles, year) in shownInfo" :key="year" class="project">
				<h3 v-if="tiles.length" class="year">{{ year }}</h3>
				<div class="grid">
					<tile v-for="(tile, i) in tiles" :key="i" v-bind="tile"/>
				</div>
			</div>
		</div>
		<p>Click here to learn more about <a href="/DER.pdf">my projects</a>!</p>
	</div>
</template>

<script lang="ts">
import tile from "@/components/TimeLineTile.vue";
import json from "@/assets/timeline.json";
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
			info: {} as Timeline, // Replaced by jsonToMap
			shownInfo: {} as Timeline,
			typeOptions: [] as String[],
			types: [] as String[]
		}
	},
	methods: {
		popPush(tag: string) {
			if (this.types.includes(tag))
				this.types = this.types.filter((val) => val !== tag);
			else
				this.types.push(tag);
			this.updateTimeline();
		},
		updateTimeline() {
			// If there is no filter criteria keep it all, otherwise filter
			if (this.types.length) {
				// Copy the data to avoid deleting the original data
				const copy = JSON.parse(JSON.stringify(this.info)) as Timeline;
				const entries = Object.entries(copy);
				// Iterate through each tile and keeps the ones that match the filter criteria
				entries.forEach((data) => {
					const [year, list] = data;
					this.shownInfo[year] = list.filter(
						(tile) => this.types.includes(tile.type ? tile.type : "")
					);
				});
			} else {
				this.shownInfo = JSON.parse(JSON.stringify(this.info)) as Timeline;
			}
			console.table(this.shownInfo)
		}
	},
	beforeMount() {
		// Copy JSON into a Timeline interface
		const entries = Object.entries(json);
		// Iterate through entries, adding them to a new map
		for (var i in entries) {
			const key = entries[i][0];
			const value = entries[i][1];
			this.info[key] = value as Tile[];
		}
		// Gather types from data
		Object.values(this.info).forEach((list: Tile[]) => 
			list.forEach((tile: Tile) => {
				if (tile.type && !this.typeOptions.includes(tile.type as string))
					this.typeOptions.push(tile.type as string);
			})
		);
		this.updateTimeline();
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
	place-items: start; /* Remove to have tiles fill grid space */
	gap: 1rem 2rem;
}

button {
	background: #fffaf7;
	border: 1px solid #f5dec1;
	border-radius: 1rem;
	margin: .5rem;
	margin-left: 0;
}
button.active {
	background: #f5dec1;
}

@media screen and (max-width: 850px) {
	#timeline {
		margin: 0 1rem;
		padding: 1rem;
	}
	.grid {
		grid-template-columns: 1fr;
	}
}
</style>