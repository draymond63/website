<template>
	<div class="hero">
			<img src="@/assets/profile.jpg" alt="Profile Photo">
			<div>
				<h1>Hi!</h1>
				<h3>I'm Daniel Raymond.</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna 
					aliqua. Ut enim ad minim veniam, quis nostrud
				</p>
			</div>
		</div>
</template>

<style lang="postcss" scoped>
.hero {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
	place-items: center;
	gap: 3rem;

	width: 80%;
	max-width: 100rem;
	padding: 5rem;
	margin-left: var(--hero-offset);
}

img {
	width: 20vw;
	border-radius: 50%;
}

@media screen and (max-width: 850px) {
	.hero {
		padding: 1rem;
		gap: .2rem;
	}
	img {
		width: 100%;
	}
}
</style>