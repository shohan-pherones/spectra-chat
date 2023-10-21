'use client';

import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { Variant } from '../page';
import AuthSocialButton from './AuthSocialButton';

interface AuthFormProps {
  variant: Variant;
  setVariant: (variant: Variant) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ variant, setVariant }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant, setVariant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      /* AXIOS REGISTER */
    }

    if (variant === 'LOGIN') {
      /* NEXTAUTH SIGN IN */
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    /* NEXTAUTH SOCIAL SIGN IN */
  };

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg  sm:px-10'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              id='name'
              label='Name'
              register={register}
              erros={errors}
              placeholder='Sarah Parker'
              disabled={isLoading}
            />
          )}
          <Input
            id='email'
            label='Email'
            type='email'
            register={register}
            erros={errors}
            placeholder='hello@example.com'
            disabled={isLoading}
          />
          <Input
            id='password'
            label='Password'
            type='password'
            register={register}
            erros={errors}
            placeholder='Enter your password here'
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} fullWidth type='submit'>
              {variant == 'LOGIN'
                ? !isLoading
                  ? 'Sign in'
                  : 'Signing in'
                : !isLoading
                ? 'Register'
                : 'Signing up'}
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
                or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 flex gap-2'>
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
          </div>
        </div>

        <div className='mt-6 flex justify-center gap-2 px-2 text-sm text-gray-500'>
          <div>
            {variant === 'LOGIN'
              ? 'New to Spectra Chat?'
              : 'Already have an account?'}
          </div>
          <div onClick={toggleVariant} className='cursor-pointer underline'>
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
