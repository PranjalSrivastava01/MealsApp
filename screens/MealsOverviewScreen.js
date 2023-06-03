import { StyleSheet,FlatList,Text, View } from 'react-native'
import React from 'react'
import {MEALS,CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useEffect } from 'react';
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
  
  function renderMealItem(itemData)
  {
  const item=itemData.item;

  const mealItemProps={
   id:item.id,
   title:item.title,
   imageurl:item.imageUrl,
   affordability:item.affordability,
   complexity:item.complexity,
   duration:item.duration,
   
  };
  return (
   <MealItem {...mealItemProps}></MealItem>
  )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16,
  }
})
