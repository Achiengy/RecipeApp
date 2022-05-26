import React, { useState, useCallback, useContext } from "react";
import "./HomePage.scss";
import { myContext } from "../context/context";
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="SEARCH HERE..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={fetchMealsHandler}>Search</button>
      </div>

      <div className="home-grid">
        {meals? (
          meals.map((meal) => (
            <div className="home-meal" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />
              <h4>{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>MEAL NOT FOUND!</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
