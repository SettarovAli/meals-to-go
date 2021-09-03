import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../../features/restaurants/components/restaurant-info-card.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites, isLoading } = useContext(FavouritesContext);

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue800} />
        </LoadingContainer>
      )}
      <FavouritesList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
