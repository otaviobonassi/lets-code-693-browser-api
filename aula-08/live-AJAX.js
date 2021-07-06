//  Seleção de Elementos
//  Manipulação de Elementos
//  Eventos no Navegador
//  cookies vs localStorage vs sessionStorage

// AJAX - Asynchronous Javascript and XML

// Javascript É UMA LINGUAGEM SINGLE THREADED
// - Using XMLHttpRequest
// - Using Fetch

//GET
const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(
  (response) => {
    console.log(response);
    if (response.ok) console.log(response.json());
    // response.json().then((response) => console.log(response));
    //response.text()
    //response.json()
    //response.formData()
    //response.blob()
    //response.arrayBuffer()
  }
);

//POST
// const user = {
//   name: "John",
//   surname: "Smith",
// };

// const responsePost = fetch("", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8",
//     Authorization: "uuid",
//   },
//   body: JSON.stringify(user),
// });

// Fetch retorna uma Promise!
// console.log("FIRST");
// const promise = new Promise((resolve, reject) => {
//   resolve("resolved");
// });

// promise.then((value) => console.log(value));
// console.log("SECOND");

// const promise = new Promise(async (resolve, reject) => {
//   const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   response
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       resolve(response);
//     });
// });

// promise.then((response) => console.log(response));
