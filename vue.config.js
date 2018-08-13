module.exports = {
	lintOnSave: true,
	configureWebpack: {
		resolve: {
			alias: {
				vue$: 'vue/dist/vue.js',
				touch$: 'vue-touch/dist/vue-touch.js'
			}
		}
	}
}