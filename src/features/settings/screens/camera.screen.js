import React, { useState, useEffect, useRef, useContext } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  CameraButton,
  CameraButtonsContainer,
  ProfileCamera,
} from "../components/camera.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  const { user } = useContext(AuthenticationContext);

  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (Camera) {
      let photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`@photo-${user.uid}`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <ProfileCamera type={type} ref={(camera) => (cameraRef.current = camera)}>
      <CameraButtonsContainer>
        <CameraButton
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <FontAwesome name="rotate-left" size={40} color="white" />
        </CameraButton>
        <CameraButton onPress={snap}>
          <FontAwesome name="camera" size={40} color="white" />
        </CameraButton>
      </CameraButtonsContainer>
    </ProfileCamera>
  );
};
