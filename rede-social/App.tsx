import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { House, User, UsersThree } from 'phosphor-react-native';
import React, { useContext, useEffect } from 'react';
import colors from 'tailwindcss/colors';
import { navigationRef } from './src/RootNavigation';
import { Loading } from './src/components/Loading';
import { Context as AuthContext, Provider as AuthProvider } from './src/hook/context/AuthContext';
import { Friends } from './src/screens/Friends';
import Home from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Profile } from './src/screens/Profile';
import { SignUp } from './src/screens/SignUp';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: colors.black
  }
};

function App() {
  const { token, tryLocalLogin, isLoading } = useContext(AuthContext);
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black });


  useEffect(() => {
    tryLocalLogin();
  }, []);


  if (!fontsLoaded || isLoading) {
    return <Loading />;
  }
  return (


    <NavigationContainer theme={AppTheme} ref={navigationRef}>
       
      {!token ? (
        <Stack.Navigator screenOptions={{ headerShown: false, statusBarStyle: 'dark' }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              switch (route.name) {
                case 'Home':
                  return <House size={size} color={color} />

                case 'Friends':
                  return <UsersThree size={size} color={color} />

                case 'Profile':
                  return <User size={size} color={color} />

                default:
                  return null
              }
            },
            tabBarStyle: {
              backgroundColor: colors.black,
            },
            tabBarLabelStyle: {
              color: 'white', // Defina a cor do texto como preto
            },
        
            tabBarShowLabel: false,
            headerShown: false,
         
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Friends" component={Friends} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>

      )}
    </NavigationContainer>

  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
