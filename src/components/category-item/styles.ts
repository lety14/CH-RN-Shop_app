import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 15,
    height: 170,
  },
  containerTouchable: {
    flex: 1,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 10,
    elevation: 3,
    justifyContent: "center",
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: "quicksand-semibold",
    color: colors.text,
    textAlign: "center",
  },
});
