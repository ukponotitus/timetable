import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Context from '@/context/auth'
import  '../pages/service/api/config'
// import ProtectedRoute from '@/component/protectedroute'
// import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <Context>
    <Component {...pageProps} />
    </Context>
    </QueryClientProvider>

  )
}
