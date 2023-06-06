import { UserCircle } from "phosphor-react-native";

import { Text, View } from "react-native";
import colors from 'tailwindcss/colors';
import { Button } from "../components/Button";
import { Profile } from "../types/Profile";



interface FriendListProps{
  profile: Profile;
  handleFollowAction: (profileId:string) => void;
  buttonDisabled: boolean;
}


export function FriendList({profile , handleFollowAction , buttonDisabled}:FriendListProps){
  return (
    <View className="m-2 border-b border-slate-400  ">

      <View className="flex-row items-center  ">
        <UserCircle color={colors.white} weight="thin" size={28} />
        <Text className="text-zinc-400 font-bold text-sm ml-2">{profile.name}</Text>
      </View>
      <Text className="text-zinc-600 mb-2 font-sans text-xs mt-2">{profile.following.length > 0 && `${profile.following.length} Seguidores`}</Text>
      <Text className="text-zinc-600 font-sans text-xs">{profile.followers.length > 0 && `${profile.followers.length} Seguindo`}</Text>
      <Button 
      title="Seguir"
       className="text-black w-2 mt-4  mb-5" 
       onPress={() => handleFollowAction(profile._id)}
       disabled={buttonDisabled}
       />
    </View>

  )
}