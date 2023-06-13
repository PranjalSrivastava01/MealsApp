import React, { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text,ScrollView, View ,Image,TextStyle ,Button} from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavouritesContextProvider, FavouritesContext } from '../store/context/favorites-context';


function MealDetailScreen  ({route,navigation}){
  const favouriteMealCtx=useContext(FavouritesContext);
  const mealId=route.params.mealId;
  const selectMeal=MEALS.find((meal)=>meal.id===mealId);
  const mealIsFavourite=favouriteMealCtx.ids.includes(mealId);
  function headerButtonPressHandler(){
  if(mealIsFavourite)
  {
    favouriteMealCtx.removeFavourites(mealId);
  }
  else
  {
    favouriteMealCtx.addFavorite(mealId);
  }
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return <IconButton  title='hello' icon={mealIsFavourite? 'star':'staro'} color={'white'} onPress={headerButtonPressHandler}/>
      }
    })
  },[navigation,headerButtonPressHandler]);

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