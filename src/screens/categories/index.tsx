import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import CategoryItem from "../../components/category-item";
import { CATEGORIES } from "../../constants/categories.constants";
import { RootStackParamList } from "../../navigation/shop";
import ICategory from "../../types/ICategory.type";
import { styles } from "./styles";

type CategoriesProps = NativeStackScreenProps<RootStackParamList, "Categories">;

const Categories = ({ navigation }: CategoriesProps) => {
  const renderItem = ({ item }: { item: ICategory }): JSX.Element => (
    <CategoryItem
      item={item}
      onSelected={() => navigation.navigate("Products", { categoryId: item.id, name: item.name })}
    />
  );
  const keyExtractor = (item: ICategory, index: number) => item.id.toString();

  return <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={keyExtractor} />;
};

export default Categories;
