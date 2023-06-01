// ESTUDOS DE LAÇOS II
/**
 # Laços - Parte II

# for+if e for+for

## Combinando laços e condicionais

Podemos colocar laços dentro de condicionais, e o contrário também 
(condicionais dentro de laços). O funcionamento de ambos segue o mesmo. 

Veja exemplo abaixo:

Código que percorre o array e verifica se é par, imprimindo uma mensagem de 
número par, caso não seja imprime a mensagem do número impar: */
function par(){
const numeros = [08,37,39,50,59,60]

for(let i = 0; i < numeros.length; i++){

    if(numeros[i]%2 === 0){
        console.log(`Número do índice ${[i]} é ${numeros[i]}, é par`);
    }else{
        console.log(`Número do índice ${[i]} é ${numeros[i]}, é impar`);
    }
}
}
//par()

/**### Combinando laços e laços

E também podemos utilizar um laço dentro de outro. Suponha que 
temos um array, e este array tem outros arrays dentro dele. Para iterar 
por eles, podemos utilizar um for dentro de outro, desta forma:
 
Código que percorre cada item do 'arrayDeArrays' com o primeiro laço e com 
o segundo, percorre cada array dentro dele e imprime seus números no console.log() */

// const arrayDeArrays = [
//     [2, 4, 6, 8, 10],
//     [3, 6, 9, 12, 15],
//     [4, 8, 12, 16, 20],
//     [5, 10, 15, 20, 25]
//     ];

//     for (let i = 0; i < arrayDeArrays.length; i++){
//         for (let j = 0; j < arrayDeArrays[i].length; j++){  
//             //console.log(arrayDeArrays[i][j]);
//         }
//         console.log(arrayDeArrays[i]);
//     }

// LER LIVRO (VÍDEO) for aninhado
// console.log("Abrir livro");

// for(let pag = 1; pag <= 3; pag++){
//     console.log(`Página ${pag}`)

//     for(let linha = 1; linha <= 5; linha++){
//         console.log(`Linha ${linha}`);
//     }
// }
// console.log("Acabou o livro");

/* # **for… of**

Outra forma de simplificar a leitura dos elementos do array é 
utilizando o loop **for...of…**

O loop for...of **percorre arrays**, alocando o **valor** de 
cada posição do array em uma variável, permitindo executar alguma 
ação para cada valor distinto.
Exemplo:
*/

// for

// const numeros = [14, 67, 89, 15, 23]

// for(let i = 0; i < numeros.length /**ou o tamanho do array "5" */; i++){
//     console.log(numeros[i]);
// }

// for of

// const numeros = [14, 67, 89, 15, 23, 32]

// for(let numero of numeros){
//     console.log(numero);
// }
//     console.log(`fim do código ${[numeros]}`);

// for of frutas

// const arrayDeFrutas = ["Maçã", "Perâ", "Banana"]

// for(let fruta of arrayDeFrutas){
//     console.log(fruta);
// }

/*# for… in

Uma forma de simplificar a leitura dos elementos do array é 
utilizando o loop **for... in…**

O loop for...in **percorre arrays e objetos** , alocando o 
índice de cada posição do array, ou a chave de cada objeto, 
em uma variável, permitindo executar alguma ação para cada 
valor distinto.

Exemplo: */

//for
// const numeros = [14, 67, 89, 15, 23]

// for(let i = 0; i < numeros.length; i++){
//  console.log(numeros[i]);
// }

/*aqui, i é uma variável que pode receber qq valor, mas como 
queremos imprimir do primeiro até o último item do array 
iniciamos com 0 que é o indice do primeiro item do array. */

// for in com arrays
// const numeros = [14, 67, 89, 15, 23]

// for(let num in numeros){
//  console.log(num);//será impresso apenas o indice do array: 0, 1, 2 ...
//  console.log(numeros[num]); //será impresso o valor de cada indice: 14, 67, 89...
// } 
/*aqui, num recebe o índice a cada repetição*/

// for in com arrays (VÍDEOS) frutas

// const arrayDeFrutas = ["banana","uva","maçã"]

// for(let frutas in arrayDeFrutas){
//     console.log(arrayDeFrutas[frutas]);
// }

// for in com objetos

// const pessoa = {
//     nome: "Astrodev",
//     idade: 40
// }

// for(let i in pessoa){
//     console.log(i); //será impresso apenas a chave de cada propriedade: nome, idade.
//       console.log(pessoa[i]); //será impresso o valor de cada propriedade:"Astrodev", 40.
// } 
/*aqui, i recebe chave do objeto a cada repetição*/

// for in com objetos

// const meuObjeto = {
//     nome: "Charmander",
//     tipo: "fire",
//     hp: 40
// }

// for(let chave in meuObjeto){
//     //console.log(chave)
//     console.log(meuObjeto[chave]);
// }