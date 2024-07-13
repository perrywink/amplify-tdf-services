"use client"
import { StorageImage } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import Image from 'next/image';

export default function S3ImageRender() {
  return (
    <StorageImage alt="logo" path="public/assets/logo-100.png" className='w-6 h-6'/>
    // <Image src="/logo-100.png" alt="logo" width={100} height={100} className='w-6 h-6'/>
  )
}