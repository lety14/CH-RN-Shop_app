import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IProduct from "../../types/IProduct.type";
import { styles } from "./styles";

type ProductItemProps = {
  item: IProduct;
  onSelected: () => void;
};

const ProductItem = ({ item, onSelected }: ProductItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.containerTouchable }} onPress={onSelected}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
