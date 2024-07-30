import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  MD3DarkTheme as PaperMD3DarkTheme,
  MD3LightTheme as PaperMD3LightTheme,
} from "react-native-paper";

const SSEChatDarkTheme = {
  ...PaperMD3DarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperMD3DarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const SSEChatLightTheme = {
  ...PaperMD3LightTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperMD3LightTheme.colors,
    ...NavigationDarkTheme.colors,
  },
  version: 3,
};

export { SSEChatDarkTheme, SSEChatLightTheme };
