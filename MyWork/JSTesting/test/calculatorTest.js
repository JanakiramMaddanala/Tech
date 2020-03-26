describe('Calculator', function() {
    it('Add two positive numbers', function(){
        let a = 1, b = 3;
        let result = add(a,b);
        assert.equal(result, 4);
    })
})