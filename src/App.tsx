import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator, ScrollViewBase, StatusBar } from "react-native";
import useFontsLoaded from "./hooks/useFontsLoaded";
import AppNavigator from "./navigation";
import Categories from "./screens/categories";

export default function App() {
  // const [loaded] = useFonts({
  //   "quicksand-bold": require("../assets/fonts/Quicksand-Bold.ttf"),
  //   "quicksand-light": require("../assets/fonts/Quicksand-Light.ttf"),
  //   "quicksand-medium": require("../assets/fonts/Quicksand-Medium.ttf"),
  //   "quicksand-regular": require("../assets/fonts/Quicksand-Regular.ttf"),
  //   "quicksand-semibold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
  // });

  const loaded = useFontsLoaded();

  if (!loaded) {
    return <ActivityIndicator size="large" color="#000" />;
  }
  return (
    <>
      <AppNavigator />
      <StatusBar hidden />
    </>
  );
}
