import React, { memo, useCallback, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
// import Slider from '@react-native-community/slider';
// import { FlashList } from '@shopify/flash-list';

import { LoadingIcon } from '../../components/LoadingIcon/LoadingIcon';
import { LoadingState } from '../../components/types';

const CARD_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
 
});

export const HomeScreen = memo(() => {
//   const [sliderValue, setSliderValue] = useState(0);

//   const { sessionsList, loadingState } = useFetchSessions(sliderValue);

//   const renderSection = useCallback((item: any) => {
//     return <userItemCard item={item} />;
//   }, []);

//   const handleSliderChange = (value: number) => {
//     setSliderValue(Math.round(value));
//   };
  return  (
   
    <View style={{ flex: 1 }}>
      {/* <ScrollView>
        <View style={styles.container}>
          <FlashList
            data={sessionsList}
            renderItem={({ item }) => renderSection(item)}
            estimatedItemSize={20}
          />
        </View>
      </ScrollView>
      <View style={{ alignSelf: 'center', padding: 10 }}>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={20}
          minimumTrackTintColor="#fffff"
          maximumTrackTintColor="#000000"
          onSlidingComplete={handleSliderChange}
          value={sliderValue}
        />
      </View> */}
    </View>
  );
});
