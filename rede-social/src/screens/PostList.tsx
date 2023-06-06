import { useContext, useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { HomerHeader } from "../components/HomerHeader";
import { PostItem } from "../components/PostItem";
import { Context as AuthContext } from '../hook/context/AuthContext';
import { Context as PostContext } from '../hook/context/PostContext';


export  function PostList({navigation}:any){
  const {user} = useContext(AuthContext)
  const {posts, getPosts} = useContext(PostContext)

  useEffect(() => {
    getPosts()
  } , [])

  return(
    <SafeAreaView className=' flex-1'>
      <HomerHeader navigation={navigation}  user={user}/>

      <View className='flex-1'>
        <FlatList
          data={posts}
          keyExtractor={({_id}) => _id}
          renderItem={({item}) => (
              <PostItem post={item}/>
            )}      
 
        />
      </View>

    </SafeAreaView>
  )
}