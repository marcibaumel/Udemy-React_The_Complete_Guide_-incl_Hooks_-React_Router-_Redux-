import {useEffect, useState} from "react";
import React from 'react'
import classes from './AvailableMeals.module.css'
import {Card} from '../UI/Card';
import {MealItem} from './MealItem/MealItem';

//process.env.REACT_APP_FIREBASE_URL


export const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {

            const response = await fetch(process.env.REACT_APP_FIREBASE_URL);
            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals();
    }, []);

    if(isLoading){
        return (
        <section className={classes.MealsLoading}>
            <p> Loading...</p>
        </section>
        )
    }
    const mealList = meals.map((meal) =>
        <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
    );

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )
}