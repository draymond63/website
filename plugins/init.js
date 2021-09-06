export default ({app}, inject) => {
	// Timeout delay to allow history attributes to load
	setTimeout(() => {
		const hash = app.router.history.current.hash
		if (hash && hash.length >= 2 && hash.substr(0, 2) == '#/') {
			const realPath = hash.substr(2)
			app.router.push(realPath)
		}
	}, 0);
}