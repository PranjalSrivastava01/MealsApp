import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MealsList from '../components/MealsList/MealsList'
import { useContext } from 'react'
import { FavouritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
const FavoritesScreen = () => {
  const favouriteMealCtx=useContext(FavouritesContext);
  const favoriteMeals=MEALS.filter(meal=>favouriteMealCtx.ids.includes(meal.id))
  return (
     <MealsList items={favoriteMeals}></MealsList>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({})