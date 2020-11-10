describe('Compare PDF Tests', () => {
	before(() => {});
	let opts = {
		croppings: [ { pageIndex: 0, coordinates: { width: 600, height: 155, x: 0, y: 195 } } ],
		skipPageIndexes: [ 1 ]
	};

	it('Validate Same PDFs', async () => {
		cy
			.task('pdfCompare', {
				actualPdf: 'actualDraftReport_same.pdf',
				baselinePdf: 'baselineDraftReport.pdf',
				opts
			})
			.then((result) => {
				console.log(JSON.stringify(result, null, 2));
				expect(result.status).to.equal('passed');
			});
	});

	it('Validate Different PDFs', async () => {
		cy
			.task('pdfCompare', {
				actualPdf: 'actualDraftReport_different.pdf',
				baselinePdf: 'baselineDraftReport.pdf',
				opts
			})
			.then((result) => {
				console.log(JSON.stringify(result, null, 2));
				expect(result.status).to.equal('failed');
			});
	});
});
