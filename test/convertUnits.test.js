const { expect } = require('chai');
const {
  getPounds,
  getFeetAndInches
} = require('../util/convertUnits');

describe('unit conversion helpers', () => {
  describe('getPounds', () => {
    it('should convert 4600 hectograms to "1014 pounds"', () => {
      const pounds = getPounds(4600);
      expect(pounds).to.equal('1014 pounds');
    });

    it('should convert 400 hectograms to "88 pounds"', () => {
      const pounds = getPounds(400);
      expect(pounds).to.equal('88 pounds');
    });

    it('should convert 560 hectograms to "123 pounds"', () => {
      const pounds = getPounds(560);
      expect(pounds).to.equal('123 pounds');
    });
  });

  describe('getFeetAndInches', () => {
    it('should convert 15 decimeters to "4 feet 11 inches"', () => {
      const height = getFeetAndInches(15);
      expect(height).to.equal('4 feet 11 inches');
    });

    it('should convert 21 decimeters to "6 feet 10 inches"', () => {
      const height = getFeetAndInches(21);
      expect(height).to.equal('6 feet 10 inches');
    });

    it('should convert 65 decimeters to "21 feet 3 inches"', () => {
      const height = getFeetAndInches(65);
      expect(height).to.equal('21 feet 3 inches');
    });
  });
});
