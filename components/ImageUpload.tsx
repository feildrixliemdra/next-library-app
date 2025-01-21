'use client'
import React, { useRef, useState } from 'react'
import {
  IKImage,
  IKVideo,
  ImageKitProvider,
  IKUpload,
  ImageKitContext,
} from 'imagekitio-next'
import config from '../lib/config'
import Image from 'next/image'
import { useToast } from '../hooks/use-toast'
import { cn } from '../lib/utils'

const {
  env: {
    imageKit: { publicKey, urlEndpoint },
  },
} = config

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`)
    if (!response.ok) {
      const errText = await response.text()
      throw new Error(`HTTP error ${errText}! status: ${response.status}`)
    }

    const data = await response.json()
    const { signature, expire, token } = data
    return { token, expire, signature }
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error}`)
  }
}

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void
}) => {
  const ikUploadRef = useRef(null)
  const [file, setFile] = useState<{ filePath: string } | null>(null)
  const { toast } = useToast()

  const onError = (err) => {
    toast({
      title: 'Error uploading file',
      description: 'Error: ' + err,
      variant: 'destructive',
    })
    console.log('Error', err)
  }

  const onSuccess = (res) => {
    setFile(res)
    onFileChange(res.filePath)
    console.log('Success', res)
  }

  return (
    <ImageKitProvider
      authenticator={authenticator}
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
    >
      <IKUpload
        ref={ikUploadRef}
        fileName='test-upload.jpg'
        onError={onError}
        onSuccess={onSuccess}
        // onChange={(file) => setFile(file)}
        className='hidden'
      />
      <button
        onClick={(e) => {
          e.preventDefault()

          if (ikUploadRef.current) {
            //@ts-ignore
            ikUploadRef.current?.click()
          }
        }}
        className={cn('upload-btn')}
      >
        <Image
          src='/icons/upload.svg'
          alt='upload-icon'
          height={20}
          width={20}
          className='object-contain'
        />
        <p className='text-base -text-light-100'>Upload file</p>
        {file && <p className='upload-filename'>{file.filePath}</p>}
      </button>
      {file && (
        <IKImage
          path={file.filePath}
          alt={file.filePath}
          lqip={{ active: true }}
          width={500}
          height={300}
        />
      )}
    </ImageKitProvider>
  )
}

export default ImageUpload
