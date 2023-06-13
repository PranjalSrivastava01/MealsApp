import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons'
import {FavouritesContextProvider }from './store/context/favorites-context';

const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle:{ backgroundColor:'#cb202d'},
        headerTintColor:'white',
      }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <IonIcons name="ios-fast-food" size={25} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
          title: 'Favorites',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <IonIcons name="heart" size={25} />
              </View>
            );
          },
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <FavouritesContextProvider>
<NavigationContainer>
        <Stack.Navigator screenOptions={{
            title:"Foodie Place",
            headerStyle:{ backgroundColor:'#cb202d'},
             headerTintColor:'white',
            cardStyle:{backgroundColor:'#f4f4f2'}
          }}>
          <Stack.Screen
           name="Drawer" 
           component={DrawerNavigator}
           options={{
            headerShown:false
           }}
          />
          <Stack.Screen
           name="MealsOverview"
           component={MealsOverviewScreen}
           options={({route,navigation})=>{
            const catId = route.params.title;
            return{
              title:catId,
            };
          }}
           />
           <Stack.Screen name="MealDetail" component={MealDetailScreen} 
          //  options={
          //   {headerRight:()=>{
          //     return <Button title='Spank me?'></Button>
          //   }}
          //  }
           />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouritesContextProvider>
      
      // <View>
      //   <CategoriesScreen></CategoriesScreen>
      // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



