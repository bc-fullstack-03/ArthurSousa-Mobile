import { UserCircle } from "phosphor-react-native";
import { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import colors from 'tailwindcss/colors';
import { Button } from "../components/Button";
import { Context as AuthContext } from "../hook/context/AuthContext";


export function Profile(){

  const {user , logout} = useContext(AuthContext)
  return(
    <SafeAreaView className="flex-1  p-6 ">
     
    <View className="flex-row gap-2 items-center pb-3 " >
    <UserCircle color={ colors.gray[400]} size={48} weight="thin" />
    <Text className="font-bold text-xs text-gray-300 ">{user}</Text>
    <View className='flex-1'></View>
    <Button className="min-w-[100] fixed " title="Sair" onPress={logout}/>
    </View>


  </SafeAreaView>
  )
}