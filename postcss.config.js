// 참고: https://github.com/gsoft-inc/craco/tree/master/recipes/use-a-post-css-config-file

module.exports = {
	plugins: [
		require('postcss-flexbugs-fixes'),
		require('postcss-preset-env')({
			autoprefixer: {
				flexbox: 'no-2009',
				// 참고: https://github.com/postcss/autoprefixer#options
				grid: 'autoplace',
			},
			stage: 3,
			features: {
				'nesting-rules': true,
			},
		}),
	],
};
