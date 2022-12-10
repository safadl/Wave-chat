import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppStackRoutes } from './routes';

export type AppScreenParamList = {
  [AppStackRoutes.SessionDetail]: { customRef?: string };
  [AppStackRoutes.Sessions]: { customRef?: string };
};

export type AppScreenNavigationProp = NativeStackNavigationProp<AppScreenParamList>;
