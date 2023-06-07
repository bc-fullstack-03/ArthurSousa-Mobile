import * as SecureStore from 'expo-secure-store';
import { ReactNode, createContext, useReducer } from 'react';
import { navigation } from '../../RootNavigation';
import { api } from '../../lib/axios';
import { getAuthHeader, getProfile, getUser } from '../../services/auth';
import { Post } from '../../types/Post';


interface PostContext {
  posts: Post[];
  getPosts?: () => void;
  likesPost?: ({ postId }: { postId: string }) => void;
  unLikePost?: ({ postId }: { postId: string }) => void;
  deletePost?: ({ postId }: { postId: string }) => void;
  createPost?: ({ title, description, image }: { title: string, description: string, image: string }) => void;
}

const defaultValue = {
  posts: []
}




const Context = createContext<PostContext>(defaultValue)


function Provider({ children }: { children: ReactNode }) {
  function reducer(state: PostContext, action: any) {

    switch (action.type) {
      case 'show_post':
        return {
          ...state,
          posts: action.payload,
        }

      case 'like_post':
        const newPostLike = state.posts
        const [postLiked, ..._] = newPostLike.filter((post) => post._id === action.payload.id)
        postLiked.likes.push(action.payload.profile)
        return {
          posts: [...newPostLike]
        }

      case 'unlike_post':
        const unPostLike = state.posts
        const [unPostLiked, ...rest] = unPostLike.filter(post => post._id === action.payload.id)
        const index = unPostLiked.likes.indexOf(action.payload.profile)
        unPostLiked.likes.splice(index, 1)
        return {
          posts: [...unPostLike]
        }

      case 'create_post':
        return {
          posts: [action.payload, ...state.posts]
        }

      case 'delete_post':
        const deletePost = state.posts;
        const deleteFeed = deletePost.filter((post) => post._id !== action.payload.id);
        return {
          ...state,
          posts: deleteFeed,
        }



      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, defaultValue);


  async function getPosts() {
    try {
      const authHeader = await getAuthHeader()
      const { data } = await api.get('feed', authHeader)
      dispatch({
        type: 'show_post',
        payload: data
      })

    } catch (error) {

    }
  }

  async function likesPost({ postId }: { postId: string }) {

    try {
      const authHeader = await getAuthHeader()
      await api.post(`posts/${postId}/like`, null, authHeader)
      const profile = await getProfile()
      dispatch({
        type: 'like_post',

        payload: {
          id: postId,
          profile,
        }
      })

    } catch (error) {
      console.error(error)
    }
  }

  async function unLikePost({ postId }: { postId: string }) {
    try {
      const authHeader = await getAuthHeader()
      api.post(`posts/${postId}/unlike`, null, authHeader)
      const profile = await getProfile()
      dispatch({
        type: 'unlike_post',

        payload: {
          id: postId,
          profile: profile,
        }
      })

    } catch (error) {
      console.error(error)
    }

  }



  async function deletePost({ postId }: { postId: string }) {
    try {
      const authHeader = await getAuthHeader();
      await api.delete(`posts/${postId}`, { headers: authHeader.headers });
      dispatch({
        type: "delete_post",
        payload: { id: postId }
      });


    } catch (err) {

    }
  }

  async function createPost({ title, description, image }: { title: string, description: string, image: string }) {
    try {  
     const token = await SecureStore.getItemAsync('token')
      const name = await getUser()
      const formData = new FormData()
      formData.append('title', title)
      formData.append('description', description || "")
      formData.append('file', image)

        console.log(image);
        
      const response= await api.post('posts', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      })
          console.log(response);
          
      dispatch({
        type: "create_post",
        payload: {
          ...response.data,
          profile: {
            name
          }
        }
      })
      navigation('PostList')
    } catch (error) {
      

    }
  }

  return (
    <Context.Provider
      value={
        {
          ...state,
          getPosts,
          likesPost,
          unLikePost,
          deletePost,
          createPost,
        }

      }
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context };

