//  Seleção de Elementos
//  Manipulação de Elementos
//  Eventos no Navegador
//  cookies vs localStorage vs sessionStorage

// AJAX

// Numeros, letras ... são variáveis/dados PRIMITIVOS
// const a = 1;
// const b = 1;
// console.log(a === b);

// Arrays e obj são variaveis/dados REFERENCIAVEIS
const obj1 = { a: 1 }; // obj1 === #12HD2
const obj2 = { a: 1 }; // obj2 === #399HD1
console.log([obj1].find((elem) => obj2.a === elem.a));

const obj = { nome: "otavio", sobrenome: "bonassi" };
// Após um click num botão
obj.nome = "joao";
const obj3 = { ...obj, nome: "joao" };

console.log(obj === obj);

// React e Angular --> comparam o valor das variáveis em D0 e depois comparam em D1
