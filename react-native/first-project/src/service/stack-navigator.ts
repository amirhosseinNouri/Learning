import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ColorPalette: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default Stack;
