import { PencilSimple, UserCircle } from "phosphor-react-native";
import { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import colors from 'tailwindcss/colors';
import { Context as AuthContext } from '../hook/context/AuthContext';
export  function PostList({navigation}:any){
  const {user} = useContext(AuthContext)
  return(
    <SafeAreaView className='flex-1 pt-3  '>
     <View className='flex-row items-center gap-2 px-12 pb-12 border-b border-zinc-800'>
        <UserCircle color={colors.gray[400]} weight="thin" size={48}/>
        <Text className="text-zinc-400 font-bold text-sm">{user}</Text>
        <View className='flex-1'></View>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <PencilSimple color={colors.gray[400]} weight='thin' size={40}/>
        </TouchableOpacity>
     </View>

    </SafeAreaView>
  )
}