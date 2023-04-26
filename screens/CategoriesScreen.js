import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
function renderCategoryItem(itemData){
return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}>
</CategoryGridTile>
}
const CategoriesScreen = () => {
  return (
   <FlatList data={CATEGORIES}
    keyExtractor={(item)=>item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
    ></FlatList>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})

import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CatergoriesScreen = () => {
  const renderCategoryItem = (itemData) => {
    return <CategoryGridTitle title = {itemData.item.title} color = {itemData.item.color}/>;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CatergoriesScreen;

const styles = StyleSheet.create({});