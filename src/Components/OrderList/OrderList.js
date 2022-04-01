import React from 'react';
import { useParams } from 'react-router-dom';

const OrderList = () => {
    const { mealName } = useParams()
    return (
        <div>
            <h1>This is the food you have ordered</h1>
            <h2>{mealName}</h2>
        </div>
    );
};

export default OrderList;