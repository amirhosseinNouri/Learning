import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import ColorPalette from './screens/color-palette';
import { registerRootComponent } from 'expo';
import Stack from './service/stack-navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
