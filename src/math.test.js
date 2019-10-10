const Util = require('./math');
test('Test factoriel de 0 => 1', () => {
    expect(Util.factorial(0)).toBe(1);
});

test('Test factoriel de 2 => 2', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3 => 6', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3000', () => {
    expect(()=> {Util.factorial(3000)}).toThrow();
});

test('Test factoriel -10', () => {
    expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
});


describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});


describe('sumPrime',function() {
	test('Test sum prime de 1 => 0', () => {
		expect(Util.sumPrime(1)).toBe(0)
	});
	test('Test sum prime de 6 => 10', () => {
		expect(Util.sumPrime(6)).toBe(10)
	});
	test('Test sum prime de 8 => 17', () => {
		expect(Util.sumPrime(8)).toBe(17)
	});
});

describe('fizzBuzz',function() {
	var array = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
	test('Test fizz buzz retourne un array', () => {
		expect(Array.isArray(Util.fizzBuzz(15))).toBe(true)
	});
	test('Test fizz buzz de 15 => array', () => {
		expect(Util.fizzBuzz(15)).toEqual(array)
	});
	test('Test fizz buzz de 0 => {}', () => {
		expect(() => { Util.fizzBuzz(0) }).toThrow('Tableau commençant à 1');
	});
});

describe('cipher',function() {
	var str = 'Test Unitaire';
	var str2 = '&é"';
	var str3 = 'AmiZ';
	test('Test cipher', () => {
		expect(Util.cipher(str)).toEqual('Uftu Vojubjsf');
	});
	test('Test cipher with extra char', () => {
		expect(Util.cipher(str2)).toEqual('&é"');
	});
	test('Test cipher with z', () => {
		expect(Util.cipher(str3)).toEqual('BnjA');
	});
});

describe('pair',function() {
	test('Test pair tableau vide', () => {
		expect(Util.pairs([])).toBe(0);
	});
	test('Test pair un element', () => {
		expect(Util.pairs([3])).toBe(0);
	});
	test('Test pair 3 et 3', () => {
		expect(Util.pairs([3,3])).toBe(1);
	});
	test('Test pair 3 et 5 seul', () => {
		expect(Util.pairs([3,3,5])).toBe(1);
	});
	test('Test pair 3 et 5', () => {
		expect(Util.pairs([3,3,5,5,5])).toBe(4);
	});
	test('Test pair 3,5,7', () => {
		expect(Util.pairs([3,3,5,5,5,7,7])).toBe(5);
	});
});

