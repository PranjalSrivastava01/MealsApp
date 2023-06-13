import { StyleSheet,FlatList,Text, View } from 'react-native'
import React from 'react'
import {MEALS,CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';
const MealsOverviewScreen = ({route,navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(()=>{
    const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title;
    navigation.setOptions({
    title:categoryTitle
    },[catId,navigation]);
  })
  
   return <MealsList items={displayedMeals}></MealsList>
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16,
  }
})
