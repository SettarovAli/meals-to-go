import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const SettingsButton = styled(Button).attrs({
  color: colors.ui.error,
})`
  padding: ${(props) => props.theme.space[2]};
`;
