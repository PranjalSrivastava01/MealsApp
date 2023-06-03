import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return data.map((datapoint)=>(
    <View style={styles.ListItem}>
        <Text style={styles.itemText} key={datapoint}>{datapoint}</Text>
    </View>
  ));
}

export default List

const styles = StyleSheet.create({
    ListItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'white'
    },
    itemText:{
        textAlign:'center'
    }
})