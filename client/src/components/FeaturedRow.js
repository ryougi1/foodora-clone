import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={1}
          imgUrl="https://picsum.photos/200"
          title="Miso Miso"
          rating={4.5}
          genre="Japanese"
          address="Gustav Adolfs torg 45"
          short_description="Vällagad mat med autentiska smaker!"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://picsum.photos/200"
          title="Miso Miso"
          rating={4.5}
          genre="Japanese"
          address="Gustav Adolfs torg 45"
          short_description="Vällagad mat med autentiska smaker!"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://picsum.photos/200"
          title="Miso Miso"
          rating={4.5}
          genre="Japanese"
          address="Gustav Adolfs torg 45"
          short_description="Vällagad mat med autentiska smaker!"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
