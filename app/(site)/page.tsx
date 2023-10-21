'use client';

import Image from 'next/image';
import { useState } from 'react';
import AuthForm from './_components/AuthForm';

export type Variant = 'LOGIN' | 'REGISTER';

export default function Home() {
  const [variant, setVariant] = useState<Variant>('LOGIN');

  return (
    <div className='flex min-h-full flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image
          src='/assets/images/logo.png'
          alt='Logo'
          height={48}
          width={48}
          className='mx-auto w-auto'
        />
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
          {variant === 'LOGIN'
            ? 'Sign in to your account'
            : 'Create a new account'}
        </h2>
      </div>
      <AuthForm variant={variant} setVariant={setVariant} />
    </div>
  );
}
