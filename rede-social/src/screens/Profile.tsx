import { UserCircle } from "phosphor-react-native";
import { SafeAreaView, Text, View } from "react-native";
import colors from 'tailwindcss/colors';
import { Button } from "../components/Button";
export function Profile(){

  return(
    <SafeAreaView className="flex-1 p-6  mt-10">
     
    <View className="flex-row items-center justify-between   pb-3 " >
    <UserCircle color={ colors.gray[400]} size={48} weight="thin" />
    <Text className="font-bold text-xs text-gray-500 mr-[150] ">Fulano</Text>
    <Button className="min-w-[100] " title="Sair" onPress={() =>{}}/>
    </View>


  </SafeAreaView>
  )
}