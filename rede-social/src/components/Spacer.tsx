
import { ReactNode } from 'react'
import { View } from 'react-native'

interface SpacerProps{
  children? : ReactNode
  
}
export function Spacer({children}:SpacerProps) {
    return (
      <View className='m-3'>
       {children}
      </View>
    )

}