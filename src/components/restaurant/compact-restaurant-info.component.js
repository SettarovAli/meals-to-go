import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  height: 120px;
  width: 120px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  height: 120px;
  width: 120px;
`;

const Item = styled.View`
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};
