import "./style.css";

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

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblower: 9,
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
    votesMindblower: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblower: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  const appTitle = "Today I Learned";

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo-and-title">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>{appTitle}</h1>
        </div>

        <button className="btn btn-large btn-open">Share a Fact</button>
      </header>
      <NewFactForm />
      <main className="columns-main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return (
    <aside>
      Category List
      {/* <ul>
        <li className="list-of-categories">
          <button className="btn btn-all">All</button>
        </li>
        <li className="list-of-categories">
          <button
            className="btn btn-other-categories"
            style={back: #6366f1}
          >
            Technology
          </button>
        </li>
        <li className="list-of-categories">
          <button
            className="btn btn-other-categories"
            style="background-color: #818cf8"
          >
            Science
          </button>
        </li>
      </ul> */}
    </aside>
  );
}

function FactList() {
  // Temporary, while using fake data
  const facts = initialFacts;
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <li key={fact.id} className="fact">
            <p>
              {fact.text}
              <a
                className="a"
                href={fact.source}
                target="_blank"
                rel="noreferrer"
              >
                (Source)
              </a>
            </p>
            <span
              className="tag"
              style={{
                backgroundColor: CATEGORIES.find(
                  (cat) => cat.name === fact.category
                ).color,
              }}
            >
              {fact.category}
            </span>
            <div className="voting-buttons">
              <button>👍 {fact.votesInteresting}</button>
              <button>🤯 {fact.votesMindblower}</button>
              <button>⛔️ {fact.votesMindblower}</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
