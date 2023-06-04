import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CreatPost } from './CreatPost';
import { PostList } from './PostList';

const Stack = createNativeStackNavigator()



export  function Home() {

  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
      statusBarStyle:'dark',
     }
    }
    >
      <Stack.Screen name='PostList'component={PostList} />
      <Stack.Screen  name='CreatePost'component={CreatPost}/>

     
    </Stack.Navigator>
  );
}

