import { Root } from "./layout";

import { Provider as StudioStateProvier } from "./studio-state";
import { ColorSchemeProvider } from "@opencast/appkit";



type Props = {
  userHasWebcam: boolean;
};

export const App: React.FC<Props> = () => {
  return (
    <StudioStateProvier>
      <ColorSchemeProvider>
        <Root />
      </ColorSchemeProvider>
    </StudioStateProvier>
  );
};
