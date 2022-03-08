/* Nivel : Fácil 
1. Leia um vetor de 12 posições e em seguida ler também dois valores X e Y quaisquer correspondentes a duas posições no vetor. 
Ao final seu programa deverá escrever a soma dos valores encontrados nas respectivas posições X e Y.*/

let meuVetor = [1, 3, -4, 0, 9, 30, -11, 7, 5, -2, -4, 100];
let somarValores = (vetor ,indice1 ,indice2)=> {return vetor[indice1] + vetor[indice2];}
console.log(somarValores(meuVetor, 1, 1));