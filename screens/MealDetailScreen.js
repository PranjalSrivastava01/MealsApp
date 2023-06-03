import { StyleSheet, Text,ScrollView, View ,Image,TextStyle } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
function MealDetailScreen  ({route}){
  const mealId=route.params.mealId;
  const selectMeal=MEALS.find((meal)=>meal.id===mealId);
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri:selectMeal.imageUrl}}/>
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetails
       affordability={selectMeal.affordability}
       duration={selectMeal.duration}
       complexity={selectMeal.complexity}
       textStyle={{color:'black'}}
       ></MealDetails>
       
      <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>Ingredients</Text>
      </View>
      
     {selectMeal.ingredients.map((ingriedient)=>(
      <Text key={ingriedient}>----{ingriedient}</Text>
     ))}

    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>Steps</Text>
      </View>
      {selectMeal.steps.map((step)=>(
      <Text key={step}>---{step}</Text>
     ))}
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
subTitle:{
  fontSize:18,
  fontWeight:400,
  textAlign:'center'
},
subTitleContainer:{
  padding:6,
  borderBottomColor:'#bebebe',
  borderBottomWidth:1,
  marginHorizontal:24,
  marginVertical:2,
}
})