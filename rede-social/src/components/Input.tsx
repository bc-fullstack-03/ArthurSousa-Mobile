import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import colors from "tailwindcss/colors";
export type textInputRoot = {
  children: ReactNode;
}
function TextInputRoot(props: textInputRoot) {

  return (
    <View className="items-center max-w-full min-w-[240px] p-3  rounded flex-row bg-zinc-800">
      {props.children}
    </View>
  )
}


interface TextInputInputProps extends TextInputProps { }

function TextInputInput(props: TextInputInputProps) {

  return (
    <TextInput 
    className='flex text-sm ml-2 text-gray-100'
    placeholderTextColor={colors.gray[400]}
    {...props}
  />
  )

}

interface TextInputInconProps {
  children: ReactNode;
}

function TextInputIncon({ children }: TextInputInconProps) {

  return (
    <>
      {children}
    </>
  )
}


export const Input = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Incon: TextInputIncon
}