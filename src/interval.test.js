const Interval = require('./interval');

describe('overLaps', function () {
	var interval = new Interval(2,7);
	var interval2 = new Interval(8,13);
	var interval3 = new Interval(3,9);
	var interval4 = new Interval(1,0);
	test('Test overlaps de [2,7] et [3,9] => true', () => {
    		expect(interval.overlaps(interval3)).toBe(true)
	});
	test('Test overlaps de [2,7] et [8,13] => false', () => {
    		expect(interval.overlaps(interval2)).toBe(false)
	});
	test('Test overlaps de [2,7] et [2,7] => true', () => {
    		expect(interval.overlaps(interval)).toBe(true)
	});
	test('Test overlaps de [8,13] et [2,7] => false', () => {
    		expect(interval2.overlaps(interval)).toBe(false)
	});
	test('Test overlaps de [2,7] et [1,0] => throw', () => {
    		expect(() => { interval.overlaps(interval4)}).toThrow('Wrong interval')
	});
});

describe('includes', function () {
    var interval = new Interval(2,7);
    var interval1 = new Interval(2,7);
    var interval2 = new Interval(3,5);
    var interval3 = new Interval(3,9);
    var interval4 = new Interval(7,9);

    test('Test includes de [2,7] et [2,7] => true', () => { 
        expect(interval.includes(interval1)).toBe(true)
    });
    test('Test includes de [2,7] et [3,5] => true', () => { 
        expect(interval.includes(interval2)).toBe(true)
    });
    test('Test includes de [2,7] et [3,9] => false', () => { 
        expect(interval.includes(interval3)).toBe(false)
    });
    test('Test includes de [2,7] et [7,9] => false', () => { 
        expect(interval.includes(interval4)).toBe(false)
    });
});
