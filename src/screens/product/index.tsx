import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { PRODUCTS } from "../../constants/products.constants";
import { RootStackParamList } from "../../navigation/shop";
import IProduct from "../../types/IProduct.type";
import { styles } from "./styles";

type ProductProps = NativeStackScreenProps<RootStackParamList, "Product">;

const Product = ({ navigation, route }: ProductProps) => {
  const { productId } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product?.name}</Text>
      <Text style={styles.description}>{product?.description}</Text>
      <Text style={styles.price}>$ {product?.price?.toFixed(2)}</Text>
      <Text style={styles.weight}>Peso: {product?.weight}</Text>
    </View>
  );
};

export default Product;
