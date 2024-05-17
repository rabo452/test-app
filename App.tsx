// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { HomeScreen } from './src/screens/HomeScreen';
import { ImageScreen } from './src/screens/ImageScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  ImageScreen: {
    imageSrc: string
  }
}


const Stack = createNativeStackNavigator<RootStackParams>();

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ImageScreen" component={ImageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;