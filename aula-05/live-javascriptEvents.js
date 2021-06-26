// cookies vs localStorage vs sessionStorage

// COOKIE
// salvar carrinhos de compra
// 4kb de TEXTO
// VAI EM TODA REQUISIÇÃO HTTP (incluído no header da request)

//localStorage e o sessionStorage
//5mb ~ 10mb
// SÓ TEXTO
// localStorage PERSISTE O DADO PRA SEMPRE
// sessionStorage PERSISTE O DADO ATÉ O FECHAMENTO DA ABA
// SEMPRE INDEXADOS À UMA URL

// // COOKIES
// document.cookie = "choco_chip_cookie=its_delicious";

// document.cookie =
//   "vanilla_cookie=its_not_that_good; Expires=Thu, 26 Jun 2021 23:28:00 GMT";

// console.log(document.cookie);

// // Secure: garante que os dados só sejam enviados caso a request seja feita via https
// // HttpOnly: garante que os cookies só possam ser acessados via http ... se dermos um console.log(document.cookie) não retorna nada

// localStorage e sessionStorage
// lista de compras, listas em geral
// uuid --> id's de usuário

window.localStorage.setItem("item1", "abacate");
const item = window.localStorage.getItem("item1");
console.log(item);
const obj = {
  info0: 1,
  info1: "something important",
  info2: () => {},
};

window.localStorage.setItem("first", obj); // ERRO! Para armazenar precisamos transformar em string
window.localStorage.setItem("first-right", null); // Cuidado! Stringify tem limitações, ele não transforma funções
// window.localStorage.clear();
window.localStorage.removeItem("first-right");
const ob = window.localStorage.getItem("first-right");
// console.log(ob.info0);
console.log(JSON.parse(ob).info0);

// window.sessionStorage.setItem("first", "single-attempt");
// window.sessionStorage.setItem("first-right", JSON.stringify(obj));
