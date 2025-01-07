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
  const search = () => {
    const ans = dict.filter(
      (d) => d.word.toLowerCase() === input.toLowerCase()
    )[0]?.meaning;
    if (ans) setResult(ans);
    else setResult("Word not found in the dictionary.");
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={search}>Search</button>
      <p>Definition:</p>
      {result}
    </div>
  );
};
export default App;
