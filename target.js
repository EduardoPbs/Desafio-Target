function showSoma() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    console.log(soma);
}

showSoma(); // 91

function existOnFibonacci(num) {
    if (num === undefined) {
        console.log('Não é possível ler: ', num);
        return;
    }

    let fibonacci = [0, 1];
    for (let i = 2; i < 50; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    if (fibonacci.includes(num)) {
        console.log(`${num}, PERTENCE a sequência de Fibonacci.`);
    } else console.log(`${num}, NÃO PERTENCE a sequência de Fibonacci.`);
}

existOnFibonacci(34);

/**
 *  Descubra a lógica e complete o próximo elemento:
 *    a) 1, 3, 5, 7, _9_ => Números ímpares.
 *    
 *    b) 2, 4, 8, 16, 32, 64, _128_ => Dobro do valor anterior.
 *    
 *    c) 0, 1, 4, 9, 16, 25, 36, _49_ => Números naturais ao quadrado.
 *    
 *    d) 4, 16, 36, 64, _100_ => Números pares ao quadrado.
 *    
 *    e) 1, 1, 2, 3, 5, 8, _13_ => Sequência de Fibonacci.
 *    
 *    f) 2, 10, 12, 16, 17, 18, 19, _20_.
 */

/***
 * 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. 
 *  Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas 
 *  vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
 *
 *  Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor
 *  controla cada lâmpada?
 * 
 * R: Primeiro, entraria na sala com os interruptores e as lâmpadas, então começaria ligando o primeiro interruptor
 *  e esperaria alguns minutos para ver se alguma lâmpada acendesse. Em seguida, desligaria o primeiro interruptor e 
 *  ligaria o segundo, mantendo o terceiro desligado, depois de fazer isso, iria até a sala das lâmpadas. Se uma estivesse 
 *  acesa, seria óbvio que o primeiro interruptor a controla. Se estivessem todas apagadas, tocaria uma das lâmpadas. Se
 *  estivesse fria, saberia que o segundo interruptor é o responsável por essa lâmpada. Se estivesse quente, deduziria que
 *  o terceiro interruptor é o responsável.
 *  */

function inverte(string) {
    let stringInvertida = '';
    for(let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    console.log(stringInvertida);
}

inverte('Hello Word!'); // !droW olleH