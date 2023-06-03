
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
const Stack=createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            title:"Foodie Place",
            headerStyle:{ backgroundColor:'#cb202d'},
             headerTintColor:'white',
            cardStyle:{backgroundColor:'#f4f4f2'}
          }}>
          <Stack.Screen
           name="MealsCategories" 
           component={CategoriesScreen}
           options={{
            title:'All food Category'
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
           <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>

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


// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }