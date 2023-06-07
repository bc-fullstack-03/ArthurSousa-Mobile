import React from "react";
import { Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import loading from '../assets/loading.png';

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-black-900">
      <Animatable.Image
        animation="rotate"
        iterationCount="infinite"
        source={loading}
        className="w-28 h-28 "
      />
      <Text className="text-white animate-spin mt-5">LOADING...</Text>
    </View>
  );
}
