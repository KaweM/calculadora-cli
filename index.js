import { createInterface } from 'readline';
import{ 
    soma,
    subtracao,
    multiplicacao,
    divisao,
    potencia,
    modulo,
    porcentagem,
} from './operacoesMatematicas.js';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

function validarNumero(valor) {
    const numero = Number(valor);
    if(isNaN(numero)) {
        console.log('Por favor, digite apenas números validos.');
        return null;
    }
    return numero;
}
function iniciarCalculadora() {

    leitor.question('Digite o primeiro número:\n>', (numero1) => {

        const num1 = validarNumero(numero1);
        if (num1 === null) return iniciarCalculadora();

        leitor.question(
            'Escolha a operação:\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n5: Potência\n6: Módulo\n7: Porcentagem\n>',
             (operacao) => {
            leitor.question('Digite o segundo número:\n>', (numero2) =>{

                const num2 = validarNumero(numero2);
                if (num2 === null) return iniciarCalculadora();

                const operacaoLimpa = operacao.trim();
                let resultado = null;

                try{

                    switch(operacaoLimpa) {
                        case '1':
                            resultado = soma(num1, num2);
                            break;
                        case '2':
                            resultado = subtracao(num1, num2);
                            break;
                        case '3':
                            resultado = multiplicacao(num1, num2);
                            break;
                        case '4':
                            resultado = divisao(num1, num2)
                            break;
                        case '5':
                            resultado = potencia(num1, num2);
                            break;
                        case '6':
                            resultado = modulo(num1, num2);
                            break;
                        case '7':
                            resultado = porcentagem(num1, num2);
                            break
                        default:
                        console.log('Operação invalida');
                    }
                    
                    if (resultado != null) {
                        console.log(`O resultado da operação é: ${resultado}`)
                    }
                } catch (error) {
                    console.log(`Erro: ${error.message}`)
                }

                leitor.question('Deseja fazer outra operação? (s/n)\n> ', (resposta) => {
                    if (resposta.trim().toLowerCase() === 's') {
                        iniciarCalculadora()
                    } else {
                        console.log('Calculadora finalizada. Até mais!');
                        leitor.close();
                    }

                });
            });
        });
    });
}
iniciarCalculadora();