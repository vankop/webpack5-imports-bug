module.exports = function (environment = {}) {
	const isDev = !!environment.development;

	return {
		mode: isDev ? 'development' : 'production',
		// devtool: 'eval',
		devtool: false,
		output: {
			filename: '[name].js',
		},
		cache: false,
		optimization: {
			minimize: false,
			concatenateModules: false
		}
	};
};
