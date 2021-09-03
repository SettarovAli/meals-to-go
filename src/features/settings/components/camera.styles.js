import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";

export const ProfileCamera = styled(Camera)`
  height: 100%;
  width: 100%;
`;

export const CameraButtonsContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 25px;
  right: 50%;
  z-index: 9;
  transform: translateX(80px);
`;

export const CameraButton = styled(TouchableOpacity)`
  padding: 20px;
`;
