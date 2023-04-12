import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Recipes.css";
import { Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY

function RecipeDetails() {
  const [recipe, setRecipe] = useState([]);
  const [similar, setSimilar] = useState([]);

  let { id } = useParams();
  const options = {
    method: "GET",
    number:12,
    headers: {
      "x-api-key": API_KEY,
    },
  };

  useEffect(() => {
    fetchRecipe();
    fetchSimilar();
  }, [id]);

  useEffect(() => {}, [recipe]);
  // fecth recipe by id
  const fetchRecipe = async () => {
    const response = await axios.request(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`,
      options
    );
    setRecipe(response.data);
  };

  useEffect(() => {}, [similar]);

  // fetch similar recipes
  const fetchSimilar = async () => {
    const response2 = await axios.request(
      `https://api.spoonacular.com/recipes/${id}/similar`,
      options
    );
    setSimilar(response2.data);
  };
  console.log(similar);

  console.log(recipe);

  return (
    <div className="main">
      <div className="recipes-detail">
        <div key={recipe.id}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="recipe-header">
                  <h3>Recipe</h3>
                  <h1 className="f-title">{recipe.title}</h1>
                  <div>
                    <p>for {recipe.servings} servings</p>
                  </div>
                  <p>Ready in {recipe.readyInMinutes} minutes</p>
                </div>
              </div>
              <div className="col-lg-8">
                <img
                  className="recipe-img rounded img-fluid"
                  src={recipe.image}
                />
              </div>
            </div>
          </div>
          <div className="ingredients-container container">
            <h1 className="f-title">You will need</h1>
            <ul>
              {recipe.extendedIngredients?.map((recipe, index) => {
                return <li key={index}>{recipe.original}</li>;
              })}
            </ul>
          </div>
          <div className="recipe-instructions container">
            <h1 className="f-title">Directions</h1>
            <div className="test">{recipe.instructions} </div>
          </div>
        </div>

        <div className="">
          <h1>Explore Similar Options</h1>
          {similar && ( // Render only if response is not null
            <div>
              <div className="row row-cols-3 row-cols-md-3 g-4">
                {similar.map((recipe) => (
                  <div key={recipe.id}>
                    <div className="col">
                      <Link to={`/recipes/${recipe.id}`}>
                        <div className="polaroid">
                          <img
                            className="polaroid-img"
                            src={`https://spoonacular.com/recipeImages/${recipe.id}-90x90.${recipe.imageType}`}
                          ></img>
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
      </div>
    </div>
  );
}

export default RecipeDetails;
