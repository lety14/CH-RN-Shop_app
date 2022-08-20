import { useFonts } from "expo-font";

export default function useFontsLoaded() {
  const [loaded] = useFonts({
    "quicksand-bold": require("../../assets/fonts/Quicksand-Bold.ttf"),
    "quicksand-light": require("../../assets/fonts/Quicksand-Light.ttf"),
    "quicksand-medium": require("../../assets/fonts/Quicksand-Medium.ttf"),
    "quicksand-regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-semibold": require("../../assets/fonts/Quicksand-SemiBold.ttf"),
  });

  return loaded;
}
