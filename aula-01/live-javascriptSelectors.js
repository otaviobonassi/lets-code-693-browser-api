// pegando elementos pelo ID
const byId = document.getElementById("text");
console.log(byId);

// pegando elementos por class
const byClass = document.getElementsByClassName("container"); // também retorna uma HTML Collection
console.log(byClass[0]);
// pegando elementos genéricos

// pegando elementos com Tag
const divs = document.getElementsByTagName("div");

setTimeout(() => console.log("ACABOU"), 10000);

console.log(divs[0]);
console.log(divs.item(0)); // Método específico do HTML Collection

for (let item of divs) {
  console.log(item);
}

// MUUUUUUUUUUUUITO IMPORTANTES: QUERYSELECTOR
const querySelect = document.querySelector("div");
const querySelect2 = document.querySelector("#text");
const querySelect3 = document.querySelector(".first");
console.log(querySelect);
console.log(querySelect2);
console.log(querySelect3);

const queryAll = document.querySelectorAll("div"); // NodeList
console.log(queryAll);
console.log(queryAll[0]);
console.log(queryAll.item(0));
queryAll.forEach((item) => console.log(item)); // HTML Collection NAO PERMITE
// for (let item in queryAll.item()) {
//   console.log(item);
// }

const obj = { item1: "uhdashudhua", item2: "hudasuhdsahu" };

// for (let item in obj) {
//   console.log(item);
//   console.log(obj[item]);
// }

// for (let key of Object.keys(obj)) {
//   console.log(key);
//   console.log(obj[key]);
// }

console.log(Object.keys(obj)); // ['item1', 'item2']
console.log(Object.values(obj)); // ['uhdashudhua', 'hudasuhdsahu']
console.log(Object.entries(obj)); // [['item1','uhdashudhua'], ['item2','hudasuhdsahu']]
const entries = Object.entries(obj); // [['item1','uhdashudhua'], ['item2','hudasuhdsahu']]

console.log(entries);
console.log(Object.fromEntries(entries));

const key = "item3"; // {item3: 'duhahusdahud'}

console.log({ key: "duhahusdahud" });

console.log({ [key]: "duhahusdahud" });

// for (let arr of entries) {
//   if (arr[0] === "item1") arr[0] = key;
// }

entries.forEach((arr) => {
  if (arr[0] === "item1") arr[0] = key;
});

console.log(entries.flat(2)); // ['item1', 'uhashusdhuahu', 'item2', 'dhuasuhahudhuas']

// FRONT (requisição HTTP) --------------> BACK (node) endpoint (https:// api.java/customers/1312321)
// http.get('https:// api.java/customers/1312321')
