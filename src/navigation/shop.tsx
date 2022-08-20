import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ProductScreen, ProductsScreen } from "../screens";
import { colors } from "../constants/colors.constants";
import { isAndroid } from "../utils/platformValidator";

export type RootStackParamList = {
  Categories: undefined;
  Products: {
    categoryId: number;
    name: string;
  };
  Product: {
    productId: number;
    name: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: isAndroid ? colors.textLight : colors.text,
        headerTitleStyle: {
          fontFamily: "quicksand-bold",
        },
        headerTitleAlign: "center",
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ headerShown: false, title: "Categorias" }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
        })}
      />

      <Stack.Screen name="Product" component={ProductScreen} options={{ title: "Producto" }} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
