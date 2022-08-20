import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";
import { isAndroid } from "../../utils/platformValidator";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 180,
  },
  containerTouchable: {
    flex: 1,
    backgroundColor: isAndroid ? colors.secondary : colors.primary,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: "quicksand-semibold",
    color: colors.text,
    textAlign: "center",
  },
});
