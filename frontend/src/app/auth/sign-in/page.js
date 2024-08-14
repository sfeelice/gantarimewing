'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const [wrong, setWrong] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      })
      if (!res?.error) {
        router.refresh()
      } else {
        setWrong(true)
        setTimeout(() => {
          setWrong(false)
        }, 3000)
      }
    } catch (err) {
      throw console.error(err)
    }
    console.log(wrong)
  }

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-gray-700 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-700 block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="hover:bg-primary-dark w-full rounded bg-primary px-4 py-2 font-bold text-white"
          >
            Sign In
          </button>
        </form>
        <p className="text-center">
          Don&apos;t have an account?{' '}
          <a href="/auth/sign-up" className="text-primary hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}
