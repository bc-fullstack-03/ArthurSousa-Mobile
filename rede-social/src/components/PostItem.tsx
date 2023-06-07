import { Chat, Heart, Trash, UserCircle } from 'phosphor-react-native'
import { useContext, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { Context as AuthContext } from '../hook/context/AuthContext'
import { Context as PostContext } from '../hook/context/PostContext'
import { Post } from '../types/Post'
import { Spacer } from './Spacer'

interface PostItemProps {
  post: Post
}

export function PostItem({ post }: PostItemProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const { profile } = useContext(AuthContext)
  const { likesPost, unLikePost, deletePost } = useContext(PostContext)

  function handleLike() {
    if (post.likes.includes(profile)) {
      unLikePost({ postId: post._id })
    } else {
      likesPost({ postId: post._id })
    }
  }

  async function handleDelete() {
    try {
      setIsDeleting(true);
      const result = await deletePost({ postId: post._id });
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  }

  console.log(post.description);
  
  return (
    <View className="border-b border-gray-400">
      <View className="flex-row gap-2 mt-3 items-center">
        <UserCircle color={colors.gray[500]} weight="thin" />
        <Text className="text-zinc-200 text-xs font-bold">{post.profile.name}</Text>
      </View>

      <Spacer>
        <Text className="text-white text-sm mt-3 font-bold">{post.title}</Text>
        {post.image ? (
          <Image source={{ uri: post.description }} className="mt-3 object-cover container h-60 rounded-xl" />
        ) : (
          <Text className="text-white text-sm mt-3 font-sans">{post.description}</Text>
        )}
      </Spacer>

      <View className="flex-row gap-2 items-center font-sans mb-3" >
        {post.comments.length > 0 ? (
          <Chat size={24} color={colors.cyan[400]} weight="fill" />
        ) : (
          <Chat size={24} color={colors.gray[300]} weight="thin" />
        )}
        <Text className="text-zinc-200">{post.comments.length}</Text>

        <TouchableOpacity onPress={handleLike} className="flex-row gap-1">
          {post.likes.includes(profile) ? (
            <Heart size={24} weight="fill" color={colors.red[500]} />
          ) : (
            <Heart size={24} weight="thin" color={colors.gray[300]} />
          )}
          <Text className="text-zinc-200">{post.likes.length}</Text>
        </TouchableOpacity>
        {post.profile._id === profile._id && (
          <TouchableOpacity onPress={handleDelete}>
            <Trash
              color={colors.red[500]}
              size={24}
              weight='fill'
            />
          </TouchableOpacity>
        )} 
          </View>
        
    </View>
  )
}
