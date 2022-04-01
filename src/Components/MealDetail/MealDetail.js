import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))

    }, [])
    return (
        <div>
            <h1>This is the detail of meal: {mealId} </h1>
            <img height={400} width={300} src={meal.strMealThumb} alt="" />
            <h2>Name: {meal.strMeal}</h2>
            <p>origin: {meal.strArea}</p>
            <p>{meal.strInstructions?.slice(0, 400)}</p>
        </div>
    );
};

export default MealDetail;