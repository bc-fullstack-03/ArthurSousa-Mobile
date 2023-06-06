import { UserCircle } from "phosphor-react-native";
import { useContext, useState } from "react";
import { Text, View } from "react-native";
import colors from 'tailwindcss/colors';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Spacer } from "../components/Spacer";
import { Context as AuthContext } from "../hook/context/AuthContext";
export function CreatPost() {
  const { user } = useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [descripion, setDescripion] = useState('')

  return (
    <View className="flex-1 pt-3 ">

      <View className='border-b border-zinc-500 pb-2 flex-row ga-2 items-center'>
        <UserCircle size={48} weight="thin" color={colors.gray[400]} />
        <Text className='text-zinc-200 font-bold text-sm'> {user}</Text>
      </View>

      <Spacer>
        <Input.Root >
          <Input.Input
            value={title}
            onChangeText={setTitle}
            placeholder="Qual é título?"
          />


        </Input.Root>
          <Spacer />
        <Input.Root>
          <Input.Input
            value={descripion}
            onChangeText={setDescripion}
            placeholder="Qual é a descrição do post?"
          />
        </Input.Root>
        <Spacer />

        <Button
          title="Postar"
          onPress={() => {

          }}
        />
      </Spacer>

    </View>

  )
}