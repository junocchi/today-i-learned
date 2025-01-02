const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load date from Supabase
async function loadFacts() {
  const res = await fetch(
    "https://nesxyqrltqhzbnrdljle.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lc3h5cXJsdHFoemJucmRsamxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNTE3NzIsImV4cCI6MjA0MTcyNzc3Mn0.CF_4KGP_nONoP7tPCeV0475Gy2oSxqn71BS3fXLIzEM",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lc3h5cXJsdHFoemJucmRsamxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNTE3NzIsImV4cCI6MjA0MTcyNzc3Mn0.CF_4KGP_nONoP7tPCeV0475Gy2oSxqn71BS3fXLIzEM",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  // const filteredBySociety = data.filter((fact) => fact.category === "society");
  createFactsList(data);
}
loadFacts();

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) =>
      `<li class="fact">
    <p>
    ${fact.text}
      <a class="a" href=${fact.source} 
      target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">
      ${fact.category}
    </span>
  </li>`
  );

  const htmlString = htmlArr.join("");

  factsList.insertAdjacentHTML("afterbegin", htmlString);
}

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

const filteredArr = [2, 5, 18, -6, 22, 23, 57].find((el) => el >= 5);
console.log("--------- filtered array ----------");
console.log(filteredArr);

console.log("--------- find category color ----------");
console.log(CATEGORIES.find((cat) => cat.name === "society").color);
