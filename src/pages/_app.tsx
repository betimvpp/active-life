import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/services/queryClient'
import { UserContextProvider } from '@/Contexts/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} /> 
        </QueryClientProvider>
      </UserContextProvider>
  )
}
