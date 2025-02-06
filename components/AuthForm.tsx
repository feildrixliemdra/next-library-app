'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form'
import { z, ZodType } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { FIELD_NAMES, FIELD_TYPES } from '../constant'
import ImageUpload from './ImageUpload'
import { toast } from '../hooks/use-toast'
import { useRouter } from 'next/navigation'
interface Props<T extends FieldValues> {
  schema: ZodType<T>
  defaultValue: T
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>
  type: 'SIGN_UP' | 'SIGN_IN'
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValue,
  onSubmit,
}: Props<T>) => {
  const router = useRouter()
  const isSignIn = type === 'SIGN_IN'
  // 1. Define form.
  const form: UseFormReturn<T> = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValue as DefaultValues<T>,
  })

  // 2. Define a submit handler.
  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data)
    if (result.success) {
      toast({
        title: 'Success',
        description: isSignIn
          ? 'You have Successfully Signed In'
          : 'You have Successfully Signed Up',
      })

      router.push('/')
    } else {
      toast({
        title: 'Error',
        description: result.error || 'Something went wrong',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-semibold text-white'>
        {isSignIn
          ? 'Welcome back to NextLibrary'
          : 'Create your library account'}
      </h1>
      <p>
        {isSignIn
          ? 'Access the vast book collection and stay updated'
          : 'Sign up to get started'}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='space-y-6 w-full'
        >
          {Object.keys(defaultValue).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='capitalize'>
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === 'universityCard' ? (
                      <ImageUpload onFileChange={field.onChange} />
                    ) : (
                      <Input
                        {...field}
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        className='form-input'
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type='submit' className='form-btn'>
            {isSignIn ? 'Sign in' : 'Sign up'}
          </Button>
        </form>
      </Form>
      <p className='text-center text-base font-medium'>
        {isSignIn ? 'New to NextLibrary?' : 'Already hae ab account?'} {''}
        <Link
          href={isSignIn ? '/signup' : 'signin'}
          className='font-bold text-primary'
        >
          {isSignIn ? 'Create an account' : 'Sign in'}
        </Link>
      </p>
    </div>
  )
}

export default AuthForm
