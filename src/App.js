import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput)
      .then((res) => {
        console.log(res.data);
        setDisplayData(res.data.meals);
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
      <div>
        {displayData.length === 0 ? (
          <h1>No Data Found</h1>
        ) : (
          <div>
            {displayData.map((item) => (
              <div key={item.idMeal} className="card m-3 p-3">
                <div className="m-auto">
                  <img src={item.strMealThumb} className="h-25 w-25" />
                </div>

                <div>
                  <h1 className="">{item.strMeal}</h1>
                  <div className="d-flex justify-content-around m-3">
                    <h6 className="">Area :{item.strArea}</h6>
                    <h6 className="">Category :{item.strCategory}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
