import { Pressable,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const IconButton = ({onPress,icon,color}) => {
  return (
    <View>
        <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
        <Text><AntDesign name ={icon} size={26} color={color}></AntDesign></Text>
        </Pressable>
    </View>
  )
}

export default IconButton

const styles = StyleSheet.create({
pressed:{
    opacity:0.7,
    padding:10
}
})