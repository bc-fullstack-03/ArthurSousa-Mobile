

import { PencilSimple, UserCircle } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from 'tailwindcss/colors';


interface HomerHeaderProps {
  navigation: any;
  user: string;
}
export  function HomerHeader({navigation, user}:HomerHeaderProps) {
  
    return (
      <View className='flex-row items-center gap-2  pb-12 border-b border-zinc-800'>
      <UserCircle color={colors.gray[400]} weight="thin" size={48}/>
      <Text className="text-zinc-400 font-bold text-sm">{user}</Text>
      <View className='flex-1'></View>
      <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
        <PencilSimple color={colors.gray[400]} weight='thin' size={40}/>
      </TouchableOpacity>
   </View>
    )
  }
