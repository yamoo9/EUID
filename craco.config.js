const { POSTCSS_MODES } = require('@craco/craco');
const sassSourcemapsPlugin = require('./config/craco.sass.sourcemap');
const CracoAlias = require('craco-alias');

module.exports = {
	style: {
		postcss: {
			mode: POSTCSS_MODES.file,
		},
	},
	plugins: [
		{ plugin: sassSourcemapsPlugin },
		{
			plugin: CracoAlias,
			options: {
				source: 'jsconfig',
			},
		},
	],
};
