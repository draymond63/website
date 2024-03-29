<template>
	<div>
		<svg ref="line">
			<path ref="path" :d="path"/>
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
	b_y: number,
	c_x: number,
	c_y: number,
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
				const height = svg.parentElement.offsetHeight;
				// Set svg attributes
				const vb = [0, 0, width, height];
				svg.setAttribute("viewBox", vb.join(" "));
				svg.setAttribute("width", width.toString());
				svg.setAttribute("height", height.toString());
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
					c_x: sect.offsetLeft + sect.offsetWidth / 2,
					c_y: sect.offsetTop + sect.offsetHeight / 2,
				};
			else
				throw ReferenceError(`LineCurve/getDimensions: ${ref} is not a valid id`);
		},
		isVertical(dir: Direction): boolean {
			return (dir === Direction.UP || dir === Direction.DOWN);
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
			if (this.isVertical(dir))
				this.addSegment(`l 0 ${dir === Direction.UP?'-':''}${length}`);
			else
				this.addSegment(`l ${dir === Direction.LEFT?'-':''}${length} 0`);

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
			if (this.isVertical(dir))
				this.absLine(this.endX, coord);
			else
				this.absLine(coord, this.endY);
		},
	
		arc(startDir: Direction, endDir: Direction) {
			const diff = Math.abs(startDir - endDir);
			if (diff === 0 || diff === 2) throw EvalError('LineCurve/arc: Directions cannot be parallel');
			const r = this.radius;
			const negR = diff === 3 || (startDir === Direction.UP || endDir === Direction.UP) ? '-':'';
			const sweepFlag = startDir == Direction.RIGHT || (this.isVertical(startDir) && endDir == Direction.LEFT) ? 1:0;
			this.addSegment(`a ${r},${r} 0 0,${sweepFlag} ${negR}${r}, ${r}`);
			// End tracking
			this.endY += r * (startDir === Direction.DOWN || endDir === Direction.DOWN?1:-1);
			this.endX += r * (startDir === Direction.RIGHT || endDir === Direction.RIGHT?1:-1);
		},
		lineArc(length: number, dir: Direction, curveDir: Direction) {
			this.line(length - this.radius, dir);
			this.arc(dir, curveDir);
		},
		semiAbsLineArc(coord: number, dir: Direction, curveDir: Direction) {
			const sign = dir < 2 ? -1 : 1; // If normal direction is UP or LEFT
			this.semiAbsLine(coord - this.radius * sign, dir);
			this.arc(dir, curveDir);
		},
		linkCenter(link: string, def: number) {
			// Mobile hides links, so a default value is given in case
			if (window.innerWidth > 850) {
				const el = this.getElement(link);
				this.semiAbsLineArc(el.c_x, Direction.RIGHT, Direction.DOWN);
			} else {
				this.semiAbsLineArc(def, Direction.RIGHT, Direction.DOWN);
			}
		},

		// * Line Creation
		heroSection() {
			const hero = this.getElement('hero');
			this.move(hero.x, 0);
			this.absLine(hero.x, hero.b_y - this.radius);
			this.arc(Direction.DOWN, Direction.RIGHT);
			this.linkCenter('about-link', hero.r_x);
		},
		aboutSection() {
			const about = this.getElement('about');
			this.semiAbsLineArc(about.y, Direction.DOWN, Direction.LEFT);
			this.semiAbsLineArc(about.x, Direction.LEFT, Direction.DOWN);
			this.semiAbsLineArc(about.b_y, Direction.DOWN, Direction.RIGHT);
			this.linkCenter('experience-link', about.r_x)
		},
		timelineSection() {
			const proj = this.getElement('timeline');
			this.semiAbsLineArc(proj.y, Direction.DOWN, Direction.LEFT);
			this.semiAbsLineArc(proj.c_x, Direction.LEFT, Direction.DOWN);
			this.semiAbsLineArc(proj.b_y, Direction.DOWN, Direction.RIGHT);
			this.semiAbsLineArc(proj.r_x, Direction.RIGHT, Direction.DOWN);
			this.line(2000, Direction.DOWN);
		},
		initLine() {
			this.path = "";
			this.setBoundaries();
			this.heroSection();
			this.aboutSection();
			this.timelineSection();
		},
	},
	mounted() {
		// Wait until render
		setTimeout(this.initLine, 0);
		setTimeout(this.initLine, 3000);
		// Redraw line on resize
		window.addEventListener('resize', () => this.initLine());
	}
});
</script>

<style lang="postcss" scoped>
path {
	stroke: var(--main-color);
	stroke-width: 8px;
	fill: none;
}
</style>