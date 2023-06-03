import { useContext } from 'react';
import { Text, TouchableOpacity } from "react-native";
import { AuthForm } from "../components/AuthForm";
import { Spacer } from '../components/Spacer';
import { Context as AuthContext } from "../hook/context/AuthContext";


export function SignUp( { navigation }:any){
const {register , erroMessage}  = useContext(AuthContext)
  return(
    <>
    <AuthForm 
    submitFormButtonText="Cadastrar" 
    authSubFormTitle="Faça cadastro e começa usar!"
    submitFormButtonAction={register}

    />

    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
      <Text className="text-zinc-700  text-center text-sm font-sans underline">
        Já possui conta? Entre agora!
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