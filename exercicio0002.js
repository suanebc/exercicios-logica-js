/* Nivel : Fácil 
2.Declare um vetor de 10 posições e o preencha com os
10 primeiros números impares e o escreva.*/

let impares = () =>{
   let meuVetor = new Array(10);
   for(let i = 1; i < 20; i++){
      if( i% 2 != 0){ meuVetor.push(i) }   
   }
   return meuVetor;
}
console.log(impares())