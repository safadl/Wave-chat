// import React from 'react';
// import {
//   createNativeStackNavigator,
//   NativeStackNavigationOptions,
// } from '@react-navigation/native-stack';

// import { SessionDetail } from '../../screens/SessionDetailScreen';
// import { SessionScreen } from '../../screens/HomeScreen';
// import { AppStackRoutes } from './routes';

// const AppStack = createNativeStackNavigator();

// const screenOptions: NativeStackNavigationOptions = {
//   headerStyle: {
//     backgroundColor: 'rgb(0,163,224)',
//   },
//   headerTintColor: '#fff',
//   headerTitleAlign: 'center',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//     color: '#FFF',
//   },
//   contentStyle: { backgroundColor: 'white' },
// };

// export const AppStackNavigator = () => (
//   <AppStack.Navigator initialRouteName={AppStackRoutes.Sessions}>
//     <AppStack.Screen
//       name={AppStackRoutes.Sessions}
//       component={SessionScreen}
//       options={{ ...screenOptions, title: 'Sessions' }}
//     />
//     <AppStack.Screen
//       name={AppStackRoutes.SessionDetail}
//       component={SessionDetail}
//       options={{ ...screenOptions, title: null }}
//     />
//   </AppStack.Navigator>
// );
