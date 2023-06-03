import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AuthForm } from "../components/AuthForm";
import { Spacer } from "../components/Spacer";
import { Context as AuthContext } from "../hook/context/AuthContext";



export function Login({ navigation }: any) {
  const { login, erroMessage } = useContext(AuthContext)
  return (
    <>
      <AuthForm
        authSubFormTitle="Faça login e começe a usar!"
        submitFormButtonText="Entrar"
        submitFormButtonAction={login}
      />

      <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
        <Text className="text-zinc-700  text-center text-sm font-sans underline">
          Não possui conta? Crie uma agora!
        </Text>

      </TouchableOpacity>


      {erroMessage && (
        <Spacer>
          <Text className="text-red-600 text-center">{erroMessage}</Text>
        </Spacer>
      )}


    </>

  )
}