const Interval = require('./interval');

describe('overLaps', function () {
	var interval = new Interval(2,7);
	var interval2 = new Interval(8,13);
	test('Test overlaps de [2,7] et [3,9] => true', () => {
    		expect(interval.overlaps(new Interval(3,9)).toBe(true);
	});
	test('Test overlaps de [2,7] et [8,13] => false', () => {
    		expect(interval.overlaps(interval2).toBe(false);
	});
	test('Test overlaps de [2,7] et [2,7] => true', () => {
    		expect(interval.overlaps(interval).toBe(true);
	});
	test('Test overlaps de [8,13] et [2,7] => false', () => {
    		expect(interval2.overlaps(interval).toBe(false);
	});
	test('Test overlaps de [2,7] et [1,0] => throw', () => {
    		expect(interval2.overlaps(interval).toThrow('Wrong interval');
	});
}
