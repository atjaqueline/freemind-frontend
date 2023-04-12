import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Recipes.css";
import Banner from "../homepage/Banner";
const API_KEY = process.env.REACT_APP_API_KEY

export default function Recipes() {
  let [keyword, setKeyword] = useState("strawberry");
  let [response, setResponse] = useState(null);
  let [diet, setDiet] = useState(null);
  let [load, setLoading] = useState();

  const options = {
    method: "GET",
    params: {
      query: keyword,
      diet: diet,
    },
    headers: {
      "x-api-key": API_KEY,
    },
  };

  useEffect(() => {
    getRecipes();
  }, []);

  // 
  const getRecipes = async () => {
    try {
      if (diet === "none" ? (diet = "") : null);
      setLoading(true);
      const res = await axios.request(
        `https://api.spoonacular.com/recipes/complexSearch`,
        options
      );
      const { data } = res;
      setResponse(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="recipes">
      <Banner />
      <h3>Enter your favorite ingredient and get ideas for your next dishes</h3>
      <form
        onSubmit={(e) => {
          getRecipes();
          e.preventDefault();
          e.stopPropagation();
        }}
        className="recipes-form"
      >
        <input
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          placeholder="Enter a recipe"
          onChange={(e) => {
            setKeyword(e.target.value);
            setResponse(null);
          }}
        />

        <div className="select">
          <label>Diet</label>
          <select
            onChange={(e) => setDiet(e.target.value)}
            className="form-select"
            aria-label="Default select example mb-3"
          >
            {[
              "none",
              "Ketogenic",
              "Gluten free",
              "pescetarian",
              "vegetarian",
              "ovo vegetarian",
              "vegan",
            ].map((diet) => {
              return (
                <option  value={diet}>
                  {diet}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit" className="button-4">
          {" "}
          Search{" "}
        </button>
      </form>

      {response && ( // Render only if response is not null
        <div>
          <div className="row row-cols-3 row-cols-md-3 g-4">
            {response.map((recipe) => (
              <div key={recipe.id}>
                <div className="col" key={recipe.id}>
                  <Link to={`/recipes/${recipe.id}`}>
                    <div className="polaroid">
                      <img className="polaroid-img" src={recipe.image}></img>
                      <div className="container recipes">
                        <h3>{recipe.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
