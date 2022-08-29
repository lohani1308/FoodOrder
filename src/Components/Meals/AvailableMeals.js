import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

   const AvailableMeals=()=>{

    const [smeals,setMeals]=useState([]);
    const [isLoading,setIsloading]=useState(true);

    useEffect(()=>{
      axios.get("https://food-order-app-83f61-default-rtdb.firebaseio.com/meals.json").then((res)=>{
        const loadMeals=[];
        const responseData=res.data;

        for(const key in responseData){
          loadMeals.push({
            id:key,
            name:responseData[key].name,
            description:responseData[key].description,
            price:responseData[key].price,
          });
        }
        setMeals(loadMeals);
        setIsloading(false);
      }).catch((err)=>{
        console.log("Error.......!!!!!!")
      })
    },[]);

    //console.log(smeals);

    if(isLoading){
        return(
          <section className={classes.MealsLoading}>
            <p>Loading....!</p>
          </section>
        )
    }


    const mealslist=smeals.map((meal)=>(
        <MealItem 
            key={meal.id} 
            id={meal.id}
            name={meal.name} 
            description={meal.description} 
            price={meal.price}
        />)
    );

    return(
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealslist}
            </ul>
            </Card>
        </section>
    )
  }

  export default AvailableMeals;