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

const button = document.querySelector(".compare");

const pokemons = ["moltres", "articuno", "zapdos"];
const stats = [
  "hp",
  "ataque",
  "defesa",
  "ataque especial",
  "defesa especial",
  "velocidade",
];
let shownStats = [];
const dictionary = {
  hp: "hp",
  attack: "ataque",
  defense: "defesa",
  "special-attack": "ataque especial",
  "special-defense": "defesa especial",
  speed: "velocidade",
};

// forEach vs map --> forEach ele não retorna nada, map retorna

button.addEventListener("click", () => {
  const attr = "ataque especial";
  console.log(compareAndDecidesWhoWins(shownStats, attr));
});

const compareAndDecidesWhoWins = (data, attr) => {
  return data.map((pokemonStats) => {
    return pokemonStats.filter((stats) => stats.propertyName === attr);
  });
};

// const buildHTML = (data) => {
//   // if (data.length === pokemons.length) {
//   //   // criar HTML, iterando sobre o valor.
//   //   data.forEach((pokemonStats) => {
//   //     console.log(pokemonStats);
//   //   });
//   // } else {
//   //   return
//   // }
//   if (data.length !== pokemons.length) return;
//   // criar HTML, iterando sobre o valor.
//   data.forEach((pokemonStats) => {
//     const div = document.createElement("div");
//     pokemonStats.forEach((stat) => {
//       div.innerText = stat.propertyName;
//     });
//   });
// };

const getFilteredStats = (stats) => {
  // {propertyName = ..., value=...}
  return stats.map((stat) => {
    return { propertyName: dictionary[stat.stat.name], value: stat.base_stat };
  });
};

// const addImage = (pokemonName) => {
//   return { image: `${pokemonName}.png` };
// };

const callApi = (pokemon) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      // response = JSON.parse(xhr.response)
      // getFilteredStats(response.stats)
      const { stats } = JSON.parse(xhr.response);
      const response = getFilteredStats(stats);
      shownStats.push(response);
      // buildHTML(shownStats);
    }
    if (xhr.status === 500) console.log("error");
  });
  //essa request foi feita 3 vezes?
  //o endpoint é o https://pokeapi.co/api/v2/pokemon/?
  xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  xhr.send();
};

pokemons.forEach((pokemon) => {
  callApi(pokemon); //chamei callApi 3 vezes?
});

// xhr.addEventListener("load", () => {
//   let response;
//   if (xhr.status === 200) response = JSON.parse(xhr.response);
//   if (xhr.status === 500) console.log("error");
//   // const response = JSON.parse(xhr.response);
//   console.log(response);
// });
// xhr.addEventListener('error', (error) => console.log(error))
// xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
xhr.responseType = "json";

// xhr.onreadystatechange = ...

// xhr.send();
// .startsWith()
// const number = "1" / 1;
// console.log(typeof number);
