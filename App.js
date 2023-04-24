import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from './src/context/AuthContext';
import Root from './src/stacks';

export default function App() {
  return (
      <AuthContextProvider>
        <NavigationContainer>
          <Root/>
        </NavigationContainer>
      </AuthContextProvider>
  );
}


