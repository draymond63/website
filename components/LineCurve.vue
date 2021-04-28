<template>
	<div>
		<svg ref="line">
			<path ref="path" :d="path"/>
			<!-- "M 200 0 l 0 500 a 50,50 0 0,0 50,50 l 500 0 a 50,50 0 0,1 50,50" -->
		</svg>
	</div>
</template>

<script lang="ts">
interface LineElement {
	x: number,
	y: number,
	width: number,
	height: number,
	r_x: number,
	b_y: number
}
enum Direction {
	LEFT, UP, RIGHT, DOWN
}

import Vue from 'vue'
export default Vue.extend({
	name: "LineCurve",
	data() {
		return {
			radius: 50,
			path: "",
			endX: 0,
			endY: 0,
		}
	},
	methods: {
		setBoundaries() {
			// Size svg to fit content
			const svg = this.$refs.line as SVGSVGElement;
			if (svg && svg.parentElement) {
				const width = svg.parentElement.offsetWidth;
				const height = svg.parentElement.offsetHeight + 1000;
				// Set svg attributes
				const vb = [0, 0, width, height];
				svg.setAttribute("viewBox", vb.join(" ") );
				svg.setAttribute("width", width.toString() );
				svg.setAttribute("height", height.toString() );
			}
		},
		// * Section Dimension Extraction
		getElement(ref: string): LineElement {
			const sect = document.getElementById(ref);
			if (sect)
				return {
					x: sect.offsetLeft,
					y: sect.offsetTop,
					width: sect.offsetWidth,
					height: sect.offsetHeight,
					r_x: sect.offsetLeft + sect.offsetWidth,
					b_y: sect.offsetTop + sect.offsetHeight,
				};
			else
				throw ReferenceError(`LineCurve/getDimensions: ${ref} is not a valid id`);
		},
		getEndPoint(): DOMPoint {
			const el = this.$refs.path as SVGPathElement;
			if (el.getTotalLength() === 0) throw EvalError('LineCurve/getEndPoint: path length is 0');
			return el.getPointAtLength(el.getTotalLength());
		},
		
		// * Line Functions
		addSegment(segment: string) {
			this.path += segment + '\n';
		},
		move(x: number, y: number) {
			this.addSegment(`M ${x} ${y}`);
			this.endX += x;
			this.endY += y;
		},
	
		line(length: number, dir: Direction) {
			if (dir === Direction.LEFT || dir === Direction.RIGHT)
				this.addSegment(`l ${dir === Direction.LEFT?'-':''}${length} 0`);
			else
				this.addSegment(`l 0 ${dir === Direction.UP?'-':''}${length}`);

			switch(dir) {
				case(Direction.LEFT):
					this.endX -= length;
					break;
				case(Direction.RIGHT):
					this.endX += length;
					break;
				case(Direction.UP):
					this.endY -= length;
					break;
				case(Direction.DOWN):
					this.endY += length;
					break;
			}
		},
		absLine(x: number, y: number) {
			this.addSegment(`L ${x} ${y}`);
			this.endX = x;
			this.endY = y;
		},
		semiAbsLine(coord: number, dir: Direction) {
			if (dir === Direction.UP || dir === Direction.DOWN)
				this.absLine(this.endX, coord);
			else
				this.absLine(coord, this.endY);
		},
	
		arc({top = true, right = true}) {
			const r = this.radius;
			this.addSegment(`a ${r},${r} 0 0,${right?1:0} ${top === right?'':'-'}${r}, ${r}`);
			// ? Assume segment line is going down
			this.endY += r;
			if (top)
				this.endX -= r;
			else
				this.endX += r;
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
			const hero = this.getElement('hero');
			this.move(hero.x, 0);
			this.absLine(hero.x, hero.b_y);
			this.arc({top: false, right: false});
			this.semiAbsLine(hero.r_x, Direction.RIGHT);
			this.arc({top: true, right: true});
			this.line(100, Direction.DOWN);
			this.arc({top: false, right: true});
			this.semiAbsLine(hero.x, Direction.LEFT);
			this.arc({top: true, right: false});
		},
		initLine() {
			this.path = "";
			this.heroSection();
		}
	},

	mounted() {
		this.setBoundaries();
		// Draw line
		this.initLine()
		// Redraw line on resize
		window.addEventListener('resize', () => this.initLine());
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