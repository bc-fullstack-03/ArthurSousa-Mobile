import { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { FriendList } from "../components/FriendList";
import { Context as AuthContext } from "../hook/context/AuthContext";
import { api } from "../lib/axios";



export function Friends() {
  const [friends, setFriends] = useState([])
  const { token, profile } = useContext(AuthContext)

  const Authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    }

  }
  useEffect(() => {

    async function getProfiles() {
      try {
        const { data } = await api.get('profiles', Authorization)
        setFriends(data)
      } catch (error) {

      }
    }

    getProfiles()
  }, [])

  console.log(friends);

  async function handleFollowAction(profileId: string) {
    try {
      await api.post(`profiles/${profileId}/follow`, null, Authorization)
      setFriends((profiles) => {

        const newProfiles = profiles.map((profile) => {
          if (profile._id === profileId) {
            !profile.followers.includes(profile) && profile.followers.push(profile)
          }
          return profile
        })
        return [...newProfiles]
      })
    } catch (error) {

    }
  }
  return (

    <SafeAreaView className="flex-1  mt-10">
      <FlatList
        data={friends}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item }) => (
          <FriendList profile={item}
            handleFollowAction={handleFollowAction}
            buttonDisabled={item.followers.includes(profile)}
          />
        )}


      />



    </SafeAreaView>
  )
}