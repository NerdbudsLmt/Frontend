'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider  as NextThemesProvider  } from 'next-themes'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <NextUIProvider>
          {/* <NextThemesProvider 
            attribute='class'
            defaultTheme='dark'
          > */}
            {children}
          {/* </NextThemesProvider> */}
        </NextUIProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}