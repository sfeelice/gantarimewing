'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>{message}</p>
        <button onClick={onClose} className="w-full mt-4 px-4 py-2 bg-primary text-white rounded">
          OK
        </button>
      </div>
    </div>
  )
}

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState('') 
  const [passwordError, setPasswordError] = useState(null)
  const [modalMessage, setModalMessage] = useState(null) 
  const router = useRouter()

  const handlePasswordChange = (e) => {
    const value = e.target.value
    setPassword(value)
    if (confirmPassword && value !== confirmPassword) {
      setPasswordError('Passwords do not match')
    } else {
      setPasswordError(null)
    }
  }

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value
    setConfirmPassword(value)
    if (password && value !== password) {
      setPasswordError('Passwords do not match')
    } else {
      setPasswordError(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (passwordError) {
      setModalMessage('Please fix the errors before submitting.')
      return
    }

    try {
      console.log('Submitting data:', { username, email, password, status })
      const response = await axios.post(
        'http://localhost:5000/admin/SignUp',
        {
          username,
          email,
          password,
          status,
        },
        { withCredentials: true }, 
      )

      if (response.status === 200 || response.status === 201) {
        router.push('/auth/sign-in')
      }
    } catch (error) {
      if (error.response) {
        console.error('There was an error during signup:', error.response.data)
        setModalMessage(`Sign up failed: ${error.response.data.message}`)
      } else if (error.request) {
        console.error('No response received:', error.request)
        setModalMessage('No response from the server. Please try again.')
      } else {
        console.error('Error setting up the request:', error.message)
        setModalMessage('An error occurred. Please try again.')
      }
    }
  }

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-darkgrey block text-sm font-medium">
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
            <label htmlFor="username" className="text-gray-700 block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-700 block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-600 absolute inset-y-0 right-3 flex items-center text-sm"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirm-password" className="text-darkgrey block text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="mt-1 w-full rounded border px-4 py-2 focus:border-primary focus:outline-none focus:ring-primary"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-darkgrey absolute inset-y-0 right-3 flex items-center text-sm"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {passwordError && <p className="text-red text-sm mt-2">{passwordError}</p>}
          </div>
          <div>
            <label className="text-gray-700 block text-sm font-medium">Status</label>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Baha"
                  checked={status === 'Baha'}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Baha</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Sobangan"
                  checked={status === 'Sobangan'}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Sobangan</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="hover:bg-primary-dark w-full rounded bg-primary px-4 py-2 font-bold text-white"
            disabled={passwordError !== null}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account?{' '}
          <a href="/auth/sign-in" className="text-primary hover:underline">
            Sign In
          </a>
        </p>
      </div>

      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage(null)} />
      )}
    </div>
  )
}
