<template>
	<div>
		<svg ref="line">
			<circle cx="50" cy="50" r="40" stroke="green" stroke-width="8" fill="yellow" />
		</svg>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: "LineCurve",
	data() {
		return {
			points: {
				
			}
		}
	},
	methods: {
		setBoundaries() {
			// Size svg to fit content
			const svg = this.$refs.line as SVGSVGElement;
			if (svg.parentElement) {
				const width = svg.parentElement.offsetWidth;
				const height = svg.parentElement.offsetHeight;
				// Set svg attributes
				const vb = [0, 0, width,height];
				svg.setAttribute("viewBox", vb.join(" ") );
				svg.setAttribute("width", width.toString() );
				svg.setAttribute("height", height.toString() );
			}
		}
	},
	mounted() {
		this.setBoundaries();
		// Resize bounding box
		// ! Necessary only if dimensions are dependent on width of svg, not on imported content widths
		window.addEventListener('resize', () => this.setBoundaries());
	}
})
</script>