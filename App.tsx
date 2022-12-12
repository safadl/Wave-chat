import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigator } from './src/navigation/BottomNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {


  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
      
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        await SplashScreen.hideAsync();

      }
    }

    prepare();
  }, []);

 
  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <NavigationContainer>
     {/* <View onLayout={onLayoutRootView} > */}
   
    <BottomNavigator />

    {/* </View>  */}
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#20232B',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  appName:{
    color:'white',
    fontSize:50,
    letterSpacing:4
    
  
  }
});