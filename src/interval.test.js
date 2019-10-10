const Interval = require('./interval');

describe('overLaps', function () {
	var interval = new Interval(2,7);
	var interval2 = new Interval(8,13);
	var interval3 = new Interval(3,9);

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


describe('union', function () {
    var interval1 = new Interval(2,7)
    var interval2 = new Interval(7,9);
    var interval3 = new Interval(5,11);
    var interval4 = new Interval(15,25);
    var interval5 = new Interval(3,6);

    var res12 = [new Interval(2,9)];
    var res13 = [new Interval(2,11)];
    var res14 = [interval1, interval4];
    var res15 = [interval1];

    test('Test union de [2,7] et [7,9] => [2,9]', () => { 
        expect(interval1.union(interval2)).toEqual(res12)
    });
    test('Test union de [2,7] et [5,11] => [2,11]', () => { 
        expect(interval1.union(interval3)).toEqual(res13)
    });
    test('Test union de [2,7] et [15,25] => [[2,7],[15,25]]', () => { 
        expect(interval1.union(interval4)).toEqual(res14)
    });
    test('Test union de [15,25] et [2,7] => [[2,7],[15,25]]', () => { 
        expect(interval4.union(interval1)).toEqual(res14)
    });
    test('Test union [2,7] et [3,6] => [2,7]', () => { 
        expect(interval1.union(interval5)).toEqual(res15)
    });
});

describe('intersection', function () {
    var interval1 = new Interval(2,7)
    var interval2 = new Interval(7,9);
    var interval3 = new Interval(5,11);
    var interval4 = new Interval(15,25);
    var interval5 = new Interval(3,6);

    var res = new Interval(7,7);
    var res13 = new Interval(5,7);


    test('Test intersection de [2,7] et [7,9] => [7,7]', () => { 
        expect(interval1.intersection(interval2)).toEqual(res)
    });
    test('Test intersection de [2,7] et [5,11] => [5,7]', () => { 
        expect(interval1.intersection(interval3)).toEqual(res13)
    });
    test('Test intersection de [5,11] et [2,7] => [5,7]', () => { 
        expect(interval3.intersection(interval1)).toEqual(res13)
    });
    test('Test intersection de [2,7] et [15,25] => Null', () => { 
        expect(interval1.intersection(interval4)).toBeNull()
    });
    test('Test intersection de [2,7] et [3,6] => [3,6]', () => { 
        expect(interval1.intersection(interval5)).toEqual(interval5)
    });
    test('Test intersection de [3,6] et [2,7] => [3,6]', () => { 
        expect(interval5.intersection(interval1)).toEqual(interval5)
    });
});

describe('exclusion', function () {
    var interval1 = new Interval(2,7)
    var interval2 = new Interval(7,9);
    var interval3 = new Interval(5,11);
    var interval4 = new Interval(15,25);
    var interval5 = new Interval(3,6);

    var res = [new Interval(2,2), new Interval(7,7)];
    var res13 = [new Interval(2,4), new Interval(6,11)];
    var res12 = [new Interval(2,6), new Interval(8,9)];
    var res14 = [interval1, interval4];

    test('Test exclusion de [2,7] et [3,6] => [[2,2],[7,7]]', () => { 
        expect(interval1.exclusion(interval5)).toEqual(res)
    });
    test('Test exclusion de [2,7] et [5,11] => [[2,4],[6,11]]', () => { 
        expect(interval1.exclusion(interval3)).toEqual(res13)
    });
    test('Test exclusion de [2,7] et [7,9] => [[2,6],[8,9]]', () => { 
        expect(interval1.exclusion(interval2)).toEqual(res12)
    });
    test('Test exclusion de [7,9] et [2,7] => [[2,6],[8,9]]', () => { 
        expect(interval2.exclusion(interval1)).toEqual(res12)
    });
    test('Test exclusion de [2,7] et [15,25] => [[2,7],[15,25]]', () => { 
        expect(interval1.exclusion(interval4)).toEqual(res14)
    });
    test('Test exclusion de [15,25] et [2,7] => [[2,7],[15,25]]', () => { 
        expect(interval4.exclusion(interval1)).toEqual(res14)
    });
});

