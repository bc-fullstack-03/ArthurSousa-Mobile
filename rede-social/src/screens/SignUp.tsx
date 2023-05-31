
import { Text, TouchableOpacity } from "react-native";
import { AuthForm } from "../components/AuthForm";


export function SignUp( { navigation }:any){

  return(
    <>
    <AuthForm submitFormButtonText="cadastra" authSubFormTitle="Faça cadastro e começa usar!"/>

    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
      <Text className="text-zinc-700  text-center text-sm font-sans underline">
        Já possui conta? Entre agora!
      </Text>
    </TouchableOpacity>
  </>
  )
}