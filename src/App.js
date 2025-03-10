import { useEffect, useState } from "react";
import "./style.css";
import supabase from "./supabase";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span style={{ fontSize: "40px" }}>{count}</span>
      <button className="btn btn-large" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </div>
  );
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  /* useEffect function only executes at the beginning, 
  when the app first loads, so if we want the page to update 
  after pressing the category button, we have to modify the 
  dependency array at the end of the useEffect function 
  and include [currentCategory] in it*/
  useEffect(
    function () {
      async function getFacts() {
        // display Loader
        setIsLoading(true);

        /* select all the columns from our "facts" table
      and store the data in a variable called "query". 
      Its not loading the query yet, just building the query */
        let query = supabase.from("facts").select("*");

        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);

        // fetch data - async function can take some time
        const { data: facts, error } = await query
          .order("votesInteresting", { ascending: false })
          // to limit the number of facts showing to 1000
          .limit(1000);

        // if no error, update this state to facts
        if (!error) setFacts(facts);
        else alert("There was a problem getting data 😕");
        setIsLoading(false); // close Loader
      }
      getFacts();
    },
    /* added currentCategory to the dependency array, so that
    the page will reload when the category buttons are clicked */
    [currentCategory]
  );

  return (
    <>
      <Header setShowForm={setShowForm} showForm={showForm} />
      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}

      <main className="columns-main">
        {/* pass setCurrentCategory function as a prop 
        inside CategoryFilter component,
        which manages the categories buttons clicks */}
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setFacts={setFacts} />
        )}
      </main>
    </>
  );
}

function Loader() {
  return <p className="message">⏳ Loading...</p>;
}

function Header({ setShowForm, showForm }) {
  const appTitle = "Today I Learned";

  return (
    <header className="header">
      <div className="logo-and-title">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>{appTitle}</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a Fact"}
      </button>
    </header>
  );
}

const CATEGORIES = [
  { name: "technology", color: "#0ea5e9" },
  { name: "science", color: "#3b82f6" },
  { name: "finance", color: "#6366f1" },
  { name: "society", color: "#8b5cf6" },
  { name: "entertainment", color: "#a855f7" },
  { name: "health", color: "#d946ef" },
  { name: "history", color: "#ec4899" },
  { name: "news", color: "#f43f5e" },
];

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("http://example.com");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  async function handleSubmit(e) {
    // 1. Prevent browser reload
    e.preventDefault();
    console.log(text, source, category);

    // 2. Check if data is valid. If so, create a new fact
    if (text && isValidHttpUrl(source) && category && textLength <= 200)
      console.log("there's valid data");

    // previous version (not saving new facts on supabase)
    // 3. Create new fact object
    // const newFact = {
    //   id: Math.round(Math.random() * 10000),
    //   text,
    //   source,
    //   category,
    //   votesInteresting: 0,
    //   votesMindblowing: 0,
    //   votesFalse: 0,
    //   createdIn: new Date().getFullYear(),
    // };

    // 3. Upload fact to Supabase and receive the new fact obj
    setIsUploading(true);
    // it will return the data and error
    // rename data to newFact
    const { data: newFact, error } = await supabase
      .from("facts")
      .insert([{ text, source, category }])
      .select();
    // once data has been uploaded, alow button to be clicked again
    setIsUploading(false);

    console.log(newFact);

    /* 4. Add the new fact to the state, to update the UI,
    we need to get the first element in the array [0],
    but only if no error. Otherwise newFact will become null and
    we will add null to the array */
    if (!error) setFacts((facts) => [newFact[0], ...facts]);

    // 5. Reset the input fields (to empty)
    setText("");
    setSource("");
    setCategory("");

    // 6. Close the form
    setShowForm(false);
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>

      {/* all form elements, including buttons, can have the 
      disabled attribute (will not work when we click them).  
      As soon as we click the submit button, it will become disabled,
      to prevent users from double clicking it */}
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

// accept the setCurrentCategory prop destructuring it
function CategoryFilter({ setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li className="list-of-categories">
          <button
            className="btn btn-all"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="list-of-categories">
            <button
              className="btn btn-other-categories"
              style={{ backgroundColor: cat.color }}
              onClick={() => setCurrentCategory(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FactList({ facts }) {
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
      {facts.length === 0 ? (
        <p>There are no facts for this category yet. Create the first one 🤩</p>
      ) : (
        <p>There are {facts.length} facts in the database. Add your own!</p>
      )}
    </section>
  );
}

function Fact({ fact }) {
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a className="a" href={fact.source} target="_blank" rel="noreferrer">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="voting-buttons">
        <button>👍 {fact.votesInteresting}</button>
        <button>🤯 {fact.votesMindblowing}</button>
        <button>⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
}

export default App;
