const array = [1, 2];

function somaNumeros(array){
   return array.reduce(function(prev, current){
      return prev + current;
   });
}

console.log(somaNumeros(array));