'use client'


import {NextUIProvider} from '@nextui-org/react'
import { NavigationProvider } from './Oursolution/NavigationContext'

export function Providers({children}) {
  return (
    <NextUIProvider>
       <NavigationProvider>

      {children}
       </NavigationProvider>


    </NextUIProvider>
  )
}