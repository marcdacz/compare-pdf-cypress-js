/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const comparePdf = require('compare-pdf');
const comparePdfConfig = require('./comparePdfConfig');
module.exports = (on) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config
	on('task', {
		async pdfCompare({ actualPdf, baselinePdf, opts }) {
			console.log(JSON.stringify(comparePdfConfig, null, 2));
			let comparisonResults = await new comparePdf(comparePdfConfig)
				.actualPdfFile(actualPdf)
				.baselinePdfFile(baselinePdf)
				.cropPages(opts.croppings ? opts.croppings : []) //check if opts.croppings exists else its an empty array
				.skipPageIndexes(opts.skipPageIndexes ? opts.skipPageIndexes : []) //check if opts.skipPageIndexes exists else its an empty array
				.compare();
			return comparisonResults;
		}
	});
};
