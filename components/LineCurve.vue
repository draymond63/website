<template>
	<div>
		<svg ref="line">
			<!-- <path d="M115 0V23.5C115 51 137 74 165 73.5H604.5C632 74 655 96 655 123.5V418C654 446 632 468 605 468H54C26 468 4 490 4 518V548"/> -->
			<path :d="path"/>
			<!-- "
				M 200 0 
				l 0 500
				a 50,50 0 0,0 50,50
				l 500 0
				a 50,50 0 0,1 50,50
				" -->
		</svg>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: "LineCurve",
	data() {
		return {
			radius: 50,
			path: "M 200 0\n"
		}
	},
	methods: {
		setBoundaries() {
			// Size svg to fit content
			const svg = this.$refs.line as SVGSVGElement;
			if (svg.parentElement) {
				const width = svg.parentElement.offsetWidth;
				const height = svg.parentElement.offsetHeight + 1000;
				// Set svg attributes
				const vb = [0, 0, width,height];
				svg.setAttribute("viewBox", vb.join(" ") );
				svg.setAttribute("width", width.toString() );
				svg.setAttribute("height", height.toString() );
			}
		},
		// * Line Functions
		addSegment(segment: String) {
			this.path += segment + '\n';
		},
		line(length: number, {vert = true}) {
			if (vert)
				this.addSegment(`l 0 ${length}`);
			else
				this.addSegment(`l ${length} 0`);
		},
		arc({top = true, right = true}) {
			const r = this.radius;
			this.addSegment(`a ${r},${r} 0 0,${right?1:0} ${top === right?'':'-'}${r}, ${r}`);
			// if (top && right) {
			// 	this.addSegment(`a ${r},${r} 0 0,1 ${r},${r}`);
			// } else if (!top && right) {
			// 	this.addSegment(`a ${r},${r} 0 0,1 -${r},${r}`);
			// } else if (top && !right) {
			// 	this.addSegment(`a ${r},${r} 0 0,0 -${r},${r}`);
			// } else if (!top && !right) {
			// 	this.addSegment(`a ${r},${r} 0 0,0 ${r},${r}`);
			// }
		},

		// * Line Creation
		heroSection() {
			this.line(500, {vert: true});
			this.arc({top: false, right: false});
			this.line(500, {vert: false});
			this.arc({top: true, right: true});
			this.line(100, {vert: true});
			this.arc({top: false, right: true});
			this.line(-500, {vert: false});
			this.arc({top: true, right: false});
		},
		initLine() {
			this.heroSection();
		}
	},

	mounted() {
		this.setBoundaries();
		// Resize bounding box
		// ! Necessary only if dimensions are dependent on width of svg, not on imported content widths
		window.addEventListener('resize', () => this.setBoundaries());
		// Draw line
		this.initLine();
	}
})
</script>

<style lang="postcss" scoped>
path {
	stroke: var(--main-color-1);
	stroke-width: 8px;
	fill: none;
}
</style>