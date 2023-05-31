
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Loading } from './src/components/Loading';
import { Friends } from './src/screens/Friends';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Profile } from './src/screens/Profile';
import { SignUp } from './src/screens/SignUp';
import { THEME } from './src/theme';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const AppTheme ={
  ...DefaultTheme,
  dark: true,
  colors:{
    ...DefaultTheme.colors,
    background: THEME.COLORS.BACKGROUND_900
  }
}


export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular , Inter_600SemiBold, Inter_700Bold, Inter_900Black})  
  const isLoggedIn = false
  return (
  
      <>
        { fontsLoaded ? (
           <NavigationContainer theme={AppTheme}>
           {!isLoggedIn ?( <Stack.Navigator screenOptions={{headerShown: false, statusBarStyle:"dark"}}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SingUp" component={SignUp} />
            </Stack.Navigator>) : (
              <Tab.Navigator > 
                <Tab.Screen name="Home" component={Home} />          
                <Tab.Screen name="Friends" component={Friends} />          
                <Tab.Screen name="Profile" component={Profile} />          
              </Tab.Navigator>
            )}
          </NavigationContainer>
        ) : (
          <Loading/>
        ) }

      </>
   
  )
}

