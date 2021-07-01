//  Seleção de Elementos
//  Manipulação de Elementos
//  Eventos no Navegador
//  cookies vs localStorage vs sessionStorage

// AJAX - Asynchronous Javascript and XML

// Javascript É UMA LINGUAGEM SINGLE THREADED

// Código Síncrono
// console.log("top");
// console.log("demais");

// Código Assíncrono
// console.log("top");
// setTimeout(() => {
//   console.log("nem tanto");
// }, -1);
// console.log("demais");

// carregar header
// demora 10s
// carrega meu footer
// Javascript Single Thread Não-"BLOCKANTE"

const xhr = new XMLHttpRequest();
// console.log(xhr);

// endpoint
// verbos HTTP/ ApiREST -> GET, POST, DELETE, PUT, PATCH
// xhr.addEventListener("readystatechange", () => {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const response = JSON.parse(xhr.response);
//     // const response = JSON.parse(xhr.response);
//     console.log(response);
//   }
// });
// xhr.addEventListener("readystatechange", () => {
//   console.log(xhr.readyState);
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     const response = JSON.parse(xhr.response);
//     // const response = JSON.parse(xhr.response);
//     console.log(response);
//   }
// });
xhr.addEventListener("load", () => {
  console.log(xhr.status);
  let response;
  if (xhr.status === 200) response = JSON.parse(xhr.response);
  if (xhr.status === 500) console.log("error");
  // const response = JSON.parse(xhr.response);
  console.log(response);
});
// xhr.addEventListener('error', (error) => console.log(error))
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/mew");
// xhr.responseType = "json";

// xhr.onreadystatechange = ...

xhr.send();
// .startsWith()
// const number = "1" / 1;
// console.log(typeof number);
