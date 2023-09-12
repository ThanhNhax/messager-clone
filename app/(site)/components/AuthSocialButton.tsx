'use clinet'
import React from 'react'
import {IconType} from 'react-icons'


interface AuthSocialButtonProps{
    icon:IconType;
    onCLick : ()=>void;
}
const AuthSocialButton:React.FC<AuthSocialButtonProps> = ({
    icon:Icon,
    onCLick

}) => {
  return (
    <button type='button'onClick={onCLick}
    className='inline-flex w-full justify-center ring-offset-emerald-50 bg-white px-4 py-2 
    text-gray-500 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'>
        <Icon/>
    </button>
  )
}

export default AuthSocialButton