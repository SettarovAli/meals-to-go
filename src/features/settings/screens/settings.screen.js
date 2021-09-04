import React, { useContext, useState } from "react";
import { List, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SettingsContainer,
  SettingsItem,
  AvatarContainer,
} from "../components/settings.styles";
import { colors } from "../../../infrastructure/theme/colors";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);

  const { onLogout, user } = useContext(AuthenticationContext);

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`@photo-${user.uid}`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture();
  });

  return (
    <SettingsContainer>
      <AvatarContainer>
        {!photo && (
          <Avatar.Icon
            size={120}
            icon="human"
            backgroundColor={colors.brand.primary}
          />
        )}
        {photo && <Avatar.Image source={{ uri: photo }} size={120} />}
        <Spacer position="top" size="large">
          <Text variant="label" center>
            {user.email}
          </Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => (
            <List.Icon {...props} color={colors.brand.primary} icon="heart" />
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Change photo"
          left={(props) => (
            <List.Icon {...props} color={colors.brand.primary} icon="camera" />
          )}
          onPress={() => navigation.navigate("Camera")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon
              {...props}
              color={colors.brand.primary}
              icon="exit-to-app"
            />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SettingsContainer>
  );
};
