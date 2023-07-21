'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/features/theme'

interface Props {
  children: ReactNode
}

export default function Provider({ children }: Props) {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  )
}
