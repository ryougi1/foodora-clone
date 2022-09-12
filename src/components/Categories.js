import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard
        imgUrl="https://picsum.photos/200"
        title="Test 1"
      ></CategoryCard>
      <CategoryCard
        imgUrl="https://picsum.photos/200"
        title="Test 2"
      ></CategoryCard>
      <CategoryCard
        imgUrl="https://picsum.photos/200"
        title="Test 3"
      ></CategoryCard>
      <CategoryCard
        imgUrl="https://picsum.photos/200"
        title="Test 3"
      ></CategoryCard>
      <CategoryCard
        imgUrl="https://picsum.photos/200"
        title="Test 3"
      ></CategoryCard>
      <CategoryCard
        imgUrl="https://picsum.photos/200"
        title="Test 3"
      ></CategoryCard>
    </ScrollView>
  );
};

export default Categories;
