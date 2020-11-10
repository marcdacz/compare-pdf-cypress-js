module.exports = {
	paths: {
		actualPdfRootFolder: process.cwd() + '/cypress/fixtures/pdf/actual',
		baselinePdfRootFolder: process.cwd() + '/cypress/fixtures/pdf/baseline',
		actualPngRootFolder: process.cwd() + '/cypress/fixtures/png/actual',
		baselinePngRootFolder: process.cwd() + '/cypress/fixtures/png/baseline',
		diffPngRootFolder: process.cwd() + '/cypress/fixtures/png/diff'
	},
	settings: {
		density: 100,
		quality: 80,
		tolerance: 0,
		threshold: 0.1
	}
};
