import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Meal.css'
const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;
    const navigate = useNavigate();
    const showMealDetail = () => {
        const path = `/meal/${idMeal}`;
        //or,const path='/meal/'+idMeal;
        navigate(path)
    }
    const addToOrder = (mealName) => {
        const path = `meal/orderlist/${mealName}`;
        navigate(path)
    }
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <Link to={'/meal/' + idMeal}>Show detail-link</Link>

            <button onClick={showMealDetail}>show detail-btn</button>
            <br />
            <button onClick={() => addToOrder(strMeal)} className='order'>Add to orderList</button>
        </div>
    );
};

export default Meal;