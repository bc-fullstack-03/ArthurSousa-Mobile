
import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'


interface ButtonProps extends TouchableOpacityProps{
  title: string

}
export function Button(props:ButtonProps) {
  
    return (
      <TouchableOpacity className="bg-cyan-300 rounded min-w-[240] px-4 py-2 items-center" {...props} >
        <Text className='font-semibold text-xs'>{props.title}</Text>
      </TouchableOpacity>
    )

}

