/*Example of RealM Database in React Native*/
import React from 'react';

import {View,Text } from 'react-native'

//Import react-navigation
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Import external files
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';





 const App=()=>{

  const Stack = createNativeStackNavigator();

  return(


    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterUser} />
      <Stack.Screen name="View" component={ViewUser} />
      <Stack.Screen name="ViewAll" component={ViewAllUser} />
      <Stack.Screen name="Delete" component={DeleteUser} />
      <Stack.Screen name="Update" component={UpdateUser} />
    </Stack.Navigator>
  </NavigationContainer>
    
  )



}

export default App


// const App = createStackNavigator({
//   HomeScreen: {
//     screen: HomeScreen,
//     navigationOptions: {
//       title: 'HomeScreen',
//       headerStyle: { backgroundColor: '#3a59b7' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   View: {
//     screen: ViewUser,
//     navigationOptions: {
//       title: 'View User',
//       headerStyle: { backgroundColor: '#3a59b7' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   ViewAll: {
//     screen: ViewAllUser,
//     navigationOptions: {
//       title: 'View All User',
//       headerStyle: { backgroundColor: '#3a59b7' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   Update: {
//     screen: UpdateUser,
//     navigationOptions: {
//       title: 'Update User',
//       headerStyle: { backgroundColor: '#3a59b7' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   Register: {
//     screen: RegisterUser,
//     navigationOptions: {
//       title: 'Register User',
//       headerStyle: { backgroundColor: '#3a59b7' },
//       headerTintColor: '#ffffff',
//     },
//   },
//   Delete: {
//     screen: DeleteUser,
//     navigationOptions: {
//       title: 'Delete User',
//       headerStyle: { backgroundColor: '#3a59b7' },
//       headerTintColor: '#ffffff',
//     },
//   },
// });
// export default createAppContainer(App);