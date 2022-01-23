const alunos  = [
   {
      nome: 'João',
      nota: 5,
      turma: '1B'
   },
   {
      nome: 'Miguel',
      nota: 3,
      turma: '2B'
   },
   {
      nome: 'Sofia',
      nota: 9,
      turma: '1B'
   },
   {
      nome: 'Paulo',
      nota: 6,
      turma: '2B'
   },
   {
      nome: 'Ana',
      nota: 3,
      turma: '2B'
   },
];

function recebaAlunos(array, media){
   let aprovados = [];
   let reprovados = [];

   for (let i = 0; i < array.length; i++){
      if(array[i].nota >= media){
         aprovados.push(array[i].nome + " foi aprovado")
      }else {
         console.log(array[i].nome + " foi reprovado");
      }
   }
   
   return aprovados;
}  

console.log(recebaAlunos(alunos, 5));