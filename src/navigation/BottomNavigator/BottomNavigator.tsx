

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { HomeScreen } from '../../screens/HomeScreen';

const Tab = createBottomTabNavigator();

// import React from 'react';
//   import {
//     Alert,
//     Animated,
//     StyleSheet,
//     TouchableOpacity,
//     View,
//   } from 'react-native';
//   import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
//   import Ionicons from 'react-native-vector-icons/Ionicons';
//   import { NavigationContainer } from '@react-navigation/native';
// import { HomeScreen } from '../../screens/HomeScreen';
  
  export const BottomNavigator = () => {
  // const _renderIcon = (routeName: string, selectedTab: string) => {
  //   let icon = '';

  //   switch (routeName) {
  //     case 'Home':
  //       icon = 'ios-home-outline';
  //       break;
  //     case 'title2':
  //       icon = 'settings-outline';
  //       break;
  //   }

  //   return (
  //     <Ionicons
  //       name={icon}
  //       size={25}
  //       color={routeName === selectedTab ? 'black' : 'gray'}
  //     />
  //   );
  // };

  // const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => navigate(routeName)}
  //       style={{
  //         flex: 1,
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}>
  //       {_renderIcon(routeName, selectedTab)}
  //     </TouchableOpacity>
  //   );
  // };
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )}
//     <CurvedBottomBar.Navigator
//             style={styles.bottomBar}
//             strokeWidth={0.5}
//             strokeColor="#DDDDDD"
//             height={55}
//             circleWidth={55}
//             bgColor="white"
//             initialRouteName="home"
//             borderTopLeftRight
//             screenOptions={{headerShown:false}}
//             renderCircle={({ selectedTab, navigate }) => (
//               <Animated.View style={styles.btnCircle}>
//                 <TouchableOpacity
//                   style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                   }}
//                   onPress={() => Alert.alert('Click Action')}>
//                   <Ionicons name={'apps-sharp'} color="gray" size={25} />
//                 </TouchableOpacity>
//               </Animated.View>
//             )}
//             tabBar={renderTabBar}>
//             <CurvedBottomBar.Screen
//               name="Home"
//               position="LEFT"
//               component={HomeScreen}
//             />
//             <CurvedBottomBar.Screen
//               name="title2"
//               component={HomeScreen}
//               position="RIGHT"
//             />
//           </CurvedBottomBar.Navigator>
//   );
// }

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   button: {
//     marginVertical: 5,
//   },
//   bottomBar: {},
//   btnCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 0.5,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 1,
//     bottom: 30,
//   },
//   imgCircle: {
//     width: 30,
//     height: 30,
//     tintColor: 'gray',
//   },
//   img: {
//     width: 30,
//     height: 30,
//   },
// });
