'use client';

import React, { useCallback, useState } from 'react';
import Input from '@/app/components/inputs/Input';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button from '@/app/components/buttons/Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);
  // const toggleVariant = () => {
  //   if (variant === 'LOGIN') {
  //     setVariant('REGISTER');
  //   } else {
  //     setVariant('LOGIN');
  //   }
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      emaii: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      // call register
    }
    if (variant === 'LOGIN') {
      // call login
    }
  };

  const sociaAction = (action: string) => {
    setIsLoading(true);
  };
  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form action='' className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input id='name' label='Name' register={register} errors={errors} />
          )}
          <Input
            label='Email address'
            register={register}
            type='email'
            id='email'
            errors={errors}
          />
          <Input
            label='Password'
            register={register}
            type='password'
            id='password'
            errors={errors}
          />
          <div className=''>
            <Button disabled={isLoading} fullWidth type='submit'>
              {variant === 'LOGIN' ? 'Login' : 'Register'}
            </Button>
          </div>
        </form>

        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 flex gap-2'>
            <AuthSocialButton
              icon={BsGithub}
              onCLick={() => sociaAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onCLick={() => sociaAction('google')}
            />
          </div>
        </div>

        <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
          <div className=''>
            {variant == 'LOGIN'
              ? 'New to Messager?'
              : 'Already have a account?'}
          </div>
          <div className='underline cursor-pointer' onClick={toggleVariant}>
            {variant === 'LOGIN' ? 'Create an account ' : 'Login '}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
