'use client'
import { useState, useCallback } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { signIn } from 'next-auth/react'
// import { useRouter } from 'next/router'

import Input from '@/components/form/Input'
import Button from '@/components/Button'

const Signin = () => {
  // const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = useCallback((data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      callbackUrl: '/home',
    }).then((res) => {
      setIsLoading(false)

      if (res?.error) {
        console.log(res.error)
      }
    })
  }, [])

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col gap-4">
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          type="password"
          label="Password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Button
          label="Sign in"
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  )
}

export default Signin
