import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { ImageUri } from '../types/image';
import { Button } from './Button';

interface PostImagePickerProps {
  onFileLoaded: (file: ImageUri) => void;
}

export function PostImagePicker({ onFileLoaded }: PostImagePickerProps) {
  const [image, setImage] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const  uri  = result.assets[0]?.uri;
      setImage(uri);
      const name = uri.match(/[^\\/]+$/)[0];

      const file = {
        name,
   
        uri,
        type: 'image/jpg',
      };
        console.log(file);
        
      onFileLoaded(file);
    }
  };

  return (
    <View className='justify-center'>
      <Button title="Anexar imagem" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
