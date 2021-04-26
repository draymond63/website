<template>
	<div class="line-wrapper">
		<svg viewBox="0 0 660 550" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M115 0V23.5C115 51 137 74 165 73.5H604.5C632 73 655 96 655 123.5V418C654 445 632 468 605 468H54C26 468 4 490 4 518V548"/>
		</svg>
	</div>
</template>

<style scoped>
svg {
	width: calc(100% - var(--about-offset));
	margin-left: var(--about-offset);
}

path {
	stroke: var(--main-color-1);
	stroke-width: 8px
}
</style>