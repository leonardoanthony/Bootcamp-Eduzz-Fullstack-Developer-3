const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;



let value = 0;

describe('Math class', function() { //? Describe => descreve o que está sendo testado

    //Hooks

    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done) { //? it => descreve o comportamento esperado
        const math = new Math();
        this.timeout(3000); //? o timeout padrão do test é 2000, dessa forma alteramos o valor

        value = 5

        math.sum(value, 5, value => {
            //sem chai
            // assert.equal(value, 10);
            //com chai
            expect(value).to.equal(10);
            done();
        });
    }); 

    // é possível escrever testes sem execução, o retorno será um teste pendente

    //it('Multiply two numbers');

    //? only => esecuta apenas esse teste

    it('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });

    // caso queira passar o teste sem executá-lo e retornar pendente, utilizar 'skip' no lugar do only

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
    })


 });