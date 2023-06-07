import { UserCircle } from "phosphor-react-native";
import { useContext, useState } from "react";
import { Text, View } from "react-native";
import colors from 'tailwindcss/colors';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { PostImagePicker } from "../components/PostImagePicker";
import { Spacer } from "../components/Spacer";
import { Context as AuthContext } from "../hook/context/AuthContext";
import { Context as PostContext } from "../hook/context/PostContext";
import { ImageUri } from "../types/image";
export function CreatPost() {
  const { user } = useContext(AuthContext)
  const { createPost } = useContext(PostContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<ImageUri>()
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
            value={description}
            onChangeText={setDescription}
            placeholder="Qual é a descrição do post?"
          />
        </Input.Root>
        <Spacer />
       
        <PostImagePicker onFileLoaded={setImage} />
         <Spacer/>
        <Button
          className='justify-center'
          title="Postar"
          onPress={() => {
              createPost({ title,  description, image})
          }}
        />
      
      </Spacer>

    </View>

  )
}