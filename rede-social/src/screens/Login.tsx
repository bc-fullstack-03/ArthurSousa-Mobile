
import { Text, TouchableOpacity } from "react-native";
import { AuthForm } from "../components/AuthForm";



export function Login({ navigation }: any) {

  return (
    <>
      <AuthForm submitFormButtonText="Entra"  authSubFormTitle="Faça login e começe a usar!"/>

      <TouchableOpacity onPress={() => { navigation.navigate('SingUp') }}>
        <Text className="text-zinc-700  text-center text-sm font-sans underline">
          Não possui conta? Crie uma agora!
        </Text>
      </TouchableOpacity>
    </>

  )
}