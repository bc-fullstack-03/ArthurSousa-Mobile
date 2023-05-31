import { Text, View, ViewProps } from "react-native";

interface HeadingProps extends ViewProps {
  title: string;
  subtitle: string;

}



export function Heading({ title, subtitle, }: HeadingProps) {

  return (
    <View className="w-full p-8 ">
      <Text className="text-white font-black text-2xl text-center">{title}</Text>
      <Text className="text-gray-400 text-center mt-3 font-sans text-xs">{subtitle}</Text>
    </View>
  )
}