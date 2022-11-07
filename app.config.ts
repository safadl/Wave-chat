import { ExpoConfig } from '@expo/config-types';

// In SDK 47 and higher, use the following import instead:
// import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'my-app',
  slug: "wave-chat",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    "image": "./assets/fox-hello.png",
    "resizeMode": "contain",
    "backgroundColor": "#20232B"
  
  },
  
  
};

export default config;