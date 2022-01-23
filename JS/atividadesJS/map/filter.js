
const pares = [1, 2, 3, 4, 5, 6 ,7 , 8, 9, 10]

function filtrar(array){
   return array.filter(callback);
}


function callback(item){
   return item % 2 === 0;
}

console.log(filtrar(pares))