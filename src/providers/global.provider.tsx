'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from './theme.provider'
import { LOCAL_STORAGE_KEYS } from '@/constants/storage-keys'

export const GlobalProvider = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			storageKey={LOCAL_STORAGE_KEYS.THEME}
		>
			{children}
		</ThemeProvider>
	)
}
