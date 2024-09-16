import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    axios
      .get("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((rrr) => {
        console.log(rrr);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="App">
      <h2>Meal Finder Application</h2>
      <p>Search for your favourite Meal</p>
      <div>
        <input
          type="search"
          placeholder="search for yor meal"
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
    </div>
  );
}
