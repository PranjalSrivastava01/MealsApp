import { StyleSheet, Text, View ,textStyle} from 'react-native'
import React from 'react'

const MealDetails = ({duration,complexity,affordability,style,textStyle}) => {
  return (
    <View style={[styles.details,style]}>
    <Text style={[styles.detailsItem,textStyle]}>{duration} minutes</Text>
    <Text style={[styles.detailsItem,textStyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailsItem,textStyle]}>{affordability.toUpperCase()}</Text>
   </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({

    details:
{
flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 padding:8,
 
},
detailsItem:
{
paddingHorizontal:8
},
})