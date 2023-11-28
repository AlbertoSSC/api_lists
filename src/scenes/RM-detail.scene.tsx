import React from "react";

import { CharDetailContainer } from "@/pods";
import { AppLayout, CenteredLayout } from "@/layout";

export const RmDetailCharacterScene: React.FC = () => {
  return (
    <CenteredLayout>
      <AppLayout>
        <CharDetailContainer />
      </AppLayout>
    </CenteredLayout>
  );
};
