import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPagePage from '../../../../../pages/screens/myPage';
const Stack = createNativeStackNavigator();
const MyPageStackNavigationUI = () => {
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="List" component={MyPagePage} />
    </Stack.Navigator>
  );
};
export default MyPageStackNavigationUI;
