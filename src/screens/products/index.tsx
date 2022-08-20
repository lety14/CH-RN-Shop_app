import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import { ProductItem } from "../../components";
import { PRODUCTS } from "../../constants/products.constants";
import { RootStackParamList } from "../../navigation/shop";
import IProduct from "../../types/IProduct.type";
import { styles } from "./styles";

type ProductsProps = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ navigation, route }: ProductsProps) => {
  const { categoryId } = route.params;

  const productCategory: IProduct[] = PRODUCTS.filter((product) => product.category === categoryId);

  const renderItem = ({ item }: { item: IProduct }): JSX.Element => (
    <ProductItem
      item={item}
      onSelected={() => {
        navigation.navigate("Product", {
          productId: item.id,
          name: item.name,
        });
      }}
    />
  );
  const keyExtractor = (product: IProduct, index: number) => product.id.toString();

  return <FlatList data={productCategory} renderItem={renderItem} keyExtractor={keyExtractor} />;
};

export default Products;
