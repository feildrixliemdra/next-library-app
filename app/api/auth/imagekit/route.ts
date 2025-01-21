import ImageKit from 'imagekit'
import { NextResponse } from 'next/server'
import config from '../../../../lib/config'
const {
  env: {
    imageKit: { publicKey, privateKey, urlEndpoint },
  },
} = config

const imagekit = new ImageKit({
  publicKey: publicKey,
  privateKey: privateKey,
  urlEndpoint: urlEndpoint,
})

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters())
}
