'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { useRouter } from 'next/navigation'
import { SessionProvider as NextAuthSessionProvider, signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

import { setTokenApi } from '@/lib/axios'
import { ACCESS_TOKEN_EXP_AUTH_REVALIDATE } from '@/lib/const'

function NextAuthSessionProviderWrapper({ children }) {
  return (
    <NextAuthSessionProvider refetchInterval={ACCESS_TOKEN_EXP_AUTH_REVALIDATE}>
      {children}
    </NextAuthSessionProvider>
  )
}

function SessionWrapper({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.refresh()
    }
  }, [router, status])

  useEffect(() => {
    if (status === 'authenticated') {
      setTokenApi(session?.user?.accessToken ?? '')
    }
  }, [session?.user?.accessToken, status])

  return children
}

function ReactQueryProviderWrapper({ children }) {
  const router = useRouter()
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            cacheTime: 10 * 60 * 1000, // 10 minutes
          },
          mutations: {
            onError: (err) => {
              if (err.status === 401) {
                signIn() // Redirect user to sign-in page due to invalid access token
              } else if (err.status && err.status < 500) {
                router.refresh() // Refresh the page for other client-side errors
              }
            },
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <NextAuthSessionProviderWrapper>
      <SessionWrapper>
        <ReactQueryProviderWrapper>{children}</ReactQueryProviderWrapper>
      </SessionWrapper>
    </NextAuthSessionProviderWrapper>
  )
}

export default Providers
