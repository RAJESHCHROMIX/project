const Code = require('code');
const expect = Code.expect;
const functions = require('./functions.js'),
    times = functions.times;
	add = functions.add;
	
describe('times function',function(){
	
	it('do times',function(){
		expect(times(1,2)).equal(2);
		expect(times(4,10)).equal(40);
		expect(times(2,4)).equal(8);
		expect(times(2,2)).equal(4);
		expect(times(2,2)).to.be.a.number();
	});
	
});



describe('function add',function(){
	
	it('do add',function(){
		expect(add(2,2)).equal(4);
		expect(add(2,2)).to.be.a.number();
	});
	
});