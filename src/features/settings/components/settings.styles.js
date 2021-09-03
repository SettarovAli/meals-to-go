import styled from "styled-components/native";
import { List } from "react-native-paper";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsContainer = styled.View`
  flex: 1;
  padding: 15px;
  background-color: white;
`;
