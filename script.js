// --------------- PRÁTICA GUIADA ---------------
// bimestre1 = [10,4,3,8]
// bimestre2 = [6,8,3,5]
// bimestre3 = [9,10,5,7]
// bimestre4 = [10,10,10,10]

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]
//console.log(notasDoAno[0][1]);

// for in e for of

// for(let indiceBimestre in notasDoAno){
// //for(let indiceBimestre = 0; indiceBimestre < notasDoAno.length; indiceBimestre++){
//   //console.log(indiceBimestre);
//   let soma = 0
//   for(let indiceNota = 0; indiceNota < notasDoAno[indiceBimestre].length; indiceNota++){
//     soma = soma + notasDoAno[indiceBimestre][indiceNota]
//   }
//   //console.log("Soma do bimestre: ", soma);
//   let mediaBimenstre = soma / notasDoAno[indiceBimestre].length
//   console.log(`A soma das notas do bimestre ${indiceBimestre +1} é: ${soma} \nA média do bimestre ${indiceBimestre +1} é: ${mediaBimenstre}`);
// }

//console.table(notasDoAno)

// for of
// for(let indiceBimestre in notasDoAno){
//     //console.log(indiceBimestre);
//     let soma = 0
//     for(let nota of notasDoAno[indiceBimestre]){
//       soma = soma + nota
//     }
//     //console.log("Soma do bimestre: ", soma);
//     let mediaBimenstre = soma / notasDoAno[indiceBimestre].length
//     console.log(`A soma das notas do bimestre ${Number(indiceBimestre) +1} é: ${soma} \n
//     A média do bimestre ${Number(indiceBimestre) +1} é: ${mediaBimenstre}`);
//   }


// transformando os indices em i e j

// for(let i = 0; i < notasDoAno.length; i++){
//   //console.log(indiceBimestre);
//   let soma = 0
//   for(let j = 0; j < notasDoAno[i].length; j++){
//     soma = soma + notasDoAno[i][j]
//   }
//   //console.log("Soma do bimestre: ", soma);
//   let mediaBimenstre = soma / notasDoAno[i].length
//   console.log(`A soma das notas do bimestre ${i +1} é: ${soma} \nA média do bimestre ${i +1} é: ${mediaBimenstre}`);
// }

// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

//for for
// for(let i = 0; i < filmes.length; i++){
//   console.log("----------------------");
//   console.log(`Título: ${filmes[i].titulo}`);
//   console.log(`Ano: ${filmes[i].ano}`);
//   console.log(`Diretor: ${filmes[i].diretor}`);


//   for(let j = 0; j < filmes[i].elenco.length; j++){    
//     console.log(`Ator/ Atriz: ${filmes[i].elenco[j]}`);  
    
//   }
// }

// for in for in
// for(let chave in filmes){
//   console.log(`Título: ${filmes[chave].titulo}`);
//   console.log(`Ano: ${filmes[chave].ano}`);
//   console.log(`Diretor: ${filmes[chave].diretor}`);

//   for(let j in filmes[chave].elenco){    
//     console.log(`Ator/ Atriz: ${filmes[chave].elenco} ${[j].elenco}`);  }
// }

// for in for of
for(let chave in filmes){
  console.log(`Título: ${filmes[chave].titulo}`);
  console.log(`Ano: ${filmes[chave].ano}`);
  console.log(`Diretor: ${filmes[chave].diretor}`);

  for(let ator of filmes[chave].elenco){    
    console.log(`Ator/ Atriz: ${ator}`);  }
}


