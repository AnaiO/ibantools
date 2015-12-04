define(['build/ibantools'], function(iban) {

	describe('IBANTools', function () {
		describe('When calling isValidIBAN()', function () {
			it('with valid IBAN should return true', function () {
				expect(iban.isValidIBAN('NL91 ABNA 0417 1643 00')).toEqual(true);
			});
			it('with invalid IBAN should return false', function () {
				expect(iban.isValidIBAN('NL91 ABNA 0517 1643 00')).toEqual(false);
			});
			it('with no IBAN should return false', function () {
				expect(iban.isValidIBAN(null)).toEqual(false);
			});
		});
	});

});

