const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const SISTERS = [
  { id: 1, name: "Nath", bornIn: 1981 },
  { id: 2, name: "Ju", bornIn: 1984 },
  { id: 3, name: "Lila", bornIn: 1987 },
  { id: 4, name: "Rapha", bornIn: 1991 },
  { id: 5, name: "Mari", bornIn: 1995 },
  { id: 6, name: "Lara", bornIn: 2003 },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

const htmlSistersArr = SISTERS.map(
  (sister) => `<li class="fact">${sister.name}</li>`
);
console.log(htmlSistersArr);

const htmlSistersString = htmlSistersArr.join("");
console.log(htmlSistersString);

factsList.insertAdjacentHTML("afterbegin", htmlSistersString);

// const renderAllFacts = initialFacts.map((fact) => fact.text);
// console.log(renderAllFacts);
// /* prints:
// [
//   'React is being developed by Meta (formerly facebook)',
//   'Millennial dads spend 3 times as much time with th…hanged a diaper. Today, that number is down to 3%',
//   'Lisbon is the capital of Portugal'
// ]
// 0: "React is being developed by Meta (formerly facebook)"
// 1: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%"
// 2: "Lisbon is the capital of Portugal"
// */

// const htmlArr = initialFacts.map(
//   (fact) => `<li class="fact">${fact.text}</li>`
// );
// console.log(htmlArr);
/* prints:
[
  '<li class="fact">React is being developed by Meta (formerly facebook)</li>', 
  '<li class="fact">Millennial dads spend 3 times as …d a diaper. Today, that number is down to 3%</li>', 
  '<li class="fact">Lisbon is the capital of Portugal</li>'
]
0: "<li class=\"fact\">React is being developed by Meta (formerly facebook)</li>"
1: "<li class=\"fact\">Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%</li>"
2: "<li class=\"fact\">Lisbon is the capital of Portugal</li>"
*/

// const htmlString = htmlArr.join("");
// console.log("----- html string -----");
// console.log(htmlString);

// factsList.insertAdjacentHTML("afterbegin", htmlString);

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

console.log(btn);
// // function calcAge(year) {
// //   return 2022 - year;
// // }

// const calcAge2 = (year) => 2022 - year;

// console.log(calcAge(1984));
// console.log(calcAge2(1984));

// const fact = ["RJ", 2013, true];

// // console.log(fact[0]);
// // console.log(fact[1]);
// // console.log(fact[2]);
// // console.log(fact[3]);
// // console.log(fact[fact.length - 1]);
// // console.log(fact[fact.length - 2]);

// const newFact = [...fact, "Niteroi"];
// console.log(newFact);

// const factObj = {
//   state: "RJ",
//   year: 2013,
//   isCorrect: true,
//   city: "Niteroi",
//   quarter: (calcQuarter = (number) =>
//     number >= 1 && number <= 3
//       ? `First quarter of ${factObj.year}`
//       : `Another quarter of ${factObj.year}`),
// };

// console.log(factObj);
// console.log(factObj.state);
// console.log(factObj["state"]);
// console.log("-------------state---------------");
// const { state, year } = factObj;
// console.log(state);
// console.log(year);

// const stateLocation = factObj.state;
// console.log(stateLocation);

// console.log("-------------quarter---------------");
// console.log(factObj.quarter(2));

// console.log("-------------array---------------");
// let arr = [2, 4, 6, 8];

// const arrTimesTen = arr.map(function (el) {
//   return el * 10;
// });
// console.log(arrTimesTen);

// console.log("-------------.map() array---------------");
// const timesTen = [2, 4, 6, 8].map((el) => el * 10);
// console.log(timesTen);

// console.log("-------------.map() array of objects---------------");

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const colorCat = CATEGORIES.map((el) => el.name);
// console.log(colorCat);

// console.log(
//   "-------------.map() array of objects passing function---------------"
// );
// const SISTERS = [
//   { id: 1, name: "Nath", bornIn: 1981 },
//   { id: 2, name: "Ju", bornIn: 1984 },
//   { id: 3, name: "Lila", bornIn: 1987 },
//   { id: 4, name: "Rapha", bornIn: 1991 },
//   { id: 5, name: "Mari", bornIn: 1995 },
//   { id: 6, name: "Lara", bornIn: 2003 },
// ];
// function calcAge(year) {
//   return 2024 - year;
// }

// const sistersAge = SISTERS.map((el) => calcAge(el.bornIn));
// console.log(sistersAge);
