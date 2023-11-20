"use client";

import {useState, useEffect} from "react";

async function fetchMealIdea(ingredient) {
    console.log(ingredient);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;

}

export default function MealIdea({ingredient}) {
    const [mealIdea, setMealIdea] = useState([]);

    async function loadMeals() {
        try{
            if (ingredient === "") {
                setMealIdea([]);
                return;
            }
            const data = await fetchMealIdea(ingredient);
            if (data !== null) {
                setMealIdea(data);
            } else {
                setMealIdea([]);
            }

            } catch (error) {
                console.log(error);
            }
        }

        useEffect(() => {
            loadMeals();
        }, [ingredient]);

        const displayText = ingredient === "" ? "Please enter an ingredient" : `Meal Idea for ${ingredient}`;

        if(meal.Idea.length === 0 && ingredient !== "") {
            return (
                <div>
                    <h2 className="text-2xl font-bold m-2 text-blue-200">Meal Idea for{ingredient}</h2>
                    <p>
                        {displayText}No meal ideas found for {ingrendient}
                    </p>
                </div>
            );
        }

        return (
            <div>
                <h2 className="text-2xl font-bold m-2 text-blue-200">Meal Idea for {ingredient}</h2>
                <ul>
                    {mealIdea.map((meal) => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))}
                </ul>
            </div>
        );
}