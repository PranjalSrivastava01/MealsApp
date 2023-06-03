import { StyleSheet, Text,ScrollView, View ,Image,TextStyle } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
function MealDetailScreen  ({route}){
  const mealId=route.params.mealId;
  const selectMeal=MEALS.find((meal)=>meal.id===mealId);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri:selectMeal.imageUrl}}/>
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetails
       affordability={selectMeal.affordability}
       duration={selectMeal.duration}
       complexity={selectMeal.complexity}
       textStyle={{color:'black'}}
       ></MealDetails>
       
       <SubTitle SubTitle={'Ingredients'}></SubTitle>
      <List data={selectMeal.ingredients}></List>
<SubTitle SubTitle={'Steps'}></SubTitle>
<List data={selectMeal.steps}></List>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image:{
    width:'100%',
    height:350,
},
title:{
  fontWeight:'bold',
  fontSize:20,
  padding:8,
  textAlign:'center'
},
rootContainer:{
  margin:0,
}
})