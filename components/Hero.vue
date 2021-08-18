<template>
	<div id="hero">
			<img src="@/assets/profile.jpg" alt="Profile Photo">
			<div>
				<h2>Hi!</h2>
				<h3>I'm Daniel Raymond.</h3>
				<p>
					Thanks for stopping by! I'm a systems design engineering student
					at the University of Waterloo in Canada. I do a lot of different things,
					from electrical to aerospace and software to philosophy so please, 
					take a look around!
				</p>
			</div>
		</div>
</template>

<style lang="postcss" scoped>
#hero {
	display: flex;
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
	#hero {
		flex-direction: column;
		padding: 1rem;
	}
	img {
		width: 100%;
	}
}
</style>