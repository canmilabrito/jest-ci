const {salarios} = require('./salario');

describe('cálculos para folha de pagamento', () => {
    /*let valorSalario, descontos, faltas;

    beforeAll(() =>{
        valorSalario = 1000;
        descontos = 100;
        faltas = 50;
    });
    */

    it('exibir o salário bruto', () => {
        expect(salarios(1000,0,0)).toBe(1000);
    });

    it('exibir o salário após os descontos', () => {
        expect(salarios(1000,100,0)).toBe(900);
    });

    it('exibir o salário líquido após os descontos e faltas', () => {
        expect(salarios(1000,100,50)).toBe(850);
    });
});