import { createNavigationContainerRef } from "@react-navigation/native"

type NavigationParams = { [key: string]: any }

type NavigationFunction = (name: string, params?: NavigationParams) => void

export const navigationRef: React.RefObject<any> = createNavigationContainerRef()

export const navigation: NavigationFunction = (name, params) => {
  if (navigationRef.current && navigationRef.current.isReady()) {
    navigationRef.current.navigate(name, params)
  }
}
