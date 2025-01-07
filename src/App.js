import { useState } from "react";

const dict = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const search = (e) => {
    e.preventDefault();
    const ans = dict.filter(
      (d) => d.word.toLowerCase() === input.toLowerCase()
    )[0]?.meaning;
    if (ans) setResult(ans);
    else setResult("Word not found in the dictionary.");
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={search}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>Definition:</p>
      <p>{result}</p>
    </div>
  );
};
export default App;
