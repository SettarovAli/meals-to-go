import React, { useContext } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SettingsButton } from "../components/settings.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = () => {
  const { onLogout, setError } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Spacer size="large">
        <SettingsButton
          icon="exit-to-app"
          mode="contained"
          onPress={() => {
            onLogout();
            setError(null);
          }}
        >
          Logout
        </SettingsButton>
      </Spacer>
    </SafeArea>
  );
};
