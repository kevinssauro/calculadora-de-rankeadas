/* # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" 
*/

let saldoVitorias

function calcularSaldo (vitorias, derrotas){
    vitorias = 200
    derrotas = 15

    saldoVitorias = vitorias - derrotas
    

    return saldoVitorias
}

calcularSaldo()



function calcularElo(){

    if ((saldoVitorias <= 10)) {
        elo = "Ferro"
    }else if (saldoVitorias > 10 && saldoVitorias <= 20){
        elo = "Bronze"
    }else if (saldoVitorias > 20 && saldoVitorias <= 50){
        elo = "Prata"
    }else if (saldoVitorias > 50 && saldoVitorias <= 80){
        elo = "Ouro"
    }else if (saldoVitorias > 80 && saldoVitorias <= 90){
        elo = "Diamante"
    }else if (saldoVitorias > 90 && saldoVitorias <= 100){
        elo = "Lendário"
    }else if (saldoVitorias > 100){
        elo = "Imortal"
    }else{
        console.log("mensagem padrão")
    }

return elo
}




console.log("O heroi tem saldo de " + calcularSaldo() + " e está no nível: " + calcularElo()) 