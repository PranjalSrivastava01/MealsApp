import { StyleSheet, Text,Pressable,Image, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MealDetailScreen from '../screens/MealDetailScreen'
import MealDetails from './MealDetails'
const MealItem = ({id,title,imageurl, duration, complexity, affordability}) => {
  const navigation=useNavigation();
  function selectMealItemHandler()
  {
    navigation.navigate('MealDetail',{
      mealId:id,
    })
  }
    return (
    <View style={styles.mealItem}> 
    <Pressable onPress={selectMealItemHandler} android_ripple={{color:'#ccc'}}  style={({pressed})=>
    pressed? styles.buttonPressed:null}>
    <View>
        <Image source={{uri:imageurl}} style={styles.image} /> 
        <Text style={styles.title}>{title}</Text>  
       </View>
       <MealDetails affordability={affordability} duration={duration} complexity={complexity}></MealDetails>
    </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
mealItem:{
margin:16,
borderRadius:8,
overflow:'hidden',
backgroundColor:'white',
elevation:4,
shadowColor:'black',
shadowOpacity:0.24,
shadowOffset:{width:0,height:2},
},
buttonPressed:{
    opacity:0.75,
        },
image:{
    width:'100%',
    height:200,
    padding:10,
    margin:10,
},
title:{
fontWeight:'bold',
textAlign:'center',
fontSize:18,
}
})