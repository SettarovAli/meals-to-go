import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Adress,
  Info,
  Rating,
  Icon,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://istanbulonfood.com/wp-content/uploads/2021/06/ajia-restaurant2.jpeg",
    ],
    adress = "100 some random street",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml key={i} xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && <Text variant="error">Closed temp.</Text>}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>

          <Adress>{adress}</Adress>
        </Info>
      </Card.Content>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
