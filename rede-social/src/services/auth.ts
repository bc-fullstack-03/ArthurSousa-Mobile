import * as SecureStore from 'expo-secure-store';

 export async function getAuthHeader(){

  const token = await SecureStore.getItemAsync('token')

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }

  return authHeader
}


export async function getProfile(){
  const profile = await SecureStore.getItemAsync('profile')
  return profile
}

export async function getUser(){
  const user = await SecureStore.getItemAsync('user')
  return user
}