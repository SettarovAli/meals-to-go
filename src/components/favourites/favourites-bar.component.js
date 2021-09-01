import React, { useContext } from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouritesWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 5px 20px;
  margin-bottom: 10px;
`;

export const FavouritesBar = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="bottom" size="medium">
        <Text variant="title">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <TouchableOpacity
              key={key}
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: restaurant,
                })
              }
            >
              <Spacer position="right" size="medium">
                <CompactRestaurantInfo restaurant={restaurant} />
              </Spacer>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
