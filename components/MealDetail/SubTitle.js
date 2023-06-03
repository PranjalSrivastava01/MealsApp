import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubTitle = ({SubTitle}) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{SubTitle}</Text>
      </View>
  )
}

export default SubTitle

const styles = StyleSheet.create({
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